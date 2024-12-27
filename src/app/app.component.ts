import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import ToastModule from '@app/core/components/atoms/toast/toast.module';

@Component({
  selector: 'app-root',
  imports: [RouterModule, ToastModule],
  templateUrl: 'app.component.html',
})
export class AppComponent {
}
