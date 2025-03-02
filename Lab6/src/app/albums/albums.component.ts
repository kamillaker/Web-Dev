import { Component } from '@angular/core';
import {AlbumsService} from '../albums.service';
import {Album} from '../model';
import {RouterLink} from '@angular/router';
import { ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-albums',
  imports: [RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {

  albums: Album[] = [];

  constructor(private albumsService: AlbumsService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.albumsService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

  deleteAlbum(id: number) {
    console.log(`Attempting to delete album with ID: ${id}`); // ✅ Debugging Step 1
    this.albumsService.deleteAlbum(id).subscribe((data) => {
      this.albums = data;
      console.log("Updated albums list: ", this.albums); // ✅ Debugging Step 3
    });
    this.cdRef.detectChanges();
    // this.albumsService.deleteAlbum(id).subscribe(() => {
    //   this.albums = this.albums.filter(album => album.id !== id);
    // });
  }
}
