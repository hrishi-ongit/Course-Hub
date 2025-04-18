import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { PopularComponent } from "./home/popular-list/popular/popular.component";
import { CoursesComponent } from "./courses/courses.component";
import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./login/login.component";
import { CheckoutComponent } from "./checkout/checkout.component";
// import { CanActivate, CanActivateChild, resolve } from "./auth.guard";
import { ServicesComponent } from "./home/services/services.component";
import { PopularListComponent } from "./home/popular-list/popular-list.component";
import { AuthGuardService } from "./Services/authguard.service";
import { canActivate, CanActivateChild,  } from "./auth.guard";

//DEFINE ROUTE
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", redirectTo: 'Home', pathMatch: 'full' },//example of redirecting route
  { path: "Home", component: HomeComponent },
  { path: "About", component: AboutComponent }, 
  { path: "Contact", component: ContactComponent},
  { path: "Courses", component: CoursesComponent},

      //1. { path : 'Courses/Course/:id', component: CourseDetailComponent}, 
      //2. //below is another way i.e using child route 
      { path: 'Courses', canActivateChild: [CanActivateChild], children: [
        { path: 'Course/:id', component: CourseDetailComponent},
        { path: 'Popular', component: PopularListComponent},

        //3.route guard for Ang14 and below
        // { path: 'Checkout', component: CheckoutComponent, canActivate: [AuthGuardService]} 

        // 4.route guard for new versions (14+)
        // { path: 'Checkout', component: CheckoutComponent, canActivate: [() => {return true}]}//hardcoded
        // { path: 'Checkout', component: CheckoutComponent, canActivate: [canActivate]}//new way 
        { path: 'Checkout', component: CheckoutComponent}
      ]},
      // If we want to protect all child members of a parent route, we can use canActivateChild, that returns boolean as same above
  
  { path : 'Home/Courses/Course/:id', component: CourseDetailComponent},
  // { path : 'Courses/Course/:id/:name'},
  { path: "Services", component: ServicesComponent},
  // {
  //   path: "contact",
  //   component: ContactComponent,
  //   canDeactivate: [
  //     (comp: ContactComponent) => {
  //       return comp.canExit();
  //     },
  //   ],
  // },
  // {
  //   path: "courses",
  //   component: CoursesComponent,
  //   resolve: { courses: resolve },
  // },
  // {
  //   path: "courses",
  //   canActivateChild: [CanActivateChild],
  //   children: [
  //     { path: "course/:id", component: CourseDetailComponent },
  //     { path: "copular", component: PopularComponent },
  //     { path: "checkout", component: CheckoutComponent },
  //   ],
  // },
  { path: 'Login', component: LoginComponent},
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule],
})
export class RoutingModule {}
