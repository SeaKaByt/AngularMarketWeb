import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
  dialogRef: MatDialogRef<EditModalComponent>;
  http: HttpClient;
  serverData!: Object | null;
  editMarketForm: FormGroup;
  message: String = "Click the submit button to save the changes"

  constructor(dialogRef: MatDialogRef<EditModalComponent>, fb: FormBuilder, http: HttpClient) {
    this.dialogRef = dialogRef;
    this.http = http;
    this.serverData = null;

    this.editMarketForm = fb.group(
      {
        'mkid': ['', Validators.required],
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
    console.log("Update: " + formValue['mkid']);
    this.serverData = null;
    let url = "http://localhost/restServer/updateMarket.php?";
    console.log(url);

    this.http.put(
      url,
      {
        ID: formValue['mkid'],
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
        console.log("Server returns: " + res);
        this.serverData = res;
        this.message = "Market Record ID : '" + formValue['mkid'] + "'  updated successfully";
      },
      error: (err) => {
        this.serverData = err;
        console.log("Server returns (error): " + err);
        this.serverData = err.error.status + " " + err.error.errcode + " : " + err.error.errmsg;
      }
    });
  }

}
