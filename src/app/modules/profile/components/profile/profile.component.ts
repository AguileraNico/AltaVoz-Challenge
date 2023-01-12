import { Component, HostBinding } from "@angular/core";
import { ProfileService } from "../../services/profile.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
    @HostBinding('class') class = 'overflow-auto bg-neutral-900 overscroll-y-auto grow';
    userInformation;

    constructor(private profileService: ProfileService) {
        this.userInformation = this.profileService.getUserProfileByType();
    }
}