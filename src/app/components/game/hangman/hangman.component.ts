import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HangmanService } from 'src/app/services/hangman/hangman.service';

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
  constructor(
    private hangmanService: HangmanService,
    private location: Location,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
      this.http.get("https://palabras-aleatorias-public-api.herokuapp.com/random").subscribe((data:any) => {
        this.word = data.body.Word
        this.pickNewQuestion();
      });
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

  dummyClick() {
    const key = prompt('Enter a key') || '';
    this.guess(key);
  }

  reset() {
    this.guesses = [];
    this.getQuestions();
    this.restartGameBtnShown = false;
  }

  pickNewQuestion() {
    // const randomIndex = Math.floor(Math.random() * this.questions.length);
    // this.question = this.questions[randomIndex];
    this.question = this.word;
    console.log(this.word)
  }

  onGameFinished() {
    this.restartGameBtnShown = true;
  }
}
