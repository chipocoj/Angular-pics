import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getPics();
  }

  getPics(): void {
    this.profileService.getPics()
      .subscribe(pics => console.log(pics));
  }

}
