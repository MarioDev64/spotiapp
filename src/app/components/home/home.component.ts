import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ErrorsComponent } from "../errors/errors.component";

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

  constructor( private spotify: SpotifyService, private errorsComponent : ErrorsComponent) {
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
            errorMessage = this.errorsComponent.errorsHandler(httpError.status);
          }
                    
          this.loading = false;
          this.error = true;
          this.errorMessage = errorMessage;
        });  
  }

  ngOnInit() {
  }

}
