import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemDiretivaComponent } from './components/sem-diretiva/sem-diretiva.component';
import { ComDiretivaComponent } from './components/com-diretiva/com-diretiva.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DisabledDirective } from './directives/disabled.directive';
import { StyleDirective } from './directives/style.directive';
import { ClassDirective } from './directives/class.directive';
import { ListenerDirective } from './directives/listener.directive';
import { InputBackgroundDirective } from './directives/input-background.directive';
import { FocusSecondInputDirective } from './directives/focus-second-input.directive';
import { XssComponent } from './components/xss/xss.component';

@NgModule({
  declarations: [
    AppComponent,
    SemDiretivaComponent,
    ComDiretivaComponent,
    HighlightDirective,
    DisabledDirective,
    StyleDirective,
    ClassDirective,
    ListenerDirective,
    InputBackgroundDirective,
    FocusSecondInputDirective,
    XssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
