import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostComponent } from "src/app/shared/components/post/post.component";
import { ProfileHeaderComponent } from "src/app/shared/components/profile-header/profile-header.component";
import { ComissionsComponent } from "./components/comissions/comissions.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { UserBrandsComponent } from "./components/user-brands/user-brands.component";
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CarrouselComponent } from "src/app/shared/components/carrousel/carrousel.component";

const routes: Routes = [{
    path: ':id',
    component: ProfileComponent,
    children: [{
        path: 'brands',
        component: UserBrandsComponent
    }, {
        path: 'comissions',
        component: ComissionsComponent
    }]
}]

@NgModule({
    declarations: [
        ProfileComponent,
        UserBrandsComponent,
        ComissionsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ProfileHeaderComponent,
        PostComponent,
        MatDividerModule,
        MatProgressBarModule,
        CarrouselComponent
    ]
})
export class ProfileModule {}