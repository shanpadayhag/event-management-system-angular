import { Component, computed, inject, Input } from '@angular/core';
import TailwindService from '@app/core/services/tailwind.service';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: 'card.component.html'
})
export default class CardComponent {
  private tailwindService = inject(TailwindService);

  @Input() class: string = '';

  cardClasses = computed(() => {
    return this.tailwindService.merge(
      'rounded-xl border bg-card text-card-foreground shadow',
      this.class
    );
  });
}
