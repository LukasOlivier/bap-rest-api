using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BapStudentApi.Models;

[Table("auth_user_groups")]
[Index("GroupId", Name = "auth_user_groups_group_id_97559544")]
[Index("UserId", Name = "auth_user_groups_user_id_6a12ed8b")]
public partial class AuthUserGroup
{
    [Key]
    [Column("id")]
    public long Id { get; set; }

    [Column("user_id")]
    public int UserId { get; set; }

    [Column("group_id")]
    public int GroupId { get; set; }

    [ForeignKey("GroupId")]
    [InverseProperty("AuthUserGroups")]
    public virtual AuthGroup Group { get; set; } = null!;

    [ForeignKey("UserId")]
    [InverseProperty("AuthUserGroups")]
    public virtual AuthUser User { get; set; } = null!;
}
