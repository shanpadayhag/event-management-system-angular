import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import ToastService, { type Toast } from '@app/core/services/toast.service';
import { X } from 'lucide-angular';

@Component({
  selector: 'app-toaster',
  standalone: false,
  templateUrl: 'toaster.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ToasterComponent {
  protected readonly X = X;
  protected toastService = inject(ToastService);
  private destroyRef = inject(DestroyRef);

  public toasts = signal<Toast[]>([]);

  constructor() {
    this.toastService.toasts$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(toasts => this.toasts.set(toasts));
  }

  removeToast(index: number) {
    this.toastService.removeToast(index);
  }
}
