import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductService } from '../services/product-service.service';

interface Drink {
  idDrink: string,
  strDrinkThumb: string,
  strDrink: string
}

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {

  productList$: Observable<Drink[]> = new Observable<Drink[]>();

  teste = "MEU TEXTO DE TESTE";

  constructor(
    private productService: ProductService
  ) {

  }

  ngOnInit(): void {
    this.productList$ = this.productService.fetchData('lemon').pipe(
      map((response) => {
        console.log(response);
        return response.drinks;
      })
    );
  }

  handleEvent($event: string) {
    console.log("evento aconteceu");
    console.log("evento acontece", $event)
  }

//  onClick(){
//    this.productList$ = this.productService.getDateFiltered("filtro").pipe(
//      map(response => {
//        return response;
//      })
//    );
//  }
}
