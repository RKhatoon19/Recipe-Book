import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[app-dropdown]'
})
export class DropdownDirective {
    @HostBinding('data-toggle.dropdown') isToggled = false;
    @HostListener('click') toggleButton() {
        this.isToggled = !this.isToggled;
        console.log(this.isToggled);
    }
}