import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Pic } from '../../../shared/models/pic';
import { SearchUnsplashService } from '../services/search-unsplash.service';

@Component({
  selector: 'app-new-search',
  templateUrl: './new-search.component.html',
  styleUrls: ['./new-search.component.css']
})
export class NewSearchComponent implements OnInit, OnDestroy {
  searchBarLabel = "Image Search";
  private picsSubscription: Subscription;
  searchTerm: string;
  pics$: Observable<Pic[]>;
  
  constructor(private searchService: SearchUnsplashService) { }

  ngOnInit(): void {
    this.picsSubscription = this.searchService.getPicsChanged$.subscribe(data => this.onPicsLoaded(data));
  }

  ngOnDestroy(): void {
    if(this.picsSubscription) {
      this.picsSubscription.unsubscribe();
    }
  }

  newSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.searchService.search(searchTerm);
  }

  onPicsLoaded(data: Pic[]) : void {
    this.pics$ = of(data);
  }
}
