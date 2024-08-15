import { Component, Input, ViewEncapsulation } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent {
  @Input()
  actUser: User;

  constructor(private userService: UserService) {}

  inactiveUser(user: User): void {
    this.userService.swapUserStatus(user);
  }
}
