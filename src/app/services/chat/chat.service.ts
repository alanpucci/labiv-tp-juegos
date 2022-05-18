import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Message } from 'src/app/interface/message';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection?: AngularFirestoreCollection<any>;
  public chats: Message[] = [];
  public userLog: any = {};
  elements: any;

  constructor(private authService: LoginService,private afs: AngularFirestore) {
    this.authService.getAuth().subscribe(user => {
      if (user) {
        this.userLog.name = user.displayName;
        this.userLog.uid = user.uid;
        this.userLog.email = user.email;
      }

    });
    }

  loadMessages() {
    this.itemsCollection = this.afs.collection<Message>('chats', ref => ref.orderBy('date', 'desc').limit(10));
    return this.itemsCollection.valueChanges().subscribe(chats => {
      this.chats = [];
      for (let chat of chats) {
        this.chats.unshift(chat);
      }
      setTimeout(() => {
        this.elements = document.getElementById('app-message');
        console.log(this.elements);
        this.elements.scrollTop = this.elements.scrollHeight;

      }, 20);
    });
  }

  addMessage(message: string) {
    let newMessage: Message = {
      name: this.userLog.email,
      message: message,
      date: new Date().toLocaleString(),
      uid: this.userLog.uid,
      email: this.userLog.email
    };
    console.log(newMessage);
    return this.itemsCollection?.add(newMessage);
  }
}
