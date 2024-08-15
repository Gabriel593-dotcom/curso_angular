import { Injectable } from "@angular/core";
import { BehaviorLogService } from "./behavior_log.service";
import { User } from "../model/user.model";

@Injectable()
export class UserService {
    
    activeUsers: User[] = [
        new User("Gabriel", true), 
        new User("Lucas", true)
      ];
    
      inactiveUsers: User[] = [
        new User("Ana", false), 
        new User("Clara", false)
      ];

    constructor(private behaviorLogService: BehaviorLogService) {}

    swapUserStatus(user: User): void {

        if(user.isActive) {
            user.isActive = false;
            this.inactiveUsers.push(user);
            this.activeUsers.splice(this.activeUsers.indexOf(user), 1);
            
            setTimeout(() => {
                this.behaviorLogService.logBehavior(user.name + " was inactivated.");
            }, 100); 
        
            return;
        }

        user.isActive = true;
        this.activeUsers.push(user);
        this.inactiveUsers.splice(this.inactiveUsers.indexOf(user), 1);
        
        setTimeout(() => {
            this.behaviorLogService.logBehavior(user.name + " was activated."); 
        }, 100);    
    }
}