import { Player } from './player.model';

export class PlayersService {
    availablePlayers: Player[] = [
        { id: '1', firstName: 'Audrey', lastName: 'Kepf', jerseyNumber: 55},
        { id: '2', firstName: 'Emily', lastName: 'Kepf', jerseyNumber: 10},
        { id: '3', firstName: 'Bill', lastName: 'Wilson', jerseyNumber: 23},
        { id: '4', firstName: 'Colin', lastName: 'Ramsey', jerseyNumber: 42}
    ];
}