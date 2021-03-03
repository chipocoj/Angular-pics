import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { ImageCardService } from 'src/app/shared/services/image-card.service';
import { Pic } from '../../../shared/models/pic';
import { ProfileService } from '../services/profile.service';
import { SearchUnsplashService } from '../services/search-unsplash.service';

@Component({
  selector: 'app-new-search',
  templateUrl: './new-search.component.html',
  styleUrls: ['./new-search.component.css']
})
export class NewSearchComponent implements OnInit, OnDestroy {
  searchBarLabel = "Image Search";
  pics: Pic[];
  private picsSubscription: Subscription;
  private inMemSubscription: Subscription;
  private addPicSubscription: Subscription;
  private selectedPicSubscription: Subscription;
  searchTerm: string;
  pics$: Observable<Pic[]>;
  
  constructor(private searchService: SearchUnsplashService,
              private profileService: ProfileService,
              private imageCardService: ImageCardService) { }

  ngOnInit(): void {
    this.inMemSubscription = this.profileService.getPics().subscribe(pics => {console.log(pics); this.pics = pics});
    this.picsSubscription = this.searchService.getPicsChanged$.subscribe(data => this.onPicsLoaded(data));
    this.selectedPicSubscription = this.imageCardService.getPicChanged$.subscribe(pic => this.add(pic));
  }

  ngOnDestroy(): void {
    this.inMemSubscription.unsubscribe();
    if(this.picsSubscription) {
      this.picsSubscription.unsubscribe();
    }
    if(this.addPicSubscription) {
      this.addPicSubscription.unsubscribe();
    }
    if(this.selectedPicSubscription) {
      this.selectedPicSubscription.unsubscribe();
    }
  }

  newSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.searchService.search(searchTerm);
  }

  onPicsLoaded(data: Pic[]) : void {
    this.pics$ = of(data);
  }

  add(pic:Pic): void {
    this.addPicSubscription = this.profileService.addPic(pic)
      .subscribe(pic => this.pics.push(pic));
  }
}
