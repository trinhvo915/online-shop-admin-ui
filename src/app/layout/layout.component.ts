import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  isOpenSidebar: boolean = true;

  onShowHideSidebar() {
    this.isOpenSidebar = !this.isOpenSidebar;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth <= 768 && !this.isOpenSidebar) {
      this.isOpenSidebar = true;
    }
  }
}
