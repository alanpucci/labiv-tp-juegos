import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HighscoreService } from 'src/app/services/highscore/highscore.service';
import { FLAGS } from 'src/app/utils/utils';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {
  beginGame=false;
  flagImage:any;
  flags:string[]=[]
  correctFlag:string="";
  score=0;
  lives=3;

  constructor(
    private http: HttpClient,
    private highscoreService:HighscoreService
  ) { }

  ngOnInit(): void {
    this.getFlag();
  }

  start(){
    this.score=0;
    this.lives=3;
    this.beginGame=true;
  }

  shuffle(){
    let currentIndex = this.flags.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [this.flags[currentIndex], this.flags[randomIndex]] = [
        this.flags[randomIndex], this.flags[currentIndex]];
    }
  }

  getFlag(){
    this.flags = [];
    const choosenFlag = FLAGS[Math.floor(Math.random() * FLAGS.length)];
    this.flags.push(choosenFlag)
    this.correctFlag=choosenFlag;
    let incorrectFlag
    while (this.flags.length<4) {
      do{
        incorrectFlag = FLAGS[Math.floor(Math.random() * FLAGS.length)];
      }while(choosenFlag===incorrectFlag);
      this.flags.push(incorrectFlag)
    }
    this.shuffle();
    this.http.get("http://countryflagsapi.com/png/"+choosenFlag, { responseType: 'blob' }).subscribe((data:Blob) => {
      this.createImageFromBlob(data);
    });
  }

  async answer(flag:string){
    if(flag === this.correctFlag){
      this.getFlag();
      this.score+=10;
    }else{
      this.lives--;
      if(this.lives===0){
        await this.highscoreService.registerScore(this.score, "preguntados");
        this.score=0;
        this.beginGame=false;
      }
    }
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.flagImage = reader.result;
    }, false);
    if (image) {
       reader.readAsDataURL(image);
    }
 }

}
