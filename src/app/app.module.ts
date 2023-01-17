import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { TopHeaderComponent } from './top-header/top-header.component'
import { MainComponent } from './main-component/main.component'
import { ArticleComponent } from './article/article.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { FormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { SignInComponent } from './sign-in/sign-in.component'
import { CookieService } from 'ngx-cookie-service'
import { AuthInterceptor } from './http-interceptors/auth-interceptor'

const appRoutes: Routes = [
   { path: '', component: MainComponent },
   { path: 'auth/signup', component: SignUpComponent },
   { path: 'auth/signin', component: SignInComponent },
]

@NgModule({
   declarations: [AppComponent, TopHeaderComponent, MainComponent, ArticleComponent, SignUpComponent, SignInComponent],
   imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule],
   providers: [CookieService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
   bootstrap: [AppComponent],
})
export class AppModule {}
