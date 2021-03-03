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
        tags: [],
        url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTkyMzN8MHwxfHNlYXJjaHwxfHxmbG93ZXJ8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
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
        ],
        url: "https://images.unsplash.com/photo-1597404294360-feeeda04612e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTkyMzN8MHwxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
      }
    ];
    return {pics};
  }

  genId(heroes: Pic[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
