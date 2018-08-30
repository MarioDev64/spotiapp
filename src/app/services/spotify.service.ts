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
      'Authorization': 'Bearer BQBn_on1buaeOvk64kGZNd2Z9Zr41u-bgz3UnXfsz5NqqzUgJLd34RDys5F39p1-huCEA5pgUyVNbjpJMdk'
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

}
