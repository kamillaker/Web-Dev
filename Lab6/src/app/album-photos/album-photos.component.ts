import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlbumsService} from '../albums.service';
import {Photo} from '../model';

@Component({
  selector: 'app-album-photos',
  imports: [],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  photos: Photo[] = [];

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService, private router: Router) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getPhotos(id).subscribe((data) => {
      this.photos = data;
    })
  }

  goBack(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate(['/albums', id]);
  }
}
