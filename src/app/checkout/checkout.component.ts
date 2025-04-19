import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  public course: any;

  ngOnInit(){
    //accessing statuc hardcoded data passed on route 
    // this.activeRoute.data.subscribe((data) => {
    //   console.log(data);
    //   this.course = data;
    // })

    //dynamically..
    this.course = history.state;

    //this.course = this.router.getCurrentNavigation().extras.state;
    // this.course = history.state;
  }
}
