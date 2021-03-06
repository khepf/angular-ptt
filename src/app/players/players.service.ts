import { Player } from './player.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class PlayersService {

    playersChanged = new Subject<Player[]>();
    private fbSubs: Subscription[] = [];
    private players: Player[] = [];

    constructor(private db: AngularFirestore){}

    fetchPlayers() {
        this.fbSubs.push(this.db
            .collection('fbUsers')
            .doc('PSNq95JcV3GeetZFEcUJ')
            .collection('players')
            .snapshotChanges()
            .pipe(map(docArray => {
                return docArray.map(doc => {
                    return {
                        id: doc.payload.doc.id,
                        firstName: doc.payload.doc.data()['firstName'],
                        lastName: doc.payload.doc.data()['lastName'],
                        jerseyNumber: doc.payload.doc.data()['jerseyNumber']
                    }
                })
            }))
            .subscribe((fbPlayers: Player[]) => {
                this.players = fbPlayers;
                this.playersChanged.next([...this.players]);
            }));
    }
}