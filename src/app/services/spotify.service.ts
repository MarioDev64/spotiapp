import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getSpotifyQuery(query){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAkWbelP6bKw8_erSGDNyqO3b3yejROYWcUWWhLLQko2EybDcjqkNE_F_XfoSJTCnwlyCMAqUEY82R5ZOQ'
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, { headers });
  }
  

  getNewReleases(){

    return this.getSpotifyQuery('browse/new-releases?limit=25')
              .pipe( map( (data:any) => data.albums.items )); 

  }

  search(term:string){

    return this.getSpotifyQuery(`search?q=${ term }&type=artist`)
              .pipe( map( (data:any) => data.artists.items )); 

  }

  getAnArtist(id:string){
    return this.getSpotifyQuery(`artists/${ id }`)
              .pipe( map( (data:any) => data )); 
  }

  getTopTracks(id:string){
    return this.getSpotifyQuery(`artists/${ id }/top-tracks?country=us`)
              .pipe( map( (data:any) =>  data['tracks'] )); 
  }

  errorsHandler(status){
    let errorMessage:string;
    switch (status) {
      case 404:
        errorMessage = "Error: Service doesn't found, probably the endpoint URI has changed or parameters are missing";
        break;
      case 401:
        errorMessage = "Error: Unsucessfull request. The request url is probably wrong o broken";
      default:
        errorMessage = "Error: We're very sad for this event, we developers are solving this issue the most quickly as posible"
        break;
    }

    return errorMessage;
  }

}
