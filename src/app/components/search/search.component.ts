import { Component, TemplateRef, ViewChild } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artist:any[] = [];
  noImage = "assets/img/no_image.png";
  loading:boolean;

  thenBlock: TemplateRef<any>|null = null;
  @ViewChild('hasImage')
  primaryBlock: TemplateRef<any>|null = null;
  @ViewChild('noHasImage')
  secondaryBlock: TemplateRef<any>|null = null;

  constructor(private spotify : SpotifyService) { 
    
  }

  goToSearch(term){
    this.loading = true;

    this.spotify.search(term)
    .subscribe( data => {
      this.artist = data;
      this.loading = false;
    }); 
     
  }
}
