import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserHelperService } from './services/helpers/user-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  itemsByUser: Observable<any>;

  constructor(private userService: UserHelperService) {
    this.itemsByUser = this.userService.getBottomNavigationItemsByUser()
  }


}
