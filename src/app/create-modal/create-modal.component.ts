import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent {
  dialogRef: MatDialogRef<CreateModalComponent>;
  http: HttpClient;
  serverData!: Object | null;
  createBusForm: FormGroup;
  message: String = "Click the submit button to create"


  constructor(dialogRef: MatDialogRef<CreateModalComponent>, fb: FormBuilder, http: HttpClient) {
    this.dialogRef = dialogRef;
    this.http = http;
    this.serverData = null;

    this.createBusForm = fb.group(
      {
        'Region_e': ['', Validators.required],
        'District_e': ['', Validators.required],
        'Market_e': ['', Validators.required],
        'Address_e': ['', Validators.required],
        'Business_Hours_e': ['', Validators.required],
        'Coordinate': ['', Validators.required],
        'Contact_1': ['', Validators.required],
        'Contact_2': ['', Validators.required],
        'Tenancy_Commodity_e': ['', Validators.required]
      }
    );
  }


  closeModal() {
    this.dialogRef.close();
  }

  onSubmit(formValue: any): void {
    this.serverData = null;
    let url = "http://localhost/restServer/createMarket.php";

    console.log(formValue);
    console.log(url);

    this.http.post<any>(
      url,
      {
        Region_e: formValue['Region_e'],
        District_e: formValue['District_e'],
        Market_e: formValue['Market_e'],
        Address_e: formValue['Address_e'],
        Business_Hours_e: formValue['Business_Hours_e'],
        Coordinate: formValue['Coordinate'],
        Contact_1: formValue['Contact_1'],
        Contact_2: formValue['Contact_2'],
        Tenancy_Commodity_e: formValue['Tenancy_Commodity_e']
      }
    ).subscribe({
      next: (res) => {
        this.serverData = res;
        this.message = "Market Record created successfully"
        this.createBusForm.controls['Region_e'].setValue("");
        this.createBusForm.controls['District_e'].setValue("");
        this.createBusForm.controls['Market_e'].setValue("");
        this.createBusForm.controls['Address_e'].setValue("");
        this.createBusForm.controls['Business_Hours_e'].setValue("");
        this.createBusForm.controls['Coordinate'].setValue("");
        this.createBusForm.controls['Contact_1'].setValue("");
        this.createBusForm.controls['Contact_2'].setValue("");
        this.createBusForm.controls['Tenancy_Commodity_e'].setValue("");
      },
      error: (err) => {
        this.serverData = err;
      }
    });
  }

}
