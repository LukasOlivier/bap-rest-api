using BapStudentApi.Models;
using Microsoft.EntityFrameworkCore;

namespace BapStudentApi.Helpers
{
    public class GetUserFromRequest
    {
        public static async Task<User> GetUserFromRequestAsync(AppDbContext context, HttpRequest request)
        {
            string? email = request.HttpContext.User.Identity.Name;
            return await context.User.FirstOrDefaultAsync(u => u.Email == email);
        }
    }
}
