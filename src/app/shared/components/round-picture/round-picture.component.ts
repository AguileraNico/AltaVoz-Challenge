import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-round-picture',
    templateUrl: './round-picture.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class RoundPictureComponent {

    @Input() picture: any;
    @Input() hasHistoryToShow = false;

}