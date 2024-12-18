import { Component, Input, OnInit } from '@angular/core';
import { cn } from '../../../lib/tailwind/utils';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() className: string = '';

  _className = '';

  ngOnInit(): void {
    this._className = cn('rounded-md border bg-card text-card-foreground shadow w-full', this.className);
  }
}

@Component({
  selector: 'card-header',
  templateUrl: './card-header.component.html',
})
export class CardHeaderComponent { }

@Component({
  selector: 'card-title',
  templateUrl: './card-title.component.html',
})
export class CardTitleComponent { }

@Component({
  selector: 'card-description',
  templateUrl: './card-description.component.html',
})
export class CardDescriptionComponent { }

@Component({
  selector: 'card-content',
  templateUrl: './card-content.component.html',
})
export class CardContentComponent { }
