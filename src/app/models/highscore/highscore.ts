export type Game = "ahorcado" | "preguntados" | "mayormenor" | "vibora"

export class Highscore {
    user:string;
    date:Date;
    score:number;
    game:Game;
    
    constructor(user:string, date:Date, score:number, game:Game){
        this.user=user;
        this.date=date;
        this.score=score;
        this.game=game;
    }
}

