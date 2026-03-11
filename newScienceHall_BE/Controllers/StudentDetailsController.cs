using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using newScienceHall_BE.Data;
using newScienceHall_BE.Models;

namespace newScienceHall_BE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentDetailsController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        public StudentDetailsController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        //Display all
        [HttpGet]
        public ActionResult<IEnumerable<StudentDetails>> GetAll()
        {
            var students = _dbContext.StudentDetails.ToList();
            if (students.Count == 0)
            {
                return NoContent();
            }
            return Ok(students);
        }

        //Get by id
        [HttpGet("{id:int}")]
        public ActionResult<StudentDetails> GetById(int id)
        {
            var result = _dbContext.StudentDetails.FirstOrDefault(x => x.Id == id);
            if (result == null)
            {
                return NoContent();
            }
            return Ok(result);
        }

        //Get by firstname
        [HttpGet("firstName/{firstName}")]
        public ActionResult<IEnumerable<StudentDetails>> GetByFirstName(string firstName)
        {
            var result = _dbContext.StudentDetails.Where(x => x.FirstName == firstName).ToList();
            if (result.Count == 0)
            {
                return NoContent();
            }
            return Ok(result);
        }

        //Get by lastName
        [HttpGet("lastName/{lastName}")]
        public ActionResult<IEnumerable<StudentDetails>>GetByLastName(string lastname)
        {
            var result = _dbContext.StudentDetails.Where(x=>x.LastName==lastname).ToList();
            if (result.Count == 0)
            {
                return NoContent();
            }
            return Ok(result);
        }

        //Create Student
        [HttpPost]
        public ActionResult<StudentDetails> Create([FromBody] StudentDetails studentDetails)
        {
             _dbContext.StudentDetails.Add(studentDetails);
            _dbContext.SaveChanges();
            
            return Ok(studentDetails);
        }

        //Update Student
        [HttpPut("{id:int}")]
        public ActionResult<StudentDetails> Update(int id, [FromBody] StudentDetails studentDetails)
        {
            if (id == 0 || id != studentDetails.Id)
            {
                return BadRequest();
            }
            
            //var result = _dbContext.StudentDetails.Find(id);
            //if (result==null)
            //{
            //    return NotFound();
            //}
            _dbContext.StudentDetails.Update(studentDetails);

            _dbContext.SaveChanges();
            return Ok(studentDetails);
        }

        //Delete Student Record
        [HttpDelete("{id:int}")]
        public ActionResult<StudentDetails>DeleteById(int id)
        {
            var result = _dbContext.StudentDetails.FirstOrDefault(x=>x.Id==id);
            if (result == null)
            {
                return BadRequest();
            }
            _dbContext.StudentDetails.Remove(result);
            _dbContext.SaveChanges();
            return NoContent();
        }


    }
}
