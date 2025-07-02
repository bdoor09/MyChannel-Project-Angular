import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SidbarComponent } from './sidbar/sidbar.component';
import { RouterModule } from '@angular/router';
import{HttpClientModule}from  '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FilterPipe } from '../pipes/filter.pipe';
import {MatTableModule} from '@angular/material/table';
import { DatereportfilterPipe } from '../pipes/datereportfilter.pipe';
import { ChaneelfiltterPipe } from '../pipes/chaneelfiltter.pipe';
import{DatePaymentReportPipe} from '../pipes/date-payment-report.pipe';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidbarComponent,
    FilterPipe,
    DatereportfilterPipe,
    ChaneelfiltterPipe,
    DatePaymentReportPipe
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    RouterModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,

  

  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    SidbarComponent,
    MatAutocompleteModule,
    RouterModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatButtonModule,
    FilterPipe,
    MatTableModule,
    DatereportfilterPipe,
    ChaneelfiltterPipe,
    DatePaymentReportPipe


  ]
})
export class SharedModule { }
