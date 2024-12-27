import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class ToastService {
  public toasts = signal([]);
}
