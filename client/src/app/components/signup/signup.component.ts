import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  hasAccount: boolean = true
  name:string = ''
  lastName:string = ''
  email: string = ''
  password: string = ''
  username: string = ''
  auth: any = {
    name:'',
    lastName:'',
    username: '',
    email: '',
    password: '',
    // products: [],
  } //object used for all authentication
  user: any;
  constructor(
    private authService : AuthService,
    private router: Router,

  ) { }

  handleSignup(){
    this.auth.name = this.name;
    this.auth.lastName = this.lastName;
    this.auth.username = this.username;
    this.auth.email = this.email;
    this.auth.password = this.password;
    this.authService.signup(this.auth)
    .subscribe( user => this.user = user)
    this.name = '';
    this.lastName = '';
    this.username = '';
    this.email = '';
    this.password = '';
    this.hasAccount = true;
  }

  // handleLogin(){
  //   //cut the withCredentials from this function to avoid error
  //   this.authService.login(this.auth)
  //   .subscribe(user=>{
  //     this.user = user;
  //     localStorage.setItem('user', JSON.stringify(user));
  //     this.router.navigate(['home', this.user._id]);
  //   })
  // }

  ngOnInit() {
  }



}
