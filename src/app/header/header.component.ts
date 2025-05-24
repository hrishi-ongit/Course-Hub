import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  authService: AuthService = inject(AuthService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // this.activeRoute.queryParams.subscribe(params => {
    //   if (params['logout'] === 'true') {
    //     this.isLoggedOut = true;

    //     // localStorage.removeItem('token'); // or auth token
    //   }
    //   else this.isLoggedOut = true;
    // });
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    })
  }  
}
