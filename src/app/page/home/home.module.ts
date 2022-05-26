import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeRoutingModule } from './home-routing.module';
import { HangmanComponent } from 'src/app/components/games/hangman/hangman.component';
import { HangmanDisplayComponent } from 'src/app/components/games/hangman/hangman-display/hangman-display.component';
import { HangmanKeyboardComponent } from 'src/app/components/games/hangman/hangman-keyboard/hangman-keyboard.component';
import { HangmanQuestionComponent } from 'src/app/components/games/hangman/hangman-question/hangman-question.component';
import { HigherlowerComponent } from 'src/app/components/games/higherlower/higherlower.component';
import { SnakeComponent } from 'src/app/components/games/snake/snake.component';
import { PreguntadosComponent } from 'src/app/components/games/preguntados/preguntados.component';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { PollComponent } from 'src/app/components/poll/poll.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [
    HangmanComponent,
    HangmanDisplayComponent,
    HangmanKeyboardComponent,
    HangmanQuestionComponent,
    HigherlowerComponent,
    PreguntadosComponent,
    SnakeComponent,
    PollComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSliderModule
  ]
})
export class HomeModule { }
