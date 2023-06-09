import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService, private route:ActivatedRoute) { }

  public products: Product[]=[];

  currentCategoryId!:number;

  ngOnInit(): void {

    this.route.paramMap.subscribe(()=>{
      this.listProduct();
    })

   
  }


  listProduct(){

    const hasCategoryId:boolean= this.route.snapshot.paramMap.has('id');

    if(hasCategoryId){
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }else this.currentCategoryId = 1;

    this.productService.getProducts(this.currentCategoryId).subscribe(
      data=>{
        this.products=data;
      }

    )
  }

}
