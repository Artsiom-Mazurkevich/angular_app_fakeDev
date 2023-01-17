import { Component, OnInit } from '@angular/core'
import { Article, BackendService } from '../backend.service'
import { AuthInterceptor } from '../http-interceptors/auth-interceptor'
import { AuthService } from '../auth/auth.service'
import { HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http'

@Component({
   selector: 'app-article',
   templateUrl: './article.component.html',
   styleUrls: ['./article.component.scss'],
   providers: [],
})
export class ArticleComponent implements OnInit {
   constructor(private backendService: BackendService, private authService: AuthService) {}

   articles$: Article[] = []

   ngOnInit(): void {
      console.log(this.authService.getAuthorizationToken())
      this.backendService.getArticles('/article').subscribe((res: any) => {
         this.articles$ = res
         console.log(res)
      })
   }
}
