import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PageStudentListComponent } from './pages/page-student-list/page-student-list.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageWidloComponent } from './pages/page-widlo/page-widlo.component';
import { CardPlanComponent } from './pages/components/card-plan/card-plan.component';
import { CardDoingComponent } from './pages/components/card-doing/card-doing.component';
import { CardDoneComponent } from './pages/components/card-done/card-done.component';
import { WidloNavbarComponent } from './pages/components/widlo-navbar/widlo-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PageStudentListComponent,
    PageWidloComponent,
    CardPlanComponent,
    CardDoingComponent,
    CardDoneComponent,
    WidloNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
