import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
  @Input() errorMessage:string = "gdsgs";

  constructor() { }

  ngOnInit() {
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
