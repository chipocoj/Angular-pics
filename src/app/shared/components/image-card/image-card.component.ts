import { Component, Input, OnInit } from '@angular/core';
import { Pic } from '../../models/pic';

@Component({
  selector: 'image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  @Input()
  image : Pic;

  constructor() { }

  ngOnInit(): void {
  }
  
}
