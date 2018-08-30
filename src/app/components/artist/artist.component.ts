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
  topTracks:any[] = [];
  loading: boolean;

  constructor(private router : ActivatedRoute, private spotify : SpotifyService) { 

    this.router.params.subscribe( params => {
      this.getAnArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  
  }

  getAnArtist(id:string){

    this.loading = true;
    
    this.spotify.getAnArtist(id).subscribe( data => {
      this.artist = data;
      this.loading = false;
    });

  }

  getTopTracks(id){

    this.loading = true;

    this.spotify.getTopTracks(id).subscribe( data => {
      
      this.topTracks = data;
      this.loading = false;
    });

  }

}
