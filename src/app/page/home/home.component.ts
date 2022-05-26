import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { HighscoreService } from 'src/app/services/highscore/highscore.service';
import { map } from 'rxjs';
import { particlesConfig } from '../../utils/utils';
import { Game, Highscore } from 'src/app/models/highscore/highscore';
import { MatDialog } from '@angular/material/dialog';
import { PollComponent } from 'src/app/components/poll/poll.component';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id = "tsparticles";
  highscore:Highscore[]=[];
  game:Game="ahorcado";
  particlesOptions = particlesConfig;

  constructor(private router:Router, private highscoreService:HighscoreService, public dialog: MatDialog) { }

  particlesLoaded(container: Container): void {
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }
  async ngOnInit() {
    const locations = window.location.pathname.split('/');
    this.game = locations[locations.length-1] as Game;
    this.getHighscore();
  }

  getHighscore(): void {
    this.highscoreService.getAll(this.game)?.valueChanges().subscribe((data:Highscore[]) => {
      this.highscore = data;
    });
  }

  pickGame(game:Game){
    this.game=game;
    this.getHighscore();
    this.router.navigateByUrl('home/'+game);
  }

  handlePoll(open:boolean){
    if(open){
      const dialogRef = this.dialog.open(PollComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }

  onTabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    const chat:any = document.getElementById('app-message');
    chat.scrollTop = chat.scrollHeight;
  }
}
