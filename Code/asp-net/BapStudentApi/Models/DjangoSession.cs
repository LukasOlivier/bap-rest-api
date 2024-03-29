using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BapStudentApi.Models;

[Table("django_session")]
[Index("ExpireDate", Name = "django_session_expire_date_a5c62663")]
public partial class DjangoSession
{
    [Key]
    [Column("session_key")]
    [StringLength(40)]
    public string SessionKey { get; set; } = null!;

    [Column("session_data")]
    public string SessionData { get; set; } = null!;

    [Column("expire_date")]
    public DateTimeOffset ExpireDate { get; set; }
}
