BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[auth_group] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(150) NOT NULL,
    CONSTRAINT [PK__auth_gro__3213E83F6513A4B2] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [auth_group_name_a6ea08ec_uniq] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[auth_group_permissions] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [group_id] INT NOT NULL,
    [permission_id] INT NOT NULL,
    CONSTRAINT [PK__auth_gro__3213E83F72140444] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[auth_permission] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(255) NOT NULL,
    [content_type_id] INT NOT NULL,
    [codename] NVARCHAR(100) NOT NULL,
    CONSTRAINT [PK__auth_per__3213E83F26208EFB] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[auth_user] (
    [id] INT NOT NULL IDENTITY(1,1),
    [password] NVARCHAR(128) NOT NULL,
    [last_login] DATETIMEOFFSET,
    [is_superuser] BIT NOT NULL,
    [username] NVARCHAR(150) NOT NULL,
    [first_name] NVARCHAR(150) NOT NULL,
    [last_name] NVARCHAR(150) NOT NULL,
    [email] NVARCHAR(254) NOT NULL,
    [is_staff] BIT NOT NULL,
    [is_active] BIT NOT NULL,
    [date_joined] DATETIMEOFFSET NOT NULL,
    CONSTRAINT [PK__auth_use__3213E83FEE7EE3A3] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [auth_user_username_6821ab7c_uniq] UNIQUE NONCLUSTERED ([username])
);

-- CreateTable
CREATE TABLE [dbo].[auth_user_groups] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [user_id] INT NOT NULL,
    [group_id] INT NOT NULL,
    CONSTRAINT [PK__auth_use__3213E83FE1BB69F9] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[auth_user_user_permissions] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [user_id] INT NOT NULL,
    [permission_id] INT NOT NULL,
    CONSTRAINT [PK__auth_use__3213E83F548F0ADA] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[authtoken_token] (
    [key] NVARCHAR(40) NOT NULL,
    [created] DATETIMEOFFSET NOT NULL,
    [user_id] INT NOT NULL,
    CONSTRAINT [PK__authtoke__DFD83CAE228D2E07] PRIMARY KEY CLUSTERED ([key]),
    CONSTRAINT [UQ__authtoke__B9BE370EEB6C1A8A] UNIQUE NONCLUSTERED ([user_id])
);

