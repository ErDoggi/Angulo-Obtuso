import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { ChapterService } from '@services/chapter.service';
import { List } from '@components/list/list';

@Component({
  selector: 'app-root',
  imports: [List, RouterOutlet],
  templateUrl: './app.html'
})
export class App {
  chapterService = inject(ChapterService)
  chapters       = this.chapterService.getAllChapters()
}