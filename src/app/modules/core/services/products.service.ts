import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Product } from '../../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsUrl = `${environment.productsUrl}/products`;  // URL to web api

  constructor(private httpClient: HttpClient) { }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.productsUrl, product);
  }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productsUrl);
  }

  getProductById(productId: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.productsUrl}/${productId}`);
  }

}
