import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() isOpenSidebar: boolean = false;

  @Output() closeSidebar = new EventEmitter<null>();

  onCloseSidebar() {
    this.closeSidebar.emit();
  }
}
