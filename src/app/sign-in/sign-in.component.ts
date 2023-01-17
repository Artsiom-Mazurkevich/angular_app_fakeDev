import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'

@Component({
   selector: 'app-sign-in',
   templateUrl: './sign-in.component.html',
   styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
   constructor(private authService: AuthService) {}

   email = ''
   password = ''

   signinSubmit() {
      this.authService.signin(this.email, this.password)
      console.log({ email: this.email, password: this.password })
   }

   ngOnInit(): void {}
}
