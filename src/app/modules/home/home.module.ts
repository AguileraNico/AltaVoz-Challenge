import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeedComponent } from "./components/feed/feed.component";
import {MatDividerModule} from '@angular/material/divider';
import { PostComponent } from "../../shared/components/post/post.component";
import { CommonModule } from "@angular/common";
import { RoundPictureComponent } from "src/app/shared/components/round-picture/round-picture.component";

const routes: Routes = [{
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
}, {
    path: 'feed',
    component: FeedComponent
}]

@NgModule({
    declarations: [
        FeedComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatDividerModule,
        RoundPictureComponent,
        PostComponent,
    ]
})
export class HomeModule {}