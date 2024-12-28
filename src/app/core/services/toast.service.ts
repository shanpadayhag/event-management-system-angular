import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Toast = {
  title?: string;
  description?: string;
  timeoutID?: any;
};

@Injectable({
  providedIn: 'root'
})
export default class ToastService {
  private toastSubject = new BehaviorSubject<Toast[]>([]);
  public toasts$ = this.toastSubject.asObservable();

  addToast(toast: Toast) {
    const toasts = this.toastSubject.getValue();

    if (toasts.length >= 5) {
      const removed = toasts.shift();
      if (removed?.timeoutID) clearTimeout(removed.timeoutID);
    }

    const timeoutID = setTimeout(() => this.removeToast(0), 3000);
    this.toastSubject.next([...toasts, { ...toast, timeoutID }]);
  }

  removeToast(index: number) {
    const toasts = this.toastSubject.getValue();
    const [removed] = toasts.splice(index, 1);
    if (removed?.timeoutID) clearTimeout(removed.timeoutID);
    this.toastSubject.next([...toasts]);
  }
}
