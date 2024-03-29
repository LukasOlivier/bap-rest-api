using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BapStudentApi.Models;

[Table("django_content_type")]
public partial class DjangoContentType
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("app_label")]
    [StringLength(100)]
    public string AppLabel { get; set; } = null!;

    [Column("model")]
    [StringLength(100)]
    public string Model { get; set; } = null!;

    [InverseProperty("ContentType")]
    public virtual ICollection<AuthPermission> AuthPermissions { get; set; } = new List<AuthPermission>();

    [InverseProperty("ContentType")]
    public virtual ICollection<DjangoAdminLog> DjangoAdminLogs { get; set; } = new List<DjangoAdminLog>();
}
