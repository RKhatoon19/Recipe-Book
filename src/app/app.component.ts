import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-receipe';
  loadedValue= 'recipe';
  onLoaded(feature:string){
this.loadedValue=feature
  }
}
