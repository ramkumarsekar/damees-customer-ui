import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  addRequirement : boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
