import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent implements OnInit {

  @Output() closeDialogBox = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
