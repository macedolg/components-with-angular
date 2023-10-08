import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://the-cocktail-db.p.rapidapi.com/search.php';

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchData(search: string): Observable<any>{


    const options = {
      method: 'GET',
      params: new HttpParams().set('s', search),
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'c4ace7e995msha0ad5153c99073fp141484jsn4e8a26f9def2',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
      })
    };

    return this.httpClient.get(this.apiUrl, options);
  }
}
