import { Component, OnInit } from '@angular/core'
import { Article, BackendService } from '../backend.service'

@Component({
   selector: 'app-article',
   templateUrl: './article.component.html',
   styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
   constructor(public backendService: BackendService) {}

   date = new Date().toUTCString()

   articles$: Article[] = []
   photos: any = []

   ngOnInit(): void {
      this.backendService.getArticles('/post').subscribe(res => {
         this.articles$ = res
         console.log(res)
      })
      this.backendService.getListImages('/files').subscribe(res => {
         this.photos = res
         console.log(res)
      })
   }
}
