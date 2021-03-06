import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces/Course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  constructor(private _courseService: CoursesService) { 
    _courseService.getCourses().subscribe((courses:any) => {this.courses=courses;});
  }

  ngOnInit(): void {
  }

}
