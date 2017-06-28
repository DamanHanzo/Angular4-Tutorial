import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './hero';
import { HeroService } from './hero.services'
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
	ngOnInit(): void{
		this.route.params
			.switchMap((params: Params) => this.heroService.getHero(+params['id']))
			.subscribe(hero => this.hero = hero);
	}
	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	){}
	hero: Hero;
	goBack(): void {
  		this.location.back();
	}
}