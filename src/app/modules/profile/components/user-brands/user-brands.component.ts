import { Component } from "@angular/core";
import { ProfileService } from "../../services/profile.service";

@Component({
    selector: 'app-user-brands',
    templateUrl: './user-brands.component.html'
})
export class UserBrandsComponent {

    brands;

    constructor(private profileService: ProfileService) {
        this.brands = this.profileService.getUserBrands();
    }
}