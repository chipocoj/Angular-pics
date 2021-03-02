import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pic } from '../../models/pic';

@Component({
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit, OnChanges {

  @Input()
  imageSource: Pic[];

  images: Pic[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.imageSource);
    this.images = changes.imageSource.currentValue;
  }

  ngOnInit(): void {
  }

}
