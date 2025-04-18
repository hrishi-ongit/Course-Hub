import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicesService } from './Services/services.service';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './home/banner/banner.component';
import { ServicesComponent } from './home/services/services.component';
import { TestimonyComponent } from './home/testimony/testimony.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { PopularComponent } from './home/popular-list/popular/popular.component';
import { CourseService } from './Services/course.service';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoutingModule } from './routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { PopularListComponent } from './home/popular-list/popular-list.component';
import { Constants } from './constants/data.constants';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    BannerComponent,
    ServicesComponent,
    TestimonyComponent,
    ContactUsComponent,
    PopularComponent,
    PopularListComponent,
    CoursesComponent,
    CourseDetailComponent,
    LoginComponent,
    NotFoundComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [ServicesService, CourseService, Constants],
  bootstrap: [AppComponent]
})
export class AppModule { }
