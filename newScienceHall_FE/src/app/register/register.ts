import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../service/student';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentModel } from '../models/Student';

@Component({
  selector: 'app-register',
  imports: [CommonModule,FormsModule,RouterOutlet,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  mode:'view'|'edit'|'register'='register';
  studentId!:string; 
  // for student variable
  student$!:Observable<StudentModel>;
  action!:string;
  message: { text: string; type: 'success' | 'error' | 'info' } | null = null;
  constructor(private route:ActivatedRoute,private StudentService:Student){}
  ngOnInit(){
    this.studentId=this.route.snapshot.paramMap.get('id')!;
    console.log("URL ID :",this.studentId);
    
    if(this.studentId){
      const modeParam=this.route.snapshot.queryParamMap.get('mode');
      this.mode=modeParam==='edit'?'edit':'view';
    }
    else{
      this.mode='register';
    }

    if(this.studentId){
      this.student$=this.StudentService.getStudent(this.studentId);
     }
  }
  
   onSubmit(formData: any){
    if(this.action==='submit'){
    const student={...formData.value};
    if (student.dateOfBirth) {
    const parts = student.dateOfBirth.split('/');
    // parts[0] = dd, parts[1] = MM, parts[2] = yyyy
    student.dateOfBirth = `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
    if(this.mode==='register'){
      this.StudentService.createStudent(student).subscribe({
        next:()=>{
          console.log("Successfully Created!!");
          alert("Student successfully created!");
        this.message = { text: 'Student successfully created!', type: 'success' };
        // auto-hide after 3 seconds
        setTimeout(() => this.message = null, 3000);// disappears after 3s
        },
        error:(err)=>{
          console.log("Error ",err);
        }
        
      });
     }
    console.log(formData.value);
    formData.resetForm();
    }
    
    if(this.action==='update'){
    const student={...formData.value};
    if (student.dateOfBirth) {
    const parts = student.dateOfBirth.split('/');
    // parts[0] = dd, parts[1] = MM, parts[2] = yyyy
    student.dateOfBirth = `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
      if(this.mode==='edit'){
        this.StudentService.updateStudent(this.studentId,student).subscribe({
          next:(data)=>{
          console.log("successfully Updated",data);
          alert("Successfully Updated!!");
        this.message = { text: 'Student successfully updated!', type: 'success' };
        // auto-hide after 3 seconds
        setTimeout(() => this.message = null, 3000);
          },
          error:(err)=>{
        console.log("Error ",err);
          }
        });
      }
      formData.resetForm();
}
  } 

  
}
