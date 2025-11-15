import { Injectable } from '@angular/core';
import { IChapter } from '@app/typings';
import chapters from '@app/chapters.json';

@Injectable({
  providedIn: 'root',
})
export class ChapterService {
  items: IChapter[] = chapters

  public getAllChapters(): IChapter[] {
    return this.items
  }
}
