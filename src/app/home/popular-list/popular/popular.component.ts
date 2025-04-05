import { Component, inject, Input } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseType } from 'src/app/interface/shared.interface';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute){}

  @Input() popular: CourseType;
  // public router: Router = inject(Router);
  // public activeRoute: ActivatedRoute = inject(ActivatedRoute);
  // courseService = inject(CourseService)
  // popularCourses: Course[] = [];





  ngOnInit(){
    // this.popular = 
    // this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
    // this.popularCourses = this.courseService.courses;
  }

  public navigateToCourse(): void { //navigate or navigateByUrl are by defaut absolute path 
    //needs instance of router class
    // this.router.navigate(['Courses']); or
    // this._router.navigate(['Courses']); or
    // this._router.navigateByUrl('Courses')//takes string value of all path segments

    //in order to use relative path -
    // this._router.navigate(['Courses'], {relativeTo: this._activatedRoute});
  }

  // navigateToCourses(){
  //   //this.router.navigate(['Courses'], {relativeTo: this.activeRoute});
  //   this.router.navigateByUrl('Courses');
  // }
}
