import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { TopHeaderComponent } from './components/top-header/top-header.component'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'

const appRoutes: Routes = []

@NgModule({
   declarations: [AppComponent, TopHeaderComponent],
   imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule],
   providers: [CookieService],
   bootstrap: [AppComponent],
})
export class AppModule {}
