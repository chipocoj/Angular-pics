import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pic } from '../../models/pic';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  @Input()
  imageSource$: Observable<Pic[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
