import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html'
})
export class SearcherComponent implements OnInit {

  heroes:any[] = [];
  term:string;

  constructor( private activatedRoute:ActivatedRoute, private _heroesService:HeroesService ) {
  
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      // console.log( params['term'] );
      this.term = params['term'];
      this.heroes = this._heroesService.searchHeroes( params['term'] );
      // console.log(this.heroes);
    });
  }

}