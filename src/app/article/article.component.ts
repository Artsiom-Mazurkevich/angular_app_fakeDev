import { Component, OnInit } from '@angular/core'
import { Article, BackendService } from '../backend.service'

@Component({
   selector: 'app-article',
   templateUrl: './article.component.html',
   styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
   constructor(public backendService: BackendService) {}

   articles$: Article[] = []

   ngOnInit(): void {
      this.backendService.getArticles('/article').subscribe((res: any) => {
         this.articles$ = res
         console.log(res)
      })
   }
}
