import { UsersModule } from './users/users/users.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StatusPipe } from './shared/status.pipe';
import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from './shared/star/star.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { MaxValueDirective } from './max-value.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    UsersModule,
    BrowserAnimationsModule,
    MatSliderModule

  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent], //LoginComponent,
})
export class AppModule {}
