import { HomeInput } from './home.model';
import { Subject } from 'rxjs/Subject';

export class HomeService {
    private availableInputs: HomeInput[] = [];

    getAvailableInputs() {
        return this.availableInputs.slice();
    }
}