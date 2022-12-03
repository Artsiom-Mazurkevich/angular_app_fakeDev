import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TopHeaderComponent } from './top-header/top-header.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { ArticleComponent } from './article/article.component'

@NgModule({
   declarations: [AppComponent, TopHeaderComponent, MainComponentComponent, ArticleComponent],
   imports: [BrowserModule, AppRoutingModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
