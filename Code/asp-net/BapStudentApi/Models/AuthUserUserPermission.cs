using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BapStudentApi.Models;

[Table("auth_user_user_permissions")]
[Index("PermissionId", Name = "auth_user_user_permissions_permission_id_1fbb5f2c")]
[Index("UserId", Name = "auth_user_user_permissions_user_id_a95ead1b")]
public partial class AuthUserUserPermission
{
    [Key]
    [Column("id")]
    public long Id { get; set; }

    [Column("user_id")]
    public int UserId { get; set; }

    [Column("permission_id")]
    public int PermissionId { get; set; }

    [ForeignKey("PermissionId")]
    [InverseProperty("AuthUserUserPermissions")]
    public virtual AuthPermission Permission { get; set; } = null!;

    [ForeignKey("UserId")]
    [InverseProperty("AuthUserUserPermissions")]
    public virtual AuthUser User { get; set; } = null!;
}
