import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { IHttpRequest } from 'src/app/core/models/api.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'http://localhost:3000/api/v1'

  constructor(private httpClient: HttpClient) { }

  // GET REQUEST
  public get(httpData: IHttpRequest): Observable<any>{
    const httpOptions = this.generateHttpOption(
      httpData.params,
      httpData.headers
    )
    return this.httpClient.get(`${this.apiUrl}/${httpData.url}`, httpOptions)
  }

  // POST REQUEST
  public post(httpData: IHttpRequest): Observable<any>{
    const httpOptions = this.generateHttpOption(
      httpData.params,
      httpData.headers
    )
    return this.httpClient.post(`${this.apiUrl}/${httpData.url}`, httpData.body, httpOptions)
  }

  // DYNAMIC HTTP OPTIONS
  private generateHttpOption(params: any, headers: any) {
    const httpOptions: any = {};
    if (params) {
      let httpParams = new HttpParams();
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const paramValue = params[key];
          httpParams = httpParams.append(key, paramValue);
        }
      }
      httpOptions.params = httpParams;
    }
    if (headers) {
      let httpHeaders = new HttpHeaders();
      for (const key in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, key)) {
          const headerValue = headers[key];
          httpHeaders = httpHeaders.append(key, headerValue);
        }
      }
      httpOptions.headers = httpHeaders;
    }
    return httpOptions;
  }
}
