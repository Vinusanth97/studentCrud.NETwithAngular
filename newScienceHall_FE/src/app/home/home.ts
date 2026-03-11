import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../service/student';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { map, Observable } from 'rxjs';
import { StudentModel } from '../models/Student';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule,RouterOutlet,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  students$!:Observable<StudentModel[]> ;
  // students:StudentModel[]=[];
  filteredStudents$!:Observable<StudentModel[]>;
  searchText:string='';

  constructor(private studentService:Student,private router:Router){}

 
  ngOnInit() {
    this.students$=this.studentService.getStudents();
    this.filteredStudents$=this.students$;
    console.log("hello from ngOnInit");

  }
  deleteMethod(id:string){
    this.studentService.deleteStudent(id).subscribe({
    next:()=>{
      console.log("delete successfuly!!");
      alert("delete successfuly!!");
      this.router.navigate(['/students']);

    },
    error:(err)=>{
      console.log("Error",err);
    }
    });

  }
  searchStudent(){
    console.log("From searchStudent");
    this.students$=this.studentService.getStudents();
    this.filteredStudents$=this.students$;
    this.filteredStudents$=this.students$.pipe(
      map(students=>
        students.filter(student=>
          student.firstName.toLowerCase().includes(this.searchText.toLowerCase())||
          student.lastName.toLowerCase().includes(this.searchText.toLocaleLowerCase())
        )

      )
    );

  }
}
