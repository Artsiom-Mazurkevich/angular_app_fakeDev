import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

export interface Article {
   author: string
   createdAt: Date
   tags: string[]
   text: string
   title: string
   updatedAt: Date
   viewsCount: Date
   __v: number
   _id: string
}

@Injectable({
   providedIn: 'root',
})
export class BackendService {
   constructor(private http: HttpClient) {}

   private baseUrl = 'http://localhost:8000'

   public getArticles<T>(url: string): Observable<Article[]> {
      return this.http.get<Article[]>(this.baseUrl + url)
   }

   public getListImages<T>(url: string): Observable<T> {
      return this.http.get<T>(this.baseUrl + url)
   }
}
