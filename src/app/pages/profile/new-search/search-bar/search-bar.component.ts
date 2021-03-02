import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input()
  labelText: string;

  @Output()
  newSearchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm) {
    this.newSearchEvent.emit(f.value.search);
    f.resetForm();
  }
}
