import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Ex1Component } from './components/ex1/ex1.component';
import { Ex2Component } from './components/ex2/ex2.component';
import { EmailValidatorDirective } from './components/ex2/directives/email-validator.directive';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomErrorStateMatcher } from './components/ex2/utils/custom-error-state-matcher';

@NgModule({
  declarations: [AppComponent, Ex1Component, Ex2Component, EmailValidatorDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [provideAnimationsAsync(), {provide: ErrorStateMatcher, useClass: CustomErrorStateMatcher}],
  bootstrap: [AppComponent],
})
export class AppModule {}
