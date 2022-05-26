import { Component, Input, OnInit } from '@angular/core';
import { Highscore } from 'src/app/models/highscore/highscore';
import { splitUserFromEmail } from '../../utils/utils';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {

  @Input() highscore: Highscore[]=[];
  constructor() {
  }
  
  ngOnInit(): void {
  }

  formatUser(user:string){
    return splitUserFromEmail(user);
  }

}
