import { Component, OnInit } from '@angular/core';

import { Product } from '../entities/product.entity';
import { ProductService } from '../service/product.service';

@Component({
	templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {

	 products: Product[];

	constructor(
		private productService: ProductService
	) { }

	ngOnInit() {
		this.products = this.productService.findAll();
	}


}