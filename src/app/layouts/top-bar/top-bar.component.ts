import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  showRightDialog : boolean = false;
  login : boolean = true;
  date : any = moment().format('ll');
  time : any = moment().format('HH:mm');
  seconds : any = moment().format('ss');

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.time = moment().format('HH:mm');
      this.seconds = moment().format('ss');
    },1000)
  }

}
