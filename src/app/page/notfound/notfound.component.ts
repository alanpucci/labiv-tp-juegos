import { Component, OnInit } from '@angular/core';
import { particlesConfig } from 'src/app/utils/utils';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  id = "tsparticles";

  particlesOptions = particlesConfig
  constructor() { }

  ngOnInit(): void {
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }

}
