import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { AppComponent } from './app.component';
import { config } from 'src/enviroment/enviroment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireMessagingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
