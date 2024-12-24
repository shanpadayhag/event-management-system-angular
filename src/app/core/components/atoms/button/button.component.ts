import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { cva, type VariantProps } from "class-variance-authority";
import { ClassValue } from 'clsx';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&>.icon>svg]:pointer-events-none [&>.icon>svg]:size-4 [&>.icon>svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: 'button.component.html'
})
export default class ButtonComponent implements OnChanges {
  @Input() variant: VariantProps<typeof buttonVariants>['variant'] = "default";
  @Input() size: VariantProps<typeof buttonVariants>['size'] = "default";
  @Input() className?: ClassValue;
  @Output() clickEvent = new EventEmitter<MouseEvent>();

  protected buttonClass = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['variant'] || changes['size'] || changes['className']) {
      this.updateButtonClass();
    }
  }

  private updateButtonClass(): void {
    this.buttonClass = buttonVariants({
      variant: this.variant,
      size: this.size,
      className: this.className,
    });
  }
}
