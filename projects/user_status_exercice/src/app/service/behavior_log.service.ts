import { User } from "../model/user.model";

export class BehaviorLogService {

    logBehavior(message: string) {
        window.alert(message);
    }
}