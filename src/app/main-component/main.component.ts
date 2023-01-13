import { Component, OnInit } from '@angular/core'

@Component({
   selector: 'app-main-component',
   templateUrl: './main.component.html',
   styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
   constructor() {}
   leftSidebar = ['🏠 Home', '📃 Listings', '🎙 Podcasts', '📺 Videos', '📔 Tags', '💖 Sponsors']

   ngOnInit(): void {}
}
