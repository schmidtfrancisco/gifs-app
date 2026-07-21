import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GifsList } from "../../components/gifs-list/gifs-list";
import { GifService } from '../../services/gifs';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifsList],
  templateUrl: './search-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPage {
  gifService = inject(GifService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    console.log({ query });
    this.gifService.searchGifs(query).subscribe( resp => {
      this.gifs.set(resp);
    });
  }
}
