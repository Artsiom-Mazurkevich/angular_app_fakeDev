import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { TopHeaderComponent } from './top-header/top-header.component'
import { MainComponent } from './main-component/main.component'
import { ArticleComponent } from './article/article.component'
import { SignInUpComponent } from './sign-in-up/sign-in-up.component'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

const appRoutes: Routes = [
   { path: '', component: MainComponent },
   { path: 'auth/signup', component: SignInUpComponent },
   { path: 'auth/signin', component: SignInUpComponent },
]

@NgModule({
   declarations: [AppComponent, TopHeaderComponent, MainComponent, ArticleComponent, SignInUpComponent],
   imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
