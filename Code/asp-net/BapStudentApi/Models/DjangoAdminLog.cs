using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BapStudentApi.Models;

[Table("django_admin_log")]
[Index("ContentTypeId", Name = "django_admin_log_content_type_id_c4bce8eb")]
[Index("UserId", Name = "django_admin_log_user_id_c564eba6")]
public partial class DjangoAdminLog
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("action_time")]
    public DateTimeOffset ActionTime { get; set; }

    [Column("object_id")]
    public string? ObjectId { get; set; }

    [Column("object_repr")]
    [StringLength(200)]
    public string ObjectRepr { get; set; } = null!;

    [Column("action_flag")]
    public short ActionFlag { get; set; }

    [Column("change_message")]
    public string ChangeMessage { get; set; } = null!;

    [Column("content_type_id")]
    public int? ContentTypeId { get; set; }

    [Column("user_id")]
    public int UserId { get; set; }

    [ForeignKey("ContentTypeId")]
    [InverseProperty("DjangoAdminLogs")]
    public virtual DjangoContentType? ContentType { get; set; }

    [ForeignKey("UserId")]
    [InverseProperty("DjangoAdminLogs")]
    public virtual AuthUser User { get; set; } = null!;
}
