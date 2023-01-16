import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   public baseUrl = 'http://localhost:3000/api'
   token = ''
   constructor(private http: HttpClient, private router: Router) {}
   signup(username: string, email: string, password: string) {
      this.http.post(this.baseUrl + '/auth/signup', { username, email, password }).subscribe(res => {
         if (res) this.router.navigate(['/auth/signin'])
         console.log(res)
      })
   }
   signin(email: string, password: string) {
      this.http
         .post<{ access_token: string }>('auth/signin', { email, password })
         .subscribe(res => (this.token = res.access_token))
   }
   getAuthorizationToken() {
      return this.token
   }
}
