import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pic } from 'src/app/shared/models/pic';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let pics = [
      {
        id: 1,
        picId: "koy6FlCCy5s",
        alt: "orange petaled flowers",
        author: "Sergey Shmidt",
        tags: []
      },
      {
        id: 2,
        picId: "VtfiPvSGh5s",
        alt: "red porsche 911 parked near brown building",
        author: "Alan Flack",
        tags: [
          { title: "automobile" },
          { title: "car" },
          { title: "transportation" }
        ]
      }
    ];
    return {pics};
  }

  genId(heroes: Pic[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
