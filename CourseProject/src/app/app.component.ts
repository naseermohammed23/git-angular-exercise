import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navFeatureSelected = 'recipe';

  onNavigate(feature: string) {
    this.navFeatureSelected = feature;
  }

}
