import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { image } from './image.const';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  imageSource;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit () {
    this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${image}`);
  }

}
