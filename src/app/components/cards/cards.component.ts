import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent  {
  
  @Input() items: any[] = [];
  
  constructor(private router:Router) { }

  seeArtist(item){
    let artistID;
    if(item.type === 'album'){
      artistID = item.artists[0].id;
    }else{
      artistID = item.id;
    }

    this.router.navigate(['/artist', artistID])

  }

}
