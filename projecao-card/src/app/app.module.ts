import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardContentDirective } from './components/card/directives/base/card-content.directive';
import { CardHeaderDirective } from './components/card/directives/base/card-header.directive';
import { CardMainTextDirective } from './components/card/directives/texts/card-main-text.directive';
import { CardSubTextDirective } from './components/card/directives/texts/card-sub-text.directive';
import { CardDescriptionTextDirective } from './components/card/directives/texts/card-description-text.directive';
import { CardSmallImageDirective } from './components/card/directives/images/card-small-image.directive';
import { CardLargeImageDirective } from './components/card/directives/images/card-large-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardHeaderDirective,
    CardContentDirective,
    CardMainTextDirective,
    CardSubTextDirective,
    CardDescriptionTextDirective,
    CardSmallImageDirective,
    CardLargeImageDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
