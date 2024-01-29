import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menu = [
    {
      routerLink: '',
      icon: 'home',
      text: 'Dashboard',
    },
    {
      routerLink: 'ecommerce',
      icon: 'shopping-cart',
      text: 'eCommerce',
    },
    {
      routerLink: 'category',
      icon: 'security-scan',
      text: 'Role & Permissions',
    },
  ];

  @Input() isOpenSidebar: boolean = false;

  @Output() closeSidebar = new EventEmitter<null>();

  onCloseSidebar() {
    this.closeSidebar.emit();
  }
}
