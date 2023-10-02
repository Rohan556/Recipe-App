import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]',
})
export class DropdownDirective {
  @HostBinding('class.open') opened: boolean = false;
  @HostListener('click') toggleDropdown() {
    this.opened = !this.opened;
  }
}
