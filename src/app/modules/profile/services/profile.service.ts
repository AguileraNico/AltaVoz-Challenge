import { Injectable } from "@angular/core";
import { map, of } from "rxjs";
import { brandUserData, commonUserData } from "src/app/constants/user-profile";
import { userTypes } from "src/app/constants/users";
import { UserHelperService } from "src/app/services/helpers/user-helper.service";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(private userService: UserHelperService) {}

    getUserProfileByType() {
        return this.userService.getUserType().pipe(
            map(userType => {
                let userData;
                switch (userType) {
                    case userTypes.brand:
                        userData = brandUserData.basicData;
                        break;
                    case userTypes.commonUser:
                        userData = commonUserData.basicData;
                        break;
                }
                return userData
            })
        )
    }

    getUserBrands() {
        return of(commonUserData.userBrands)
    }

    getUserComissions() {
        return of(brandUserData.comissions)
    }
}