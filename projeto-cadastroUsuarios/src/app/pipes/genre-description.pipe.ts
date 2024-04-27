import { Pipe, PipeTransform } from '@angular/core';
import { GenresService } from '../services/genres.service';

@Pipe({
  name: 'genreDescription'
})
export class GenreDescriptionPipe implements PipeTransform {

  constructor(private readonly genresService: GenresService) {}

  transform(genreId: number): string {
    return this.genresService.getGenreDescription(genreId)
  }

}
