using BapStudentApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BapStudentApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public StudentsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Students
        [HttpGet]

        public async Task<ActionResult<IEnumerable<Student>>> GetStudent()
        {
            return await _context.Student.ToListAsync();
        }

        // POST: api/Students
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Student>> PostStudent(Student student)
        {
            // validate the student
            StudentValidator validator = new StudentValidator();
            var validationResult = validator.Validate(student);
            if (validationResult.IsValid)
            {
                _context.Student.Add(student);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetStudent", new { id = student.Id }, student);
            }
            else
            {
                return BadRequest(validationResult.Errors);
            }
        }

        // DELETE: api/Students/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            var student = await _context.Student.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            _context.Student.Remove(student);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost]
        [Route("{id}/enroll/{schoolId}")]
        [Authorize]
        public async Task<ActionResult<Student>> EnrollStudent(int id, int schoolId)
        {
            User currentUser = await _context.User.FirstOrDefaultAsync(u => u.Email == User.Identity.Name);

            School? school = await _context.School.FindAsync(schoolId);

            if (school == null)
            {
                return NotFound();
            }

            if (school.OwnerId != currentUser.Id)
            {
                return Unauthorized();
            }

            Student? student = await _context.Student.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            if (student.SchoolId != null)
            {
                return BadRequest("Student is already enrolled in a school");
            }

            student.SchoolId = schoolId;
            await _context.SaveChangesAsync();

            return Ok(student);
        }

        [HttpPost]
        [Route("{id}/withdraw/{schoolId}")]
        [Authorize]
        public async Task<ActionResult<Student>> WithdrawStudent(int id, int schoolId)
        {
            User currentUser = await _context.User.FirstOrDefaultAsync(u => u.Email == User.Identity.Name);

            School? school = await _context.School.FindAsync(schoolId);

            if (school == null)
            {
                return NotFound();
            }

            if (school.OwnerId != currentUser.Id)
            {
                return Unauthorized();
            }

            Student? student = await _context.Student.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            student.SchoolId = null;
            await _context.SaveChangesAsync();

            return Ok(student);
        }
    }
}
