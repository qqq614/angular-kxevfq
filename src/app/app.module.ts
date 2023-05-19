import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AgGridModule } from 'ag-grid-angular';
import { ReusableGridTemplateComponent } from './reusable-grid-template/reusable-grid-template.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    AgGridModule.withComponents([]),
  ],
  declarations: [AppComponent, HelloComponent, ReusableGridTemplateComponent],
  bootstrap: [AppComponent],
  entryComponents: [ReusableGridTemplateComponent],
})
export class AppModule {}
