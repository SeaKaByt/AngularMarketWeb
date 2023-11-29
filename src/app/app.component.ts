import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { CreateModalComponent } from './create-modal/create-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { MarketRecord } from './MarketRecord.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MarketApp';
  dialogConfig = new MatDialogConfig();
  createModalDialog: MatDialogRef<CreateModalComponent, any> | undefined;
  deleteModalDialog: MatDialogRef<DeleteModalComponent, any> | undefined;
  editModalDialog: MatDialogRef<EditModalComponent, any> | undefined;
  matDialog: MatDialog;

  constructor(matDialog: MatDialog) {
    this.matDialog = matDialog;
  }

  openCreateModal() {
    this.dialogConfig.id = "createModalComponent";
    this.dialogConfig.height = "500px";
    this.dialogConfig.width = "650px";
    this.createModalDialog = this.matDialog.open(CreateModalComponent, this.dialogConfig);
  }

  openDeleteModal() {
    this.dialogConfig.id = "deleteModalComponent";
    this.dialogConfig.height = "500px";
    this.dialogConfig.width = "650px";
    this.deleteModalDialog = this.matDialog.open(DeleteModalComponent, this.dialogConfig);
  }

  deleteEventReceiver(marketRecord: MarketRecord) {
    console.log("App: deleteEvent received");
    this.dialogConfig.id = "deleteModalComponent";
    this.dialogConfig.height = "500px";
    this.dialogConfig.width = "650px";
    this.deleteModalDialog = this.matDialog.open(DeleteModalComponent, this.dialogConfig);

    console.log("ID: " + marketRecord.mkid);
    console.log("Region_e: " + marketRecord.Region_e);
    console.log("District_e: " + marketRecord.District_e);
    console.log("Market_e: " + marketRecord.Market_e);
    console.log("Address_e: " + marketRecord.Address_e);

    this.deleteModalDialog.componentInstance.deleteMarketForm.controls['mkid'].setValue(marketRecord.mkid);
    this.deleteModalDialog.componentInstance.deleteMarketForm.controls['Region_e'].setValue(marketRecord.Region_e);
    this.deleteModalDialog.componentInstance.deleteMarketForm.controls['District_e'].setValue(marketRecord.District_e);
    this.deleteModalDialog.componentInstance.deleteMarketForm.controls['Market_e'].setValue(marketRecord.Market_e);
    this.deleteModalDialog.componentInstance.deleteMarketForm.controls['Address_e'].setValue(marketRecord.Address_e);
    this.deleteModalDialog.componentInstance.deleteMarketForm.controls['Business_Hours_e'].setValue(marketRecord.Business_Hours_e);
    this.deleteModalDialog.componentInstance.deleteMarketForm.controls['Coordinate'].setValue(marketRecord.Coordinate);
    this.deleteModalDialog.componentInstance.deleteMarketForm.controls['Contact_1'].setValue(marketRecord.Contact_1);
    this.deleteModalDialog.componentInstance.deleteMarketForm.controls['Contact_2'].setValue(marketRecord.Contact_2);
    this.deleteModalDialog.componentInstance.deleteMarketForm.controls['Tenancy_Commodity_e'].setValue(marketRecord.Tenancy_Commodity_e);
  }

  editEventReceiver(marketRecord: MarketRecord) {
    console.log("App: editEvent received");
    this.dialogConfig.id = "editModalComponent";
    this.dialogConfig.height = "500px";
    this.dialogConfig.width = "650px";
    this.editModalDialog = this.matDialog.open(EditModalComponent, this.dialogConfig);

    console.log("ID: " + marketRecord.mkid);
    console.log("Region_e: " + marketRecord.Region_e);
    console.log("District_e: " + marketRecord.District_e);
    console.log("Market_e: " + marketRecord.Market_e);
    console.log("Address_e: " + marketRecord.Address_e);

    this.editModalDialog.componentInstance.editMarketForm.controls['mkid'].setValue(marketRecord.mkid);
    this.editModalDialog.componentInstance.editMarketForm.controls['Region_e'].setValue(marketRecord.Region_e);
    this.editModalDialog.componentInstance.editMarketForm.controls['District_e'].setValue(marketRecord.District_e);
    this.editModalDialog.componentInstance.editMarketForm.controls['Market_e'].setValue(marketRecord.Market_e);
    this.editModalDialog.componentInstance.editMarketForm.controls['Address_e'].setValue(marketRecord.Address_e);
    this.editModalDialog.componentInstance.editMarketForm.controls['Business_Hours_e'].setValue(marketRecord.Business_Hours_e);
    this.editModalDialog.componentInstance.editMarketForm.controls['Coordinate'].setValue(marketRecord.Coordinate);
    this.editModalDialog.componentInstance.editMarketForm.controls['Contact_1'].setValue(marketRecord.Contact_1);
    this.editModalDialog.componentInstance.editMarketForm.controls['Contact_2'].setValue(marketRecord.Contact_2);
    this.editModalDialog.componentInstance.editMarketForm.controls['Tenancy_Commodity_e'].setValue(marketRecord.Tenancy_Commodity_e);
  }
}

 

