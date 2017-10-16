import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class ImagesApiService {

  constructor(private _http: Http) { }

  searchRandomImageGoogle(startIndex:number = 1):Observable<any> {
    return this._http.get(`${environment.googleSearch.url}/?key=${environment.googleSearch.apiKey}
    &num=2&start=${startIndex}&searchType=image&cx=${environment.googleSearch.cx}&q=a`)
      .map((res: Response) => res.json());
  }

  searchRandomImageQwant(startIndex:number = 1):Observable<any> {
    return this._http.get(`${environment.qwantUrl}?count=2&offset=1&q=video`)
      .map((res: Response) => res.json());
  }

}
