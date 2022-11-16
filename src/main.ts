import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './app/material-module';
import {NgbModule}  from '@ng-bootstrap/ng-bootstrap';
import {TableComponent} from './app/table/table.component';
import { SanitizedHtmlPipe } from './app/sanitized-html.pipe';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgbModule
  ],
  entryComponents: [TableComponent],
  declarations: [
    TableComponent,
    SanitizedHtmlPipe
  ],
  bootstrap: [TableComponent],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));