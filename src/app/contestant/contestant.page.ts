import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Game } from '../models/Game';
import { Player } from '../models/Player';

@Component({
  selector: 'app-contestant',
  templateUrl: './contestant.page.html',
  styleUrls: ['./contestant.page.scss'],
})
export class ContestantPage {
    gamePin: string = '';
    name: string = '';
    games: Observable<Game[]>;
    gamesCollectionRef: AngularFirestoreCollection<Game>;

    constructor(public afs: AngularFirestore) {
        this.gamesCollectionRef = afs.collection<Game>('games');
        this.games = this.gamesCollectionRef.valueChanges();
    }

    addPlayer(): any {
        if (this.gamePin !== '' && this.name !== '') {
            const player: Player = {
                name: this.name,
                points: 0
            }
            this.gamesCollectionRef.doc(this.gamePin).collection('players').add(player);
        }
    }

}
