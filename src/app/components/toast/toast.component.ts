import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

/**
 * A customizable toast component that slides up from the bottom of the screen.
 *
 * Usage:
 * ```html
 * <app-toast
 *   [message]="'Hello World'"
 *   [type]="'success'"
 *   [duration]="3000"
 *   [positionBottom]="'20px'"
 *   [fullscreen]="true">
 * </app-toast>
 * ```
 *
 * Or programmatically via `@ViewChild`:
 * ```TypeScript
 * @ViewChild(ToastComponent) toast!: ToastComponent;
 * ...
 * this.toast.show('Message', 'success', 3000, '80px', true);
 * ```
 */
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('toastState', [
      state('hidden', style({
        bottom: '-100px',
        opacity: 0
      })),
      state('visible', style({
        bottom: '{{ bottom }}',
        opacity: 1
      }), { params: { bottom: '20px' } }),
      transition('hidden => visible', animate('300ms ease-out')),
      transition('visible => hidden', animate('300ms ease-in'))
    ])
  ]
})
export class ToastComponent {
  /**
   * The message to display in the toast.
   * Default: ''
   */
  @Input() message: string = '';

  /**
   * The type of the toast, which determines its styling (e.g., background color).
   * Options: 'success', 'error', 'warning'.
   * Default: 'success'
   */
  @Input() type: 'success' | 'error' | 'warning' = 'success';

  /**
   * The duration in milliseconds for which the toast should be visible.
   * Default: 3000
   */
  @Input() duration: number = 3000;

  /**
   * The bottom position of the toast when visible.
   * Can be any valid CSS value (e.g., '20px', '5rem', '10%').
   * Default: '20px'
   */
  @Input() positionBottom: string = '20px';

  /**
   * Whether to add the safe area bottom to the position.
   * Useful for fullscreen pages where the toast might be covered by the home indicator.
   * Default: false
   */
  @Input() fullscreen: boolean = false;

  isVisible: boolean = false;
  timeoutId: any;

  constructor() {
  }

  get calculatedBottom(): string {
    if (this.fullscreen) {
      return `calc(${this.positionBottom} + var(--ion-safe-area-bottom, 0px))`;
    }
    return this.positionBottom;
  }

  /**
   * Shows the toast with the specified parameters.
   *
   * @param message The message to display.
   * @param type The type of the toast ('success', 'error', 'warning'). Default: 'success'.
   * @param duration The duration in milliseconds. Default: 3000.
   * @param positionBottom Optional bottom position (e.g., '80px'). If not provided, uses the current or default value.
   * @param fullscreen Optional boolean to enable safe area calculation.
   */
  show(message: string, type: 'success' | 'error' | 'warning' = 'success', duration: number = 3000, positionBottom?: string, fullscreen?: boolean) {
    this.message = message;
    this.type = type;
    this.duration = duration;
    if (positionBottom) {
      this.positionBottom = positionBottom;
    }
    if (fullscreen !== undefined) {
      this.fullscreen = fullscreen;
    }
    this.isVisible = true;

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      this.hide();
    }, this.duration);
  }

  /**
   * Hides the toast immediately.
   */
  hide() {
    this.isVisible = false;
  }
}
