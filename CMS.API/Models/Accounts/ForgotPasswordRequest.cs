using System.ComponentModel.DataAnnotations;

namespace CMS.API.Models.Accounts;

public class ForgotPasswordRequest
{
    [Required]
    [EmailAddress]
    public string Email { get; set; }
}
