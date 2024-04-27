import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from './components/input-text/input-text.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { SelectComponent } from './components/select/select.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormComponent } from './components/form/form.component';
import { NgModelGroupComponent } from './components/ng-model-group/ng-model-group.component';
import { FormProfessionComponent } from './form-with-children/form-profession/form-profession.component';
import { FormUserComponent } from './form-with-children/form-user/form-user.component';
import { MainFormComponent } from './form-with-children/main-form/main-form.component';
import { CustomValidatorFormEx1Component } from './custom-validators/synchronous/ex1/custom-validator-form-ex1/custom-validator-form-ex1.component';
import { InvalidTextValidatorDirective } from './custom-validators/synchronous/ex1/directives/invalid-text-validator.directive';
import { CustomValidatorFormEx2Component } from './custom-validators/synchronous/ex2/custom-validator-form-ex2/custom-validator-form-ex2.component';
import { DepartmentQuantityValidatorDirective } from './custom-validators/synchronous/ex2/directives/department-quantity-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { UserNameValidatorDirective } from './custom-validators/asynchronous/directives/user-name-validator.directive';
import { AsyncCustomValidatorFormComponent } from './custom-validators/asynchronous/async-custom-validator-form/async-custom-validator-form.component';
import { StandaloneControlFormComponent } from './components/standalone-control-form/standalone-control-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    TextareaComponent,
    SelectComponent,
    RadioButtonComponent,
    CheckboxComponent,
    FormComponent,
    NgModelGroupComponent,
    FormProfessionComponent,
    FormUserComponent,
    MainFormComponent,
    CustomValidatorFormEx1Component,
    InvalidTextValidatorDirective,
    CustomValidatorFormEx2Component,
    DepartmentQuantityValidatorDirective,
    UserNameValidatorDirective,
    AsyncCustomValidatorFormComponent,
    StandaloneControlFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
