import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { TreeModule } from 'angular-tree-component';
import { AppComponent } from './app.component';
import { EvenNumberComponent } from './even-number/even-number.component';
import { RoleAccessTreeComponent } from './role-access-tree/role-access-tree.component';


@NgModule({
  declarations: [
    AppComponent,
    EvenNumberComponent,
    RoleAccessTreeComponent
  ],
  imports: [
    BrowserModule,
    TreeModule
  ],
  schemas : [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
