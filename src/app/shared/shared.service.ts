import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private courseService = inject(CourseService);
  constructor() { }
  public displayedCoursesLength: number = 0;
  public allCourses: Course[] = [];

  public getAllCourses(): Observable<Course[]> {
    return this.courseService.getAllcourses();
  }

  public searchCourses(searchString: string): Observable<Course[]>{
    return this.courseService.getAllcourses().pipe(
      // map((courses: Course[]) => {
      //   return courses.filter(course => course.title.toLowerCase().includes(queryString));
      // }) or..
      // map((courses: Course[]) => (courses.filter(course => course.title.toLowerCase().includes(searchString.toLowerCase()))))
      //  or..
      map((courses: Course[]) => courses.filter(course => course.title.toLowerCase().includes(searchString.toLowerCase())))
    );
  }
}
