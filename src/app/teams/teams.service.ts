import { Team } from './team.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class TeamsService {

    teamsChanged = new Subject<Team[]>();
    private fbSubs: Subscription[] = [];
    private teams: Team[] = [];

    constructor(private db: AngularFirestore){}

    fetchTeams() {
        this.fbSubs.push(this.db
            .collection('fbUsers')
            .doc('PSNq95JcV3GeetZFEcUJ')
            .collection('teams')
            .snapshotChanges()
            .pipe(map(docArray => {
                return docArray.map(doc => {
                    return {
                        id: doc.payload.doc.id,
                        teamName: doc.payload.doc.data()['teamName'],
                    }
                })
            }))
            .subscribe((fbTeams: Team[]) => {
                this.teams = fbTeams;
                this.teamsChanged.next([...this.teams]);
            }));
    }
}