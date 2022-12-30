import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showDialog : boolean = false;
  login : boolean = true;

  listofCategories : any[] = [
    {
      imageURL : "assets/images/categories/eventManagement.png",
      name : "Event Management"
    },
    {
      imageURL : "assets/images/categories/photography.png",
      name : "Photography"
    },
    {
      imageURL : "assets/images/categories/eventFabrication.png",
      name : "Event Fabrication"
    },
    {
      imageURL : "assets/images/categories/coordinations.png",
      name : "Coordinations"
    },
    {
      imageURL : "assets/images/categories/contests.png",
      name : "Contests"
    },
    {
      imageURL : "assets/images/categories/branding.png",
      name : "Branding"
    },
    {
      imageURL : "assets/images/categories/businessConsultation.png",
      name : "Business Consultation"
    },
    {
      imageURL : "assets/images/categories/advertisement.png",
      name : "Advertisement"
    }
  ]
  
  constructor() {
    setTimeout(()=>{
      this.showDialog = true;
    },10000)
   }

  ngOnInit(): void {
  }

}
