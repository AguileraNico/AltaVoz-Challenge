import { Component } from "@angular/core";
import { ProfileService } from "../../services/profile.service";

@Component({
    selector: 'app-comissions-component',
    templateUrl: './comissions.component.html'
})
export class ComissionsComponent {

    comissions;

    constructor(private profileService: ProfileService) {
        this.comissions = this.profileService.getUserComissions();
    }
}