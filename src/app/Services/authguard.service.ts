import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs'
import { AuthService } from './auth.service';
import { ContactComponent } from '../contact/contact.component';
import { Course } from '../Models/course';
import { CourseService } from './course.service';

export interface IDeactivateComponent{
    canExit: () => boolean | Observable<boolean> | Promise<boolean>;
}


@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanDeactivate<IDeactivateComponent>, Resolve<Course[]> {
    authService: AuthService = inject(AuthService);
    router: Router = inject(Router);
    courseService: CourseService = inject(CourseService);




    // In this authguard.service, below are examples of auth guards that uses interface methods (old way)
    // these are disabled(commented) on the routes (in routing.module) and instead using function route guards (in auth.guard.ts)


    // 1.
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
        // return false;
        const isLoggedIn = this.authService.authenticated();
        if(isLoggedIn) return true;// this will activate the child route
        else{
            this.router.navigate(['/Login']);
            return false;
        }
    }

    // 2.
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(childRoute, state);
    }

    // 3.
    canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) 
    {
        return component.canExit();
    }

    // 4.//with the help of resolve route guard, on whichever route we use this, we load courses data before we navigate
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course[] | Observable<Course[]> | Promise<Course[]> {
        return this.courseService.getAllcourses();
    } //or..
    // using promise
    // async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Course[]> {
    //     let courseList: Course[] = [];
    //     courseList = await firstValueFrom(this.courseService.getAllcourses());
    //     // this.courseService.getAllcourses().subscribe((courses: Course[]) => {
    //     //     courseList = courses;
    //     // })
    //     return courseList;
    // }

}
