import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  
  newReleases:any[] = [];
  loading:boolean;
  error:boolean;
  errorMessage:string;

  constructor( private spotify: SpotifyService) {
    this.loading = true;

    this.spotify.getNewReleases()
        .subscribe( data => {
          this.newReleases = data;
          this.loading = false;
        }, ( httpError ) =>{
          let errorMessage:any;

          if(httpError.error != null){
            errorMessage = httpError.error['error'].message;
          }else{
            errorMessage = this.spotify.errorsHandler(httpError.status);
          }
                    
          this.loading = false;
          this.error = true;
          this.errorMessage = errorMessage;
        });  
  }

  ngOnInit() {
  }

}
