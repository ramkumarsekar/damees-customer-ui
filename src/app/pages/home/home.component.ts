import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showDialog : boolean = false;
  login : boolean = true;
  
  constructor() {
    setTimeout(()=>{
      this.showDialog = true;
    },5000)
   }

  ngOnInit(): void {
  }

}
