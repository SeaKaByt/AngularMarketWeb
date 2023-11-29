import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {
  dialogRef: MatDialogRef<DeleteModalComponent>;
  http: HttpClient;
  serverData!: Object | null;
  deleteMarketForm: FormGroup;
  message: String = "Click the submit button to delete"

  constructor(dialogRef: MatDialogRef<DeleteModalComponent>, fb: FormBuilder, http: HttpClient) {
    this.dialogRef = dialogRef;
    this.http = http;
    this.serverData = null;

    this.deleteMarketForm = fb.group(
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
    console.log("Delete: " + formValue['mkid']);
    this.serverData = null;
    let url = "http://localhost/restServer/deleteMarket.php?mkid=" + formValue['mkid'];
    console.log(url);
    this.http.delete(
      url
    ).subscribe({
      next: (res) => {
        this.serverData = res;
        this.message = "Market Record: " + formValue['mkid'] + " deleted successfully"
        this.deleteMarketForm.controls['mkid'].setValue("");
      },
      error: (err) => {
        this.serverData = err
      }
    });
  }

}
