import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   public baseUrl = 'http://localhost:3000/api'
   token = ''
   constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {}
   signup(username: string, email: string, password: string) {
      this.http.post(this.baseUrl + '/auth/signup', { username, email, password }).subscribe(res => {
         if (res) this.router.navigate(['/auth/signin'])
         console.log(res)
      })
   }
   signin(email: string, password: string) {
      this.http.post<{ access_token: string }>(this.baseUrl + '/auth/signin', { email, password }).subscribe(res => {
         this.cookieService.set('auth', res.access_token, { path: '/' })
         this.token = res.access_token
         this.router.navigate([''])
      })
   }
   getAuthorizationToken() {
      return `Bearer ${this.token}`
   }
}
