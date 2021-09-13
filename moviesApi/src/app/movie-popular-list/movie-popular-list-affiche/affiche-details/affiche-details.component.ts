import { Component, Input, OnInit } from '@angular/core';
import { Details } from 'src/app/shared/models/details';

@Component({
  selector: 'app-affiche-details',
  templateUrl: './affiche-details.component.html',
  styleUrls: ['./affiche-details.component.css']
})
export class AfficheDetailsComponent implements OnInit {


  @Input() detail!: Details

  constructor() { }

  ngOnInit(): void {
  }

}
