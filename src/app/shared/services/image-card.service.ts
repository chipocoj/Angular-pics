import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pic } from 'src/app/shared/models/pic';

@Injectable({
  providedIn: 'root'
})
export class ImageCardService {
  private imageCardEvent = new Subject<Pic>();
  public getPicChanged$ = this.imageCardEvent.asObservable();

  constructor() { }

  emitImageCardEvent(pic: Pic): void {
    this.imageCardEvent.next(pic);
  }
}
