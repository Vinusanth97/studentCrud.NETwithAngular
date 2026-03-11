using System.ComponentModel.DataAnnotations;

namespace newScienceHall_BE.Models
{
    public class StudentDetails
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string ParentName { get; set; }

        [Required]
        public string ParentContact { get; set; }

        
        }

    }

