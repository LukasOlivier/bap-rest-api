using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

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
    public string Name { get; set; } = null!;

    [Column("age")]
    public int? Age { get; set; }

    [Column("email")]
    [StringLength(255)]
    [Unicode(false)]
    public string? Email { get; set; }

    [Column("phone")]
    [StringLength(255)]
    [Unicode(false)]
    public string? Phone { get; set; }

    [Column("schoolId")]
    public int? SchoolId { get; set; }
}
