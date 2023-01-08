import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showDialog:boolean = true;
  emailPage:boolean = true; 
  @Output() closeDialogBox : any = new EventEmitter<any>();
  constructor(public authService:AuthService) { }

  ngOnInit(): void {

    // this.authService.showLoginCalled$.subscribe((data)=>{
    //   if(data){
    //     this.showDialog = true;
    //   }
    //   else{
    //     this.showDialog = false;
    //   }
    // })
  }

  submit(){
    console.log("emailpage");
    this.emailPage = false;
  }
  login(){
    console.log("LOgIn successfull")
  }

}
