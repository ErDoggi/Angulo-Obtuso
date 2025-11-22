import { Injectable } from '@angular/core';
import { IChapter } from '@typings';
import chapters from '@chapters';

@Injectable({
  providedIn: 'root',
})
export class ChapterService {
  items: IChapter[] = chapters

  public getAllChapters(): IChapter[] {
    return this.items
  }
}
