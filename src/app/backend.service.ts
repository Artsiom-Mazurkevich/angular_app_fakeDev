import { Injectable } from '@angular/core'
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
   providedIn: 'root',
})
export class BackendService {
   constructor(private http: HttpClient) {}
   private baseUrl = 'http://localhost:8000'

   public getArticles<T>(url: string): Observable<T> {
      return this.http.get<T>(this.baseUrl + url)
   }
}
