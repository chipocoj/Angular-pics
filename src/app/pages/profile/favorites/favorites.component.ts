import { Component, OnInit } from '@angular/core';
import { Pic } from 'src/app/shared/models/pic';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  pics: Pic[];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getPics();
  }

  getPics(): void {
    this.profileService.getPics()
      .subscribe(pics => {console.log(pics); this.pics = pics});
  }

  delete(pic: Pic): void {
    this.pics = this.pics.filter(p => p !== pic);
    this.profileService.deletePic(pic).subscribe();
  }
}
