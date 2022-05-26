import { particlesConfig } from './../../utils/utils';
import { Component, OnInit } from '@angular/core';
import { loadFull } from 'tsparticles';
import { ClickMode, Container, Engine, HoverMode, MoveDirection, OutMode } from 'tsparticles-engine';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  id = "tsparticles";

  particlesOptions = particlesConfig

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
