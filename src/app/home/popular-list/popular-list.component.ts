import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CourseType } from 'src/app/interface/shared.interface';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-popular-list',
  templateUrl: './popular-list.component.html',
  styleUrls: ['./popular-list.component.css']
})
export class PopularListComponent implements OnInit, OnChanges {
popularCoursesList:Course[] = []
@Input() courseSearch: string = '';
courseService: CourseService = inject(CourseService);

ngOnInit(): void {
  if(this.courseSearch !== ''){
    this.popularCoursesList = this.courseService.courses.filter(course => course.title.toLowerCase().includes(this.courseSearch.toLowerCase()));
  }
  else {
    this.popularCoursesList = this.courseService.courses;
  }
}

ngOnChanges(): void {
  this.popularCoursesList = this.courseService.courses.filter(course => course.title.toLowerCase().includes(this.courseSearch.toLowerCase()));
}

}
