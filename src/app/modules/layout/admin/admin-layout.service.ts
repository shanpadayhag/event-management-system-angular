import { Injectable, signal } from '@angular/core';

@Injectable()
export default class AdminLayoutService {
  public breadcrumbs = signal('');
}
