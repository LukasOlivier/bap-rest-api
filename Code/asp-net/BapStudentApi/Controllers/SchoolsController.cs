using BapStudentApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BapStudentApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SchoolsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SchoolsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Schools
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<School>>> GetSchool()
        {
            User currentUser = await _context.User.FirstOrDefaultAsync(u => u.Email == User.Identity.Name);
            return await _context.School.Where(s => s.OwnerId == currentUser.Id).ToListAsync();
        }

        // GET: api/Schools/5/students
        [HttpGet]
        [Authorize]
        [Route("{id}/students")]
        public async Task<ActionResult<Student>> GetSchoolStudents(int id)
        {

            User user = await _context.User.FirstOrDefaultAsync(u => u.Email == User.Identity.Name);

            School? school = await _context.School.FindAsync(id);

            if (school == null)
            {
                return NotFound();
            }

            if (school.OwnerId != user.Id)
            {
                return Unauthorized();
            }

            var schoolWithStudents = await _context.School.Include(s => s.Students).FirstOrDefaultAsync(s => s.Id == id);

            if (schoolWithStudents == null)
            {
                return NotFound();
            }

            return Ok(schoolWithStudents.Students);
        }

    }
}
