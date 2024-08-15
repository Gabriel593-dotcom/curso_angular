import { Component, Input, ViewEncapsulation } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css'
})
export class InactiveUsersComponent {
  
  @Input()
  inactUser: User;

  constructor(private userService: UserService) {}

  activeUser(user: User) {
    this.userService.swapUserStatus(user);
  }
}
