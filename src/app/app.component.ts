import { Component } from '@angular/core';

import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private meta: Meta) {
    this.meta.addTag({ property: 'title', content: 'http://example.com/movie.swf' }, true);
    this.meta.addTag({ property: 'title', content: 'http://example.com/movie.swf' }, true);
    this.meta.addTag({ property: 'title', content: 'http://example.com/movie.swf' }, true);
  }
}
