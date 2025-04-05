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
import { AuthGuardService } from "./Services/authguard.service";
import { CanActivate, CanActivateChild, resolve } from "./auth.guard";
import { ServicesComponent } from "./home/services/services.component";

//DEFINE ROUTE
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", redirectTo: 'Home', pathMatch: 'full' },//example of redirecting route
  { path: "Home", component: HomeComponent },
  { path: "About", component: AboutComponent }, 
  { path: "Contact", component: ContactComponent},
  { path: "Courses", component: CoursesComponent},
  { path : 'Courses/Course/:id', component: CourseDetailComponent},
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
  { path: "Login", component: LoginComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
