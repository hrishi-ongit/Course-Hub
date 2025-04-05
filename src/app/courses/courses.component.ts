import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';
import { Constants } from '../constants/data.constants';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesService = inject(CourseService);
  constants: Constants = inject(Constants);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  public description:string = this.constants.courseDesc;
  // public description:string = '';
  // AllCourses: Course[];
  AllCourses: Course[] = this.coursesService.courses;
  displayCourses: Course[];
  searchString: string;
  searchQueryString: string;


  ngOnInit(){
    this.searchQueryString = this.activeRoute.snapshot.queryParams['search'];
    // this.searchQueryString = this.activeRoute.snapshot.queryParamMap.get('search');
    // console.log('Route query from snapshot ngOnInit : ',this.searchQueryString);
    if(this.searchQueryString === undefined || this.searchQueryString === '' || this.searchQueryString === null){
      this.displayCourses = JSON.parse(JSON.stringify(this.coursesService.courses));
    }
    else {
      this.populateCoursesFromSearch(this.searchQueryString);
    }

    //internal component route with query param 
    //old/depricated
    // this.activeRoute.queryParams.subscribe((value) => {
    //   this.searchQueryString = value['search'];
    //   this.populateCoursesFromSearch(this.searchQueryString);
    // })
    //new :- 
    // this.activeRoute.queryParamMap.subscribe((value) => {
    //   this.searchQueryString = value.get('search');
    //   this.populateCoursesFromSearch(this.searchQueryString);
    // })
    
    // this.displayCourses = JSON.parse(JSON.stringify(this.AllCourses));
    // this.searchString = this.activeRoute.snapshot.queryParams['search'];
    // this.searchString = this.activeRoute.snapshot.queryParamMap.get('search');
    // console.log(this.searchString);

    // this.activeRoute.queryParamMap.subscribe((data) => {
    //   this.searchString = data.get('search');

    //   if(this.searchString === undefined || this.searchString === '' || this.searchString === null){
    //     this.coursesService.getAllcourses().subscribe((data: Course[]) => {
    //       this.AllCourses = data;
    //     });

    //     this.AllCourses = this.activeRoute.snapshot.data['courses'];
    //   }else{
    //     this.AllCourses = this.coursesService.courses
    //       .filter(x => x.title.toLowerCase()
    //       .includes(this.searchString.toLowerCase()));
    //   }
    // })

    
  }

  populateCoursesFromSearch(searchQuery: string) {
    const allCourses = JSON.parse(JSON.stringify(this.coursesService.courses));
    this.displayCourses = allCourses.filter(courses => courses.title.toLowerCase().includes(searchQuery.toLowerCase())) || [];
  }

  //When redirected from home component search bander, we receive search query here -
  // ngOnChanges(): void {
  //   // const searchedCourse = this.activeRoute.snapshot.queryParams['search'];
  //   const searchedCourse = this.activeRoute.snapshot.queryParamMap.get('search');
  //   console.log('Route query from ',searchedCourse);
  // }

  //For internal filtering the courses
  OnSearchClicked(searchString: string) {
    if(!searchString || searchString == '') this.displayCourses = JSON.parse(JSON.stringify(this.AllCourses));
    let allCourses = JSON.parse(JSON.stringify(this.AllCourses));
    this.displayCourses = allCourses.filter(course => course.title.toLowerCase().includes(searchString.toLowerCase()));
  }


  // Using internal route with query params, using this. 
  // <a [routerLink]="'/Courses'" [queryParams]="{'search' : 'javascript'}">Show Popular Courses</a>
  //by the route with query params logic within ngOninit using snapShot.queryParams, it only gives initial value when in the same component.
  //it is usefule when we are comming from parent/home component that initiates ngOnInit.
  
  //But for internal routeLink change, we use queryParms without snapshot and we can subscribe it



}
