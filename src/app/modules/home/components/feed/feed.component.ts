import { Component, HostBinding } from "@angular/core";
import { FeedService } from "../../services/feed.service";

@Component({
    selector: 'app-feed-component',
    templateUrl: './feed.component.html'
})
export class FeedComponent {
    @HostBinding('class') class = 'overflow-auto bg-neutral-900 overscroll-y-auto';
    feedData;

    constructor(private feedService: FeedService) {
        this.feedData = this.feedService.getFeed()
    }

}