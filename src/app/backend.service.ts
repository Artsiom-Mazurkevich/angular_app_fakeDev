import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

export interface Article {
   _id: string
   title: string
   text: string
   authorId: string
   authorName: string
   viewsCount: number
   imageUrl: string
   createdAt: Date
   updatedAt: Date
}

@Injectable({
   providedIn: 'root',
})
export class BackendService {
   constructor(private http: HttpClient) {}

   private baseUrl = 'http://localhost:3000/api'

   // public getArticles<T>(url: string): Observable<Article[]> {
   //    return this.http.get<Article[]>(this.baseUrl + url)
   // }

   public getArticles<T>(url: string): Observable<T> {
      return this.http.get<T>(this.baseUrl + url)
   }

   public getListImages<T>(url: string): Observable<T> {
      return this.http.get<T>(this.baseUrl + url)
   }
}
