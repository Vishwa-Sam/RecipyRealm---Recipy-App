import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  standalone: true,
  imports: [],
  templateUrl: './alert-message.component.html',
  styleUrl: './alert-message.component.css',
})
export class AlertMessageComponent {
  message = input<string | null>();
  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
