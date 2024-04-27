import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from '../angular-material.module';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { UsersCardListComponent } from './users-card-list/users-card-list.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersBeforeAndAfterDialogComponent } from './users-before-and-after-dialog/users-before-and-after-dialog.component';



@NgModule({
  declarations: [
    UsersCardListComponent,
    UsersFormComponent,
    UsersBeforeAndAfterDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AngularMaterialModule,
    DirectivesModule,
    PipesModule,
  ],
  exports: [
    UsersCardListComponent,
    UsersFormComponent,
    UsersBeforeAndAfterDialogComponent,
  ],
})
export class ComponentsModule {}
