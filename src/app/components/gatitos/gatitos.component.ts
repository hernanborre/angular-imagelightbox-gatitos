import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gatitos',
  templateUrl: './gatitos.component.html',
  styleUrls: ['./gatitos.component.css'],
})
export class GatitosComponent {
  _albums:any = [];

  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 3; i++) {
      const src = 'assets/img/' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'assets/img/image' + i + '-thumb.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb,
      };

      this._albums.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
