using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CMS.API.Migrations
{
    /// <inheritdoc />
    public partial class InitialData10 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
 

            migrationBuilder.CreateIndex(
                name: "IX_EventAttendances_PlannerId",
                table: "EventAttendances",
                column: "PlannerId");

            migrationBuilder.CreateIndex(
                name: "IX_EventAttendances_UserId",
                table: "EventAttendances",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_EventAttendances_EventId",
                table: "EventAttendances");

            migrationBuilder.DropColumn(
                name: "ParticipantId",
                table: "EventAttendances");
        }
    }
}
