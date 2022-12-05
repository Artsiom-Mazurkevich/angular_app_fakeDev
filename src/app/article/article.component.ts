import { Component, OnInit } from '@angular/core'
import { BackendService } from '../backend.service'

@Component({
   selector: 'app-article',
   templateUrl: './article.component.html',
   styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
   constructor(public backendService: BackendService) {}

   date = new Date().toUTCString()

   articles: any = []

   ngOnInit(): void {
      this.backendService.getArticles('/post').subscribe(res => {
         this.articles = res
      })
   }
}
