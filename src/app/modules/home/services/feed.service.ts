import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { feed } from "src/app/constants/feed-mock-data";

@Injectable({
    providedIn: "root"
})
export class FeedService {

    getFeed() {
        return of(feed)
    }
}