import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  activeUsers: {name: string}[] = this.userService.activeUsers;
  inactiveUsers: {name: string}[] = this.userService.inactiveUsers;

  constructor(private userService: UserService) {}
}
