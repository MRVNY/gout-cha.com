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
      <!-- TITLE -->
      <h2 class="text-6xl flex justify-center py-9" *ngIf="chapter.title">{{ chapter.title }}</h2>

      <!-- LEFT/RIGHT LAYOUT -->
      <div
        class="flex justify-between text-justify text-lg"
        *ngIf="chapter.style !== undefined"
      >
        <!-- TEXT IF LEFT -->
        <div
          *ngIf="chapter.style !== 'right'"
          class="w-3/5 m-4"
          [innerHTML]="chapter.content"
        ></div>

        <!-- IMG -->
        <div class="w-2/5 m-4">
          <div *ngFor="let img of chapter.images" class="mb-4">
            <p class="text-xl flex justify-center font-bold m-2">
              {{ img.title }}
            </p>

            <img
              src="{{ img.src }}"
              alt="{{ img.alt }}"
              class="border-solid border-2 border-black w-full h-full"
            />

            <div [innerHTML]="img.overlay"></div>
          </div>
        </div>

        <!-- TEXT IF RIGHT -->
        <div
          *ngIf="chapter.style === 'right'"
          class="w-3/5 m-4"
          [innerHTML]="chapter.content"
        ></div>
      </div>
    </div>

    <!-- ONE COLUMN LAYOUT -->
    <div
      class="justify-between text-justify text-lg"
      *ngIf="chapter.style === undefined"
    >
      <!-- TEXT -->
      <div class="m-4" [innerHTML]="chapter.content"></div>

      <!-- IMG -->
      <div class="m-4 flex">
        <div *ngFor="let img of chapter.images" class="mb-4 w-full m-4">
          <p class="text-xl flex justify-center font-bold m-2">
            {{ img.title }}
          </p>

          <img
            src="{{ img.src }}"
            alt="{{ img.alt }}"
            class="border-solid border-2 border-black w-full h-full"
          />

          <div [innerHTML]="img.overlay"></div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ChapterComponent {
  @Input() chapter!: Chapter;

  constructor() {}
}