-- CreateTable
CREATE TABLE [dbo].[django_admin_log] (
    [id] INT NOT NULL IDENTITY(1,1),
    [action_time] DATETIMEOFFSET NOT NULL,
    [object_id] NVARCHAR(max),
    [object_repr] NVARCHAR(200) NOT NULL,
    [action_flag] SMALLINT NOT NULL,
    [change_message] NVARCHAR(max) NOT NULL,
    [content_type_id] INT,
    [user_id] INT NOT NULL,
    CONSTRAINT [PK__django_a__3213E83F19DB03A5] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[django_content_type] (
    [id] INT NOT NULL IDENTITY(1,1),
    [app_label] NVARCHAR(100) NOT NULL,
    [model] NVARCHAR(100) NOT NULL,
    CONSTRAINT [PK__django_c__3213E83F9DD0DEC5] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[django_migrations] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [app] NVARCHAR(255) NOT NULL,
    [name] NVARCHAR(255) NOT NULL,
    [applied] DATETIMEOFFSET NOT NULL,
    CONSTRAINT [PK__django_m__3213E83F548190A5] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[django_session] (
    [session_key] NVARCHAR(40) NOT NULL,
    [session_data] NVARCHAR(max) NOT NULL,
    [expire_date] DATETIMEOFFSET NOT NULL,
    CONSTRAINT [PK__django_s__B3BA0F1FF9AC53FE] PRIMARY KEY CLUSTERED ([session_key])
);

-- CreateTable
CREATE TABLE [dbo].[Schools] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(255) NOT NULL,
    [ownerId] INT,
    CONSTRAINT [PK__Schools__3213E83FBAF37205] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Students] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(255) NOT NULL,
    [age] INT,
    [email] VARCHAR(255),
    [phone] VARCHAR(255),
    [schoolId] INT,
    CONSTRAINT [PK__Students__3213E83F02B88F59] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [UQ__Students__AB6E6164714D6564] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Users] (
    [id] INT NOT NULL IDENTITY(1,1),
    [email] VARCHAR(255),
    [password] VARCHAR(255) NOT NULL,
    CONSTRAINT [PK__Users__3213E83F741580AA] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [UQ__Users__AB6E6164BA555F43] UNIQUE NONCLUSTERED ([email])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [auth_group_permissions_group_id_b120cbf9] ON [dbo].[auth_group_permissions]([group_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [auth_group_permissions_permission_id_84c5c92e] ON [dbo].[auth_group_permissions]([permission_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [auth_permission_content_type_id_2f476e4b] ON [dbo].[auth_permission]([content_type_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [auth_user_groups_group_id_97559544] ON [dbo].[auth_user_groups]([group_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [auth_user_groups_user_id_6a12ed8b] ON [dbo].[auth_user_groups]([user_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [auth_user_user_permissions_permission_id_1fbb5f2c] ON [dbo].[auth_user_user_permissions]([permission_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [auth_user_user_permissions_user_id_a95ead1b] ON [dbo].[auth_user_user_permissions]([user_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [django_admin_log_content_type_id_c4bce8eb] ON [dbo].[django_admin_log]([content_type_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [django_admin_log_user_id_c564eba6] ON [dbo].[django_admin_log]([user_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [django_session_expire_date_a5c62663] ON [dbo].[django_session]([expire_date]);

-- AddForeignKey
ALTER TABLE [dbo].[auth_group_permissions] ADD CONSTRAINT [auth_group_permissions_group_id_b120cbf9_fk_auth_group_id] FOREIGN KEY ([group_id]) REFERENCES [dbo].[auth_group]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[auth_group_permissions] ADD CONSTRAINT [auth_group_permissions_permission_id_84c5c92e_fk_auth_permission_id] FOREIGN KEY ([permission_id]) REFERENCES [dbo].[auth_permission]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[auth_permission] ADD CONSTRAINT [auth_permission_content_type_id_2f476e4b_fk_django_content_type_id] FOREIGN KEY ([content_type_id]) REFERENCES [dbo].[django_content_type]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[auth_user_groups] ADD CONSTRAINT [auth_user_groups_group_id_97559544_fk_auth_group_id] FOREIGN KEY ([group_id]) REFERENCES [dbo].[auth_group]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[auth_user_groups] ADD CONSTRAINT [auth_user_groups_user_id_6a12ed8b_fk_auth_user_id] FOREIGN KEY ([user_id]) REFERENCES [dbo].[auth_user]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[auth_user_user_permissions] ADD CONSTRAINT [auth_user_user_permissions_permission_id_1fbb5f2c_fk_auth_permission_id] FOREIGN KEY ([permission_id]) REFERENCES [dbo].[auth_permission]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[auth_user_user_permissions] ADD CONSTRAINT [auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id] FOREIGN KEY ([user_id]) REFERENCES [dbo].[auth_user]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[authtoken_token] ADD CONSTRAINT [authtoken_token_user_id_35299eff_fk_auth_user_id] FOREIGN KEY ([user_id]) REFERENCES [dbo].[auth_user]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[django_admin_log] ADD CONSTRAINT [django_admin_log_content_type_id_c4bce8eb_fk_django_content_type_id] FOREIGN KEY ([content_type_id]) REFERENCES [dbo].[django_content_type]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[django_admin_log] ADD CONSTRAINT [django_admin_log_user_id_c564eba6_fk_auth_user_id] FOREIGN KEY ([user_id]) REFERENCES [dbo].[auth_user]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Schools] ADD CONSTRAINT [FK__Schools__ownerId__075714DC] FOREIGN KEY ([ownerId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Students] ADD CONSTRAINT [FK__Students__school__0B27A5C0] FOREIGN KEY ([schoolId]) REFERENCES [dbo].[Schools]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
