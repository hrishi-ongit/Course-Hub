import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Services/course.service';
import { ActivatedRoute } from '@angular/router';
import { CourseType } from 'src/app/interface/shared.interface';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  constructor(){}
  
  selectedCourse: CourseType;
  courseId: number;
  totalCourses: number;
  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  
  
  ngOnInit(): void {
    //info about currently active route
    // this.courseId = this.activeRoute.snapshot.params['id']; //this is old way to accessing router param value
    
    //new -
    // this.courseId = +this.activeRoute.snapshot.paramMap.get('id') //'+' for converting string to number for courseId
    // this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId) || undefined;  
    
    //snapshot property only returns initial value of route parameter, not the updated one

    
    // Using params or paramMap observable to get updated route params
    // this.activeRoute.params.subscribe((data)=>{
    //   this.courseId = +data['id'] //converting string to number
    //   this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId) || undefined;  
    // })

    //using paramMap observable
    this.totalCourses = this.courseService.courses.length;
    this.activeRoute.paramMap.subscribe((data)=>{
      this.courseId = +data.get('id') //converting string to number
      this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId) || undefined;  
    })
    
  }

  getPreviousRoute(): string{
    return '/Courses/Course/'+ (this.selectedCourse.id - 1);
  }
  getNextRoute(): string {
    return '/Courses/Course/' + (this.selectedCourse.id + 1);
  }
















  // selectedCourse: Course;
  // courseId: number;

  // courseService: CourseService = inject(CourseService);
  // activeRoute: ActivatedRoute = inject(ActivatedRoute);
  // paramMapObs;

  // ngOnInit(){
  //   // this.courseId = this.activeRoute.snapshot.params['id'];
  //   //this.courseId = +this.activeRoute.snapshot.paramMap.get('id');
  //   // this.activeRoute.params.subscribe((data) => {
  //   //   this.courseId = +data['id'];
  //   //   this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId);
  //   // })

  //   this.paramMapObs = this.activeRoute.paramMap.subscribe((data) => {
  //     this.courseId = +data.get('id');
  //     this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId);
  //   })
    
  // }

  // ngOnDestroy(){
  //   this.paramMapObs.unsubscribe();
  // }
}
