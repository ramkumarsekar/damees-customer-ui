import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  showDialog : boolean = false;
  @Input()
  category!: any;
  @Input()
  style!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
