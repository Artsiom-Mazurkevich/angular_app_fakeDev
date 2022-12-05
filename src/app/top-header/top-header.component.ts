import { Component, OnInit } from '@angular/core'

@Component({
   selector: 'app-top-header',
   templateUrl: './top-header.component.html',
   styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent implements OnInit {
   constructor() {}
   currentColorTheme = ''
   toggleMode = () => {
      if (localStorage['theme'] === 'light') {
         localStorage['theme'] = 'dark'
         this.currentColorTheme = 'dark'
      } else {
         localStorage['theme'] = 'light'
         this.currentColorTheme = 'light'
      }
      if (
         localStorage['theme'] === 'dark' ||
         (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
         document.documentElement.classList.add('dark')
      } else {
         document.documentElement.classList.remove('dark')
      }
   }

   ngOnInit(): void {
      if (localStorage['theme'] === undefined) {
         localStorage['theme'] = 'light'
         this.currentColorTheme = 'light'
      }
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
         document.documentElement.classList.add(savedTheme)
         this.currentColorTheme = savedTheme
      }
   }
}
