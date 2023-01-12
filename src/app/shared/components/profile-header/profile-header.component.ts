import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { take } from "rxjs";
import { UserHelperService } from "src/app/services/helpers/user-helper.service";
import { NumberPipe } from "../../services/pipes/number.pipe";
import { NavigatorComponent } from "../navigator/navigator.component";
import { RoundPictureComponent } from "../round-picture/round-picture.component";

@Component({
    selector: 'app-profile-header',
    templateUrl: './profile-header.component.html',
    standalone: true,
    imports: [RoundPictureComponent, NumberPipe, CommonModule, NavigatorComponent],
})
export class ProfileHeaderComponent implements OnInit{

    @Input() userInfo: any;
    navigationItems;
    userType!: string;

    constructor(private userService: UserHelperService) {
        this.navigationItems = this.userService.getProfileNavigationByUser()
    }

    ngOnInit(): void {
        this.userService.getUserType().pipe(take(1)).subscribe(type => this.userType = type);
    }

}