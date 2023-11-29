import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { SearchMarketComponent } from './search-market/search-market.component';
import { CreateModalComponent } from './create-modal/create-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchMarketComponent,
    CreateModalComponent,
    DeleteModalComponent,
    EditModalComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
