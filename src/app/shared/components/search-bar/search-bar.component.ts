import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../../services/http/search.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input()
  labelText: string;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm) {
    this.searchService.search(f.value.search)
      .subscribe(data => console.log(data));
    f.resetForm();
  }
}
