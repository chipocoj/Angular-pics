import { Component, Input, OnInit } from '@angular/core';
import { SearchUnsplashService } from '../../services/search-unsplash.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input()
  labelText: string;

  constructor(private searchService: SearchUnsplashService) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm) {
    console.log(this.searchService.search(f.value.search));
    f.resetForm();
  }
}
