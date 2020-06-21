import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Game } from '../models/Game';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [AngularFirestore]
})
export class HomePage {
    games: Observable<Game[]>;
    gamesCollectionRef: AngularFirestoreCollection<Game>;
    pinToRemove: string;

    constructor(public afs: AngularFirestore, private router: Router) {
        this.gamesCollectionRef = afs.collection<Game>('games');
        this.games = this.gamesCollectionRef.valueChanges();
    }

    startNewGame(): any {
        let PIN = this.generatePin();
        console.log(PIN);
        this.gamesCollectionRef.doc(PIN).set(this.initGameState());
    }

    goToContestant(): any {
        this.router.navigate(['/contestant'])
    }

    generatePin(): string {
        return (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    }

    removeTestGame(): any {
        this.gamesCollectionRef.doc(this.pinToRemove).delete();
    }

    initGameState(): any {
        const state: object = {
            state: 'waitingForPlayers',
        };
        return state;
    }
}
