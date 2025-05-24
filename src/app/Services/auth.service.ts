import { Injectable, inject } from "@angular/core";
import { UserService } from "./user.service";
import { User } from "../Models/user";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // isLoggedIn: boolean = false;
    public isLoggedInSubject = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this.isLoggedInSubject.asObservable();

    userService: UserService = inject(UserService);


    login(userName: string, password: string): User {
        const user = this.userService.users.find(user => user.username === userName && user.password === password);
        // this.isLoggedIn = user ? true : false;
        this.isLoggedInSubject.next(!!user);
        return user;
    }
    logout(): void {
        this.isLoggedInSubject.next(false);
    }
    authenticated() {
        return this.isLoggedInSubject.value;
    }
}


// export class AuthService{
//     isLogged: Boolean = false;
//     userService: UserService = inject(UserService);

//     login(username: string, password: string){
//         let user = this.userService.users.find((u) => u.username === username 
//                                                     && u.password === password);
//         if(user === undefined)
//             this.isLogged = false;
//         else
//             this.isLogged = true;
//         return user;
//     }

//     logout(){
//         this.isLogged = false;
//     }

//     IsAuthenticated(){
//         return this.isLogged;
//     }
// }