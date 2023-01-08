import { Component, OnInit } from '@angular/core';
// import Razorpay  from 'razorpay';
declare var Razorpay :any;
@Component({
  selector: 'product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  addRequirement: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  buy() {
    const options: any = {
      key: 'rzp_test_PTgY4WlVGYP1CV',
      amount: 101, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: '', // company name or product name
      description: '',  // product description
      image: 'assets/images/icons/2 dm.png', // company logo or product image
      // order_id: val, // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: '#0c238a'
      }
    };
    options.handler = ((response : any, error : any) => {
      options.response = response;
      console.log(response);
      console.log(options);
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    const rzp = Razorpay(options);
    rzp.open();
  }

}
