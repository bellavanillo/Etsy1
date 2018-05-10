import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ListingsComponent,
    ListingDetailComponent,
    AddComponent,
    EditComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
