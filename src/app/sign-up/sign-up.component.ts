import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'

@Component({
   selector: 'app-sign-up',
   templateUrl: './sign-up.component.html',
   styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
   constructor(private authService: AuthService) {}

   username = ''
   email = ''
   password = ''

   signupSubmit() {
      console.log(this.username, this.email, this.password)
      this.authService.signup(this.username, this.email, this.password)
   }

   ngOnInit(): void {}
}
