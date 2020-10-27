import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  product = [
    {picture:"",price:"145.00",name:"T-shirt"},
    {picture:"",price:"499.00",name:"Jeans"},
    {picture:"",price:"1120",name:"All Star"},

  ]
}