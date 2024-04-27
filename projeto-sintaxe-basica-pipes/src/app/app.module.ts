import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserStatusPipe } from './pipes/user-status.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { JsonComponent } from './components/json/json.component';
import { LowercaseComponent } from './components/lowercase/lowercase.component';
import { SliceComponent } from './components/slice/slice.component';
import { TitlecaseComponent } from './components/titlecase/titlecase.component';
import { UppercaseComponent } from './components/uppercase/uppercase.component';
import { HttpClientModule } from '@angular/common/http';

//* Sobreescrever o pipe padrão de data
import { DATE_PIPE_DEFAULT_OPTIONS, DatePipeConfig } from '@angular/common';

const datePipeConfig: DatePipeConfig = {
  dateFormat: 'dd/MM/yyyy',
  timezone: '+0000',
};


//* Importar e registrar o Locale
import  localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, } from '@angular/core';

registerLocaleData(localePt, 'pt-BR');

//* Sobreescrever o pipe currency
import { DEFAULT_CURRENCY_CODE } from '@angular/core';
import { ObsComObjetoComponent } from './components/obs-com-objeto/obs-com-objeto.component';
import { ObsComArrayComponent } from './components/obs-com-array/obs-com-array.component';
import { UserStatusImagePipe } from './pipes/user-status-image.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserStatusPipe,
    TruncatePipe,
    JsonComponent,
    LowercaseComponent,
    SliceComponent,
    TitlecaseComponent,
    UppercaseComponent,
    ObsComObjetoComponent,
    ObsComArrayComponent,
    UserStatusImagePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { datePipeConfig },
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
