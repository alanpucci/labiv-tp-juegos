import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HangmanService } from 'src/app/services/hangman/hangman.service';
import { HighscoreService } from 'src/app/services/highscore/highscore.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css'],
})
export class HangmanComponent implements OnInit {
  question: string = '';
  questions: string[] = [];
  guesses: string[] = [];
  category: string = '';
  restartGameBtnShown = false;
  word="";
  beginGame=false;
  score=0;
  constructor(
    private hangmanService: HangmanService,
    private location: Location,
    private http: HttpClient,
    private highscoreService:HighscoreService
  ) {}

  ngOnInit(): void {
      this.http.get("https://palabras-aleatorias-public-api.herokuapp.com/random").subscribe((data:any) => {
        this.word = data.body.Word
        this.pickNewQuestion();
      });
  }

  start(){
    this.score=0;
    this.beginGame=true;
  }

  endGame(){
    this.score=0;
    this.beginGame=false;
    this.reset();
  }

  getQuestions(){
    this.http.get("https://palabras-aleatorias-public-api.herokuapp.com/random").subscribe((data:any) => {
      this.word = data.body.Word
      this.pickNewQuestion();
    });
  }

  guess(letter: string) {
    if (!letter || this.guesses.includes(letter)) {
      return;
    }
    this.guesses = [...this.guesses, letter];
  }

  reset() {
    this.guesses = [];
    this.getQuestions();
    this.restartGameBtnShown = false;
  }

  addScore(){
    this.score+=10;
  }

  pickNewQuestion() {
    this.question = this.word;
    console.log(this.word)
  }

  async onGameFinished(won:boolean) {
    if(won){
      this.restartGameBtnShown = true;
    }else{
      await this.highscoreService.registerScore(this.score, "ahorcado")
      this.endGame();
    }
  }
}
