import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showDialog:boolean = true;
  emailPage:boolean = true; 
  constructor(public authService:AuthService) { }

  ngOnInit(): void {
    debugger
    this.authService.showLoginModule$.subscribe((data)=>{
      debugger
      if(data){
        this.showDialog = true;
      }
      else{
        this.showDialog = false;
      }
    })
  }

  submit(){
    console.log("emailpage");
    this.emailPage = false;
  }
  login(){
    console.log("LOgIn successfull")
  }

}
