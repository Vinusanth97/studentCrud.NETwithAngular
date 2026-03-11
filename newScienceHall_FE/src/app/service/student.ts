import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../models/Student';


@Injectable({
  providedIn: 'root',
})
export class Student {
  private apiUrl='https://localhost:7038/api/StudentDetails';
  constructor(private http:HttpClient) {}

  getStudents():Observable<StudentModel[]>{
    return this.http.get<StudentModel[]>(this.apiUrl);
  }

  getStudent(id:string):Observable<StudentModel>{
    return this.http.get<StudentModel>(`${this.apiUrl}/${id}`);
  }

  createStudent(student:StudentModel):Observable<StudentModel>{
    return this.http.post<StudentModel>(this.apiUrl,student)
  }

  updateStudent(id:string,student:StudentModel):Observable<StudentModel>{
    return this.http.put<StudentModel>(this.apiUrl+'/'+id,student)
  }
  deleteStudent(id:string):Observable<any>{
    return this.http.delete<any>(this.apiUrl+'/'+id);
  }
}
