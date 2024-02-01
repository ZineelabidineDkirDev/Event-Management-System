using System.ComponentModel.DataAnnotations;

namespace CMS.API.Models.Accounts;

public class ValidateResetTokenRequest
{
    [Required]
    public string Token { get; set; }
}
