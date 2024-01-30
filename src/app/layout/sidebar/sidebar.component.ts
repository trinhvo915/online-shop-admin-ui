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
    {
      routerLink: 'ecommerce',
      icon: 'user-add',
      text: 'Users',
    },
  ];

  @Input()
  isOpenSidebar: boolean = false;

  @Output()
  closeSidebar = new EventEmitter<null>();

  onCloseSidebar() {
    this.closeSidebar.emit();
  }
}
