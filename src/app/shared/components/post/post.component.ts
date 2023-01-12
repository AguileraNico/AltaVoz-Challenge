import { CommonModule } from "@angular/common";
import { Component, HostBinding, Input } from "@angular/core";
import { RoundPictureComponent } from "src/app/shared/components/round-picture/round-picture.component";

@Component({
    selector: 'app-post-component',
    templateUrl: './post.component.html',
    standalone: true,
    imports: [RoundPictureComponent, CommonModule]
})
export class PostComponent {
    @HostBinding('class') class = 'bg-neutral-900';

    @Input() post: any;

}