import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/services/http/search.service';
import { SearchUnsplashService } from 'src/app/shared/services/search-unsplash.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [
    { provide: SearchService, useClass: SearchUnsplashService }
  ]
})
export class ProfileComponent implements OnInit {


  constructor(private searchService: SearchUnsplashService) { }

  ngOnInit(): void {
  }

}
