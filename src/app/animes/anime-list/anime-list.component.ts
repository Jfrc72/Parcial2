import { Component, OnInit } from '@angular/core';
import { Animes } from '../animes';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  animes: Array<Animes> = [];
  selectedAnime!: Animes;
  selected: Boolean = false;
  
  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  calculateAverageRating() {
    let totalRating = 0;
    for (const anime of this.animes) {
      totalRating += parseFloat(anime.Rating);
    }
    const averageSeasons = (totalRating / this.animes.length).toFixed(2);
    return averageSeasons;
  }

  totalEpisodes() {
    let totalEpisodes = 0;
    for (const anime of this.animes) {
      totalEpisodes += anime.episode;
    }
    return totalEpisodes;
  }

  onSelected(anime: Animes): void {
    this.selected = true;
    this.selectedAnime = anime;
  }

  ngOnInit() {
    this.getAnimes();
  }

}
