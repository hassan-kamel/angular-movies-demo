import { Component, Input } from '@angular/core';

interface ControlError {
  required?: boolean;
  minlength?: boolean;
  maxlength?: boolean;
  min?: boolean;
  email?: boolean;
  pattern?: boolean;
}

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css'],
})
export class ErrorMessageComponent {
  @Input() display: boolean = false;
  @Input() errors: ControlError | null = {};
  @Input() field: string = '';
}
