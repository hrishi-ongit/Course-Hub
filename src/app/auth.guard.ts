import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { CourseService } from "./Services/course.service";
import { AuthService } from "./Services/auth.service";


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

// export const CanActivateChild = () => {
//     return CanActivate();
// }

// export const resolve = () =>{
//     const courseService = inject(CourseService);
//     return courseService.getAllcourses();
// }