import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, Router } from "@angular/router";
import { CourseService } from "./Services/course.service";
import { AuthService } from "./Services/auth.service";
import { Course } from "./Models/course";
import { map, Observable } from "rxjs";


export const canActivate = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const isLoggedIn = authService.authenticated();
    if(isLoggedIn) return true;
    else{
        router.navigate(['/Login'])
        return false;
    }
}

export const canActivateChild = () => {
    return canActivate(); // reusing above function for canActivateChild function
}

// export const resolve = () => {
//     const courseService = inject (CourseService); 
//     return courseService.getAllcourses();
// }

// for query param search
export const resolve: ResolveFn<Course[]> = (route: ActivatedRouteSnapshot): Observable<Course[]> => {
    const courseService = inject (CourseService); 
    const searchQuery = route.queryParamMap.get('search')?.toLowerCase() || '';
    // if(!searchQuery) return courseService.getAllcourses();
    // else {
    //     return courseService.getAllcourses().pipe(
    //         map((courses: Course[]) => courses.filter(course => course.title.toLowerCase().includes(searchQuery)))
    //     )
    // }

    //or simpley
    return courseService.getAllcourses().pipe(
        map((courses: Course[]) => (
            searchQuery ? courses.filter(course => course.title.toLowerCase().includes(searchQuery)) : courses
        ))
    );
}
