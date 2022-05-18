import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message: string = "";

  constructor(public chatService: ChatService) {
  }
  
  ngOnInit(): void {
    this.chatService.loadMessages();
  }

  sendMessage() {
    if (this.message.length > 0) {
      this.chatService.addMessage(this.message)?.then(() => { console.log('Message sent') }).catch(() => { console.log('Error sending message') }).finally(() => { this.message = '' });
    }
  }

  splitUserFromEmail = (email:string) => {
    const emailUser = email.split('@')[0];
    return emailUser.charAt(0).toUpperCase() + emailUser.slice(1)
  }

}
