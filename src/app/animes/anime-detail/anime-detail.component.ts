import { Component, Input, OnInit } from '@angular/core';
import { Animes } from '../animes';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  @Input() animeDetail!: Animes;

  constructor() { }

  ngOnInit() {
  }

}
