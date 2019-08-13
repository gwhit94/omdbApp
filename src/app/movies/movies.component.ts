import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, interval, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})


export class MoviesComponent implements OnInit {
  searchOutput: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    const searchField = document.getElementById('searchField');

    const keyUps = fromEvent(searchField, 'keyup').pipe(
      map(e => e.target['value']),
      filter(text => text.length > 3),
      debounceTime(3000),
      distinctUntilChanged()
    );

    keyUps.subscribe(evt => 
      this.apiService.apiSearch(evt).subscribe(res => this.searchOutput = res)
      );
  }
}