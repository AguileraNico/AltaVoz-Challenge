import { Injectable } from "@angular/core";
import { brandUserBottomNavigation, brandUserProfileNavigation, commonUserBottomNavigation, commonUserProfileNavigation, userTypes } from "src/app/constants/users";
import { map, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserHelperService {

    getUserType(): Observable<string> {
        return of(userTypes.brand)
    }

    getBottomNavigationItemsByUser() {
        return this.getUserType().pipe(
            map(userType => {
                let navigationItems: { text: string; }[] = [];
                switch (userType) {
                    case userTypes.brand:
                        navigationItems = brandUserBottomNavigation;
                        break;
                    case userTypes.commonUser:
                        navigationItems = commonUserBottomNavigation;
                        break;
                }
                return navigationItems;
            }))
    }

    getProfileNavigationByUser() {
        return this.getUserType().pipe(
            map(userType => {
                let navigationItems: { text: string; }[] = [];
                switch (userType) {
                    case userTypes.brand:
                        navigationItems = brandUserProfileNavigation;
                        break;
                    case userTypes.commonUser:
                        navigationItems = commonUserProfileNavigation;
                        break;
                }
                return navigationItems;
            }))
    }
}