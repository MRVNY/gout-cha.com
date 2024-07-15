import { Component, Input, OnInit } from '@angular/core';
import { Chapter } from '../../../Models/chapter';
import { Img } from '../../../Models/img';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chapter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <!-- Start of div titre -->
      <h2 class="text-6xl flex justify-center py-9">{{chapter.title}}</h2>

      <!-- Start of div img-text -->
      <div class="flex justify-between text-justify text-lg">

        <div
        *ngIf="chapter.style !== 'right'"
        class="w-3/5 m-4" [innerHTML]= chapter.content></div>

        <!-- Start of div img -->
        <div class="w-2/5 m-4">
            <div 
            *ngFor="let img of chapter.images"
            class="mb-4">
              <p class="text-xl flex justify-center font-bold">
                {{img.title}}
              </p>

              <img
                src={{img.src}} alt={{img.alt}}
                class="border-solid border-2 border-black w-full h-full"/>
              
              <div [innerHTML]= img.overlay ></div>
          </div>
        </div>

        <div 
        *ngIf="chapter.style === 'right'"
        class="w-3/5 m-4" [innerHTML]= chapter.content></div>

      </div>
    </div>
    <!--End of row -->
  `,
  styles: ``,
})
export class ChapterComponent {
  @Input() chapter!: Chapter;

  constructor() {}
}
