import { Game } from '../highscore/highscore';
export class Poll {
    lastName:string;
    name:string;
    age:number;
    cellPhone:number;
    bestGame: Game
    score: number;
    comments:string;

    constructor(lastName:string, name:string, age:number, cellPhone:number, bestGame:Game, score:number, comments:string){
        this.lastName=lastName;
        this.name=name;
        this.age=age;
        this.cellPhone=cellPhone;
        this.bestGame=bestGame;
        this.score=score;
        this.comments=comments;
    }
}
