import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TarefeiroComponent } from './tarefeiro/tarefeiro.component';
import { ShowTarefeiroComponent } from './tarefeiro/show-tarefeiro/show-tarefeiro.component';
import { AddEditTarefeiroComponent } from './tarefeiro/add-edit-tarefeiro/add-edit-tarefeiro.component';
import { TarefeiroApiService } from './tarefeiro-api.service';

@NgModule({
  declarations: [
    AppComponent,
    TarefeiroComponent,
    ShowTarefeiroComponent,
    AddEditTarefeiroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TarefeiroApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
