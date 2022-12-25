import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-under-working',
  templateUrl: './under-working.component.html',
  styleUrls: ['./under-working.component.scss']
})
export class UnderWorkingComponent implements OnInit {

  @Output() closeDialogBox = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
