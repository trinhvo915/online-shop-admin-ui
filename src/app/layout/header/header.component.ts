import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() isOpenSidebar: boolean = false;
  @Output() closeSidebar = new EventEmitter<null>();

  onCloseSidebar() {
    this.closeSidebar.emit();
  }
}
