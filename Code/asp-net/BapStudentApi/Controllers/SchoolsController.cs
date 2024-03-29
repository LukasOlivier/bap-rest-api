using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BapStudentApi.Models;
using Microsoft.AspNetCore.Authorization;

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
            // return only shools with OwnerId equal to the current user id from the token
            Console.WriteLine(User.Identity);
            User currentUser = await _context.User.FirstOrDefaultAsync(u => u.Email == User.Identity.Name);
            return await _context.School.Where(s => s.OwnerId == currentUser.Id).ToListAsync();
        }

        // GET: api/Schools/5/students
        [HttpGet]
        [Authorize]
        [Route("{id}/students")]
        public async Task<ActionResult<Student>> GetSchoolStudents(int id)
        {

            User currentUser = await _context.User.FirstOrDefaultAsync(u => u.Email == User.Identity.Name);

            School school = await _context.School.FindAsync(id);

            if (school == null)
            {
                return NotFound();
            }

            if (school.OwnerId != currentUser.Id)
            {
                return Unauthorized();
            }

            var schoolWithStudents = await _context.School.Include(s => s.Students).FirstOrDefaultAsync(s => s.Id == id);
            return Ok(schoolWithStudents.Students);
        }

    }
}
