import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IChapter } from '@typings';

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  imports: [RouterLink]
})
export class List {
  chapters = input.required<IChapter[]>()
}
