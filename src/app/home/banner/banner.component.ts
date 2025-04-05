import { query } from '@angular/animations';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  router: Router = inject(Router);
  @Output() courseSearch: EventEmitter<string> = new EventEmitter<string>();

  OnSearchClicked(value: string){
    // this.courseSearch.emit(value); >> emits search value to home component and updates
    //data there, from which popular list can take input and filter data in it
    //this was for demonstrating relation between siblings using custome event binding & custome attribute binding
    //using @Output() EventEmitter and @Input() 
    
    //removin above search filter as I want to create queryParms route navigation from home serach to 
    //course page 

    //Route with query params :-
    this.router.navigate(['/Courses'], {queryParams: {search: value}});

  }
}
