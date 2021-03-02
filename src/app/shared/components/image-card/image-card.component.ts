import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
  url:string;

  constructor() { }

  ngOnInit(): void {
  }

}
