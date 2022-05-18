import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { LoginModule } from './page/login/login.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ChatComponent } from './components/chat/chat.component';
import { GameComponent } from './components/game/game.component';
import { HangmanComponent } from './components/game/hangman/hangman.component';
import { HttpClientModule } from '@angular/common/http';
import { HangmanDisplayComponent } from './components/game/hangman/hangman-display/hangman-display.component';
import { HangmanKeyboardComponent } from './components/game/hangman/hangman-keyboard/hangman-keyboard.component';
import { HangmanQuestionComponent } from './components/game/hangman/hangman-question/hangman-question.component';
import { HigherlowerComponent } from './components/game/higherlower/higherlower.component';
import { MatSliderModule } from '@angular/material/slider';
import { PreguntadosComponent } from './components/game/preguntados/preguntados.component';
import { SnakeComponent } from './components/game/snake/snake.component';
import { NgParticlesModule } from 'ng-particles';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotfoundComponent,
    PreguntadosComponent,
    HomeComponent,
    AboutComponent,
    ChatComponent,
    GameComponent,
    HangmanComponent,
    HangmanDisplayComponent,
    HangmanKeyboardComponent,
    HangmanQuestionComponent,
    HigherlowerComponent,
    SnakeComponent
  ],
  imports: [
    NgParticlesModule,
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
