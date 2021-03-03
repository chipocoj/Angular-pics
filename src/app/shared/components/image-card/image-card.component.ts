import { Component, Input, OnInit } from '@angular/core';
import { Pic } from '../../models/pic';
import { ImageCardService } from '../../services/image-card.service';

@Component({
  selector: 'image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  @Input()
  image : Pic;

  get emptyTags(): boolean {
    return this.image.tags.length === 0;
  }

  constructor(private imageCardService: ImageCardService) { }

  ngOnInit(): void {
  }

  addToFavorites(pic: Pic): void {
    this.imageCardService.emitImageCardEvent(pic);
  }
}
