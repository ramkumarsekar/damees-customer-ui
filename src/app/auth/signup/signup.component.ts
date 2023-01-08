import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  showDialog: boolean = true;
  @Output() closeDialogBox = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
