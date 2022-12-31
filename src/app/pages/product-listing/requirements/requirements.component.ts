import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent implements OnInit {
  defaultView : boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.defaultView = true;
    }, 100);
  }

}
