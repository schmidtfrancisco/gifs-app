import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs';
import { GifsList } from "../../components/gifs-list/gifs-list";

@Component({
  selector: 'app-gif-history-page',
  imports: [GifsList],
  templateUrl: './gif-history-page.html'
})
export default class GifHistoryPage {
  gifService = inject(GifService);
  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map(params => params['query'])
    )
  );
  gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()));

   
}
