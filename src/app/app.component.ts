import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notification-fmc';
  token: any;



  constructor(private afMessaging: AngularFireMessaging) {}

  requestPermission() {
    this.afMessaging.requestToken.subscribe(
      (token) => {
        console.log('Permission granted! Save to the server!', token);
        this.token = token;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteToken() {
    this.afMessaging.deleteToken(this.token).subscribe((token) => {
      console.log('Token deleted!');
    });
  }

  listen() {
    this.afMessaging.messages.subscribe((message) => {
      console.log(message);
      //lógica aqui
    });
  }


}
