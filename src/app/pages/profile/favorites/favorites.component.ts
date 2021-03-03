import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Pic } from 'src/app/shared/models/pic';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  private inMemSubscription: Subscription;
  pics: Pic[];
  pics$: Observable<Pic[]>;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.inMemSubscription = this.profileService.getPics().subscribe(pics => {console.log(pics); this.pics = pics; this.pics$ = of(this.pics); console.log(this.pics)});
  }

  ngOnDestroy(): void {
    if(this.inMemSubscription) {
      this.inMemSubscription.unsubscribe();
    }
  }

  delete(pic: Pic): void {
    this.pics = this.pics.filter(p => p !== pic);
    this.profileService.deletePic(pic).subscribe();
  }
}
