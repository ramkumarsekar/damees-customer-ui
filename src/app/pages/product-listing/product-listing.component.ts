import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  constructor() { }

  listofCategories : any[] = [
    {
      imageURL : "/assets/images/categories/eventManagement.png",
      name : "Event Management"
    },{
      imageURL : "/assets/images/categories/photography.png",
      name : "Photography"
    },{
      imageURL : "/assets/images/categories/coordinations.png",
      name : "Coordinations"
    },{
      imageURL : "/assets/images/categories/contests.png",
      name : "Contests"
    },{
      imageURL : "/assets/images/categories/businessConsultation.png",
      name : "Business Consultation"
    },{
      imageURL : "/assets/images/categories/advertisement.png",
      name : "Advertisement"
    },{
      imageURL : "/assets/images/categories/branding.png",
      name : "Branding"
    },{
      imageURL : "/assets/images/categories/eventFabrication.png",
      name : "Event Fabrication"
    }
  ]

  ngOnInit(): void {
  }

}
