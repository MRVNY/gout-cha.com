import { Component } from '@angular/core';

@Component({
  selector: 'app-construction',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col items-center justify-center">
      <h2>Patience patience, c'est pour bientôt !</h2>
      <h2>Patience patience, not long to wait !</h2>

      <div class="">
        <img src="assets/images/construction.png" />
      </div>
    </div>
  `,
  styles: ``,
})
export class ConstructionComponent {}
