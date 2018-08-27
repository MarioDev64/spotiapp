import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent  {
  
  artist:any[] = [];
  loading: boolean;
  constructor(private router:ActivatedRoute, spotify:SpotifyService) { 
    this.loading = true;
    this.router.params.subscribe( params => {
      let id = params.id;
      spotify.getAnArtist(id).subscribe( data => {
        this.artist = data;
        this.loading = false;
      });
    });
  
  }

}
