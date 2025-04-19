import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from '../constants/data.constants';
import { from, map, Observable } from 'rxjs';
import { SharedService } from '../shared/shared.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesService = inject(CourseService);
  constants: Constants = inject(Constants);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  sharedService = inject(SharedService);

  public description:string = this.constants.courseDesc;
  AllCourses: Course[];//for internal filtering after one time fetching
  displayCourses: Course[];// for dynamically updating and rendering on each fetch
  searchString: string;
  searchQueryString: string;


  ngOnInit(){
    //using activatedRoute snapshot ..(only latest/most recent values in received) - 
    // this.searchQueryString = this.activeRoute.snapshot.queryParams['search'];
    // this.searchQueryString = this.activeRoute.snapshot.queryParamMap.get('search');

    //Using queryParams/queryParamMap - 
    //internal component route with query param 
    //old/depricated
    // this.activeRoute.queryParams.subscribe((value) => {
    //   this.searchQueryString = value['search'];
    //   this.populateCoursesFromSearch(this.searchQueryString);
    // })
    

    //new :- 
    // this.activeRoute.queryParamMap.subscribe((value) => {
    //   this.searchQueryString = value.get('search');
    // })

    //with snapshot/queryParams/queryParamMap, get the search param in routr 
    // (if used query in url..defined or just navigation ..undefined, based on such below code)
    //When no query (direct navigation/course page load, load all courses displayCourses) :-

    // if(this.searchQueryString === undefined || this.searchQueryString === '' || this.searchQueryString === null){
    //    this.sharedService.getAllCourses().subscribe((res) => {
    //     this.AllCourses = res;
    //     this.displayCourses = JSON.parse(JSON.stringify(this.AllCourses));
    //   })
    // }

    //for query search in route url.. :-

    // else {
    // filtered search for url query params search without resolver fun route guard 
    //   this.populateCoursesFromSearch(this.searchQueryString);
    // }




  // ******* resolve route guard - 
  // Above first in ngOnInit if/else, after route we had normal courses retrival using subscribe to activated route for getting the route params
  // and subscribing the web service of courses.
  // Here we are using resolve route guard that already loads the data before routing

    this.AllCourses = this.activeRoute.snapshot.data['courses'];
    this.displayCourses = JSON.parse(JSON.stringify(this.AllCourses));  

  }

  //filter search result from source based on route query params value 
  // populateCoursesFromSearch(searchQuery: string) {
  //   this.sharedService.searchCourses(searchQuery).subscribe((filteredCourses) => {
  //     this.displayCourses = filteredCourses;  
  //   });
  // }


  //When redirected from home component search bander, we receive search query here -
  // ngOnChanges(): void {
  //   // const searchedCourse = this.activeRoute.snapshot.queryParams['search'];
  //   const searchedCourse = this.activeRoute.snapshot.queryParamMap.get('search');
  //   console.log('Route query from ',searchedCourse);
  // }

  //For internal filtering the courses statically on received data
  OnSearchClicked(searchString: string) {
    if(!searchString || searchString == ''){
      this.displayCourses = JSON.parse(JSON.stringify(this.AllCourses))
    } 
    else {
      let allCourses = JSON.parse(JSON.stringify(this.AllCourses));
      this.displayCourses = allCourses.filter(course => course.title.toLowerCase().includes(searchString.toLowerCase()));
    }
  }



  // Using internal route with query params, using this. 
  // <a [routerLink]="'/Courses'" [queryParams]="{'search' : 'javascript'}">Show Popular Courses</a>
  //by the route with query params logic within ngOninit using snapShot.queryParams, it only gives initial value when in the same component.
  //it is usefule when we are comming from parent/home component that initiates ngOnInit.
  
  //But for internal routeLink change, we use queryParms without snapshot and we can subscribe it


  //todo
  // goToPopular(): void {
  //   this.router.navigate()
  // }


}
