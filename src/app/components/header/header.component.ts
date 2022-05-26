import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() openPoll= new EventEmitter<boolean>();
  constructor(private auth:LoginService) { }

  ngOnInit(): void {
  }

  signOut(){
    this.auth.logout();
  }

  handlePoll(){
    this.openPoll.emit(true);
  }
}
