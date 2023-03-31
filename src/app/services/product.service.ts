import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import {map} from 'rxjs';
import { ProductCategory } from '../common/product-category';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  private categoryUrl="http://localhost:8080/api/product-category";

  constructor( private httpClient:HttpClient ) { }

  getProducts(id:number):Observable<Product[]>{

   // const searchUrl =`${this.baseUrl}/search/findByCategoryId?id=+theCategoryId`;

    return this.httpClient.get<GetResponse>(this.baseUrl+'/search/findByCategoryId?id='+id).pipe(
      map(response=>response._embedded.products)
    );
  }


 getProductCategory():Observable<ProductCategory[]>{

  return this.httpClient.get<GetResponseCategory>(this.categoryUrl).pipe(
    map(response=>response._embedded.productCategory));

 }
}


interface GetResponse{
  _embedded:{
    products:Product[];
  }
}


interface GetResponseCategory{
  _embedded:{
    productCategory:ProductCategory[];
  }
}