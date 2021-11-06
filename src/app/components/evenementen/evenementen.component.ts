import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenementen',
  templateUrl: './evenementen.component.html',
  styleUrls: ['./evenementen.component.css']
})
export class EvenementenComponent implements OnInit {

    

  constructor() { }

  ngOnInit(): void {
  }

  getEvenementen(){
    //for now this will be hardcoded use this to expand to database later (api call)
  }

}
