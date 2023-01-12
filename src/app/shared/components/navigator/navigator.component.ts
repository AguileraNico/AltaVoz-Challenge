import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
    selector: 'app-navigator',
    templateUrl: './navigator.component.html',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatInputModule]
})
export class NavigatorComponent {

    @Input() navItems: any;
    @Input() type: any;

}