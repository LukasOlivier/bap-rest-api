using FluentValidation;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BapStudentApi.Models;

[Table("Students")] // Specify the table name
[Index("Email", Name = "UQ__Students__AB6E61640802FA76", IsUnique = true)]
public partial class Student
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("name")]
    [StringLength(255)]
    [Unicode(false)]
    [Required]

    public string Name { get; set; } = null!;

    [Column("age")]
    [Required]
    public int? Age { get; set; }

    [Column("email")]
    [StringLength(255)]
    [Unicode(false)]
    [Required]
    public string? Email { get; set; }

    [Column("phone")]
    [StringLength(255)]
    [Unicode(false)]
    [Required]
    public string? Phone { get; set; }

    [Column("schoolId")]
    public int? SchoolId { get; set; }
}

public class StudentValidator : AbstractValidator<Student>
{
    public StudentValidator()
    {
        RuleFor(x => x.Name).NotEmpty().WithMessage("Name is required");
        RuleFor(x => x.Age).NotEmpty().GreaterThan(0).WithMessage("Age is required and must be greater than 0");
        RuleFor(x => x.Email).NotEmpty().EmailAddress().WithMessage("Email is required and must be a valid email address");
        RuleFor(x => x.Phone);
    }
}