import { Injectable } from '@angular/core';
import { Course } from '../interfaces/Course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
private readonly server:string='http://localhost:3000/';
  constructor(private http: HttpClient) {
   }
   getCourses() {
     return this.http.get(`${this.server}courses`);
   }
   postCourses(course:Course) {
    return this.http.post(`${this.server}courses`,JSON.stringify(course));
  }
   deleteCourses(id:number) {
    return this.http.delete(`${this.server}courses/${id}`);
  }
  updateCourse(id:number, course:Course){
    return this.http.put(`${this.server}courses/${id}`,JSON.stringify(course));
  }
}
