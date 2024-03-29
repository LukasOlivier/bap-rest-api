using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BapStudentApi.Models;

[Table("auth_group_permissions")]
[Index("GroupId", Name = "auth_group_permissions_group_id_b120cbf9")]
[Index("PermissionId", Name = "auth_group_permissions_permission_id_84c5c92e")]
public partial class AuthGroupPermission
{
    [Key]
    [Column("id")]
    public long Id { get; set; }

    [Column("group_id")]
    public int GroupId { get; set; }

    [Column("permission_id")]
    public int PermissionId { get; set; }

    [ForeignKey("GroupId")]
    [InverseProperty("AuthGroupPermissions")]
    public virtual AuthGroup Group { get; set; } = null!;

    [ForeignKey("PermissionId")]
    [InverseProperty("AuthGroupPermissions")]
    public virtual AuthPermission Permission { get; set; } = null!;
}
