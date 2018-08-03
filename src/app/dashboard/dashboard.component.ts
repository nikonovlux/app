import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { sharepointRESTService } from 'node_modules/sharepoint-rest';



 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
 
  constructor(private heroService: HeroService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  getHeroes(): void {


    // var url = "/_api/contextinfo";
    // sharepointRESTService.getFromURL(url).then(function(response) {
    //   console.log('Response :', response);
    // });


    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;   
    }

    var v_from, v_to;

    v_from = getRandomIntInclusive(0,5);
    v_to = getRandomIntInclusive(6,10);

    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(v_from, v_to));
      

  }
}
