import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MarketRecord } from '../MarketRecord.model';

@Component({
  selector: 'app-search-market',
  templateUrl: './search-market.component.html',
  styleUrls: ['./search-market.component.css']
})
export class SearchMarketComponent {
  @Input() public searchType!: string;
  @Output() deleteEvent = new EventEmitter<MarketRecord>();
  searchMarketForm: FormGroup;
  http: HttpClient;
  serverData!: Object | null;
  serverDataArr!: any;

  marketRecord: MarketRecord = {
    mkid: "",
    Region_e: "",
    District_e: "",
    Market_e: "",
    Address_e: "",
    Business_Hours_e: "",
    Coordinate: "",
    Contact_1: "",
    Contact_2: "",
    Tenancy_Commodity_e: "",
  }


  constructor(fb: FormBuilder, http: HttpClient) {
    this.http = http;
    this.searchMarketForm = fb.group({
      'searchKey': ['', Validators.required]
    })
  }

  onSubmit(formValue: any): void {
    console.log(formValue);
    this.serverData = null;
    let url = "http://localhost/restServer/index.php/market/";
    url += this.searchType + "_e/";
    url += formValue['searchKey']
    console.log(url);

    this.http.get(url).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.serverData = res;
          this.serverDataArr = JSON.parse(JSON.stringify(res));
        },
        error: (err) => {
          console.log(err);
          this.serverData = err;
        }
      }
    );
  }

  deleteButtonHandler(mkid: string) {
    console.log(mkid);

    for (let market of this.serverDataArr) {
      if (mkid === market.ID) {
        this.marketRecord.mkid = market.ID;
        this.marketRecord.District_e = market.District_e;
        this.marketRecord.Market_e = market.Market_e;
        this.marketRecord.Address_e = market.Address_e;
        this.marketRecord.Business_Hours_e = market.Business_Hours_e;
        this.marketRecord.Coordinate = market.Coordinate;
        this.marketRecord.Contact_1 = market.Contact_1;
        this.marketRecord.Contact_2 = market.Contact_2;
        this.marketRecord.Tenancy_Commodity_e = market.Tenancy_Commodity_e;
      }
    }

    this.deleteEvent.emit(this.marketRecord);
  }

  @Output() editEvent = new EventEmitter<MarketRecord>();

  editButtonHandler(mkid: any) {
    console.log(mkid);

    for (let market of this.serverDataArr) {
      if (mkid === market.ID) {
        this.marketRecord.mkid = market.ID;
        this.marketRecord.Region_e = market.Region_e;
        this.marketRecord.District_e = market.District_e;
        this.marketRecord.Market_e = market.Market_e;
        this.marketRecord.Address_e = market.Address_e;
        this.marketRecord.Business_Hours_e = market.Business_Hours_e;
        this.marketRecord.Coordinate = market.Coordinate;
        this.marketRecord.Contact_1 = market.Contact_1;
        this.marketRecord.Contact_2 = market.Contact_2;
        this.marketRecord.Tenancy_Commodity_e = market.Tenancy_Commodity_e;
      }
    }

    this.editEvent.emit(this.marketRecord);
  }
}
