import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  public toasts: any[] = [];
  private delayHide: number = 8000;

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  showStandard(message: string) {
    this.show(message);
  }

  showSuccess(message: string) {
    this.show(message, { classname: 'toast-success', delay: this.delayHide });
  }

  showError(message: string) {
    this.show(message, { classname: 'toast-error', delay: this.delayHide });
  }

  showInfo(message: string) {
    this.show(message, { classname: 'toast-info', delay: this.delayHide });
  }

  showWarning(message: string) {
    this.show(message, { classname: 'toast-warning', delay: this.delayHide });
  }

  remove(toast: any) {
    toast.isClosed = true;
    setTimeout(() => {
      this.toasts = this.toasts.filter((t) => t !== toast);
    }, 500);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
