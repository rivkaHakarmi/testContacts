import { Injectable } from "@angular/core";
import { insured } from "../models/insurted.modal";
import { ValidationService } from "./validation.service";
import { HttpClient } from "@angular/common/http";
import { Subject, BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public dataEvent: Subject<any> = new Subject<any>();
  private contactsList: BehaviorSubject<any> = null;
  public data;
  public insured:insured=new insured("מריה גין","מבוטח","5765757657","אחוזה, רעננה",35,"0897675645","adsdsd@fyg.com",false,true);

  constructor(private httpClient: HttpClient) {

    this.httpClient.get("../assets/data.json").subscribe(data => {
      this.dataEvent.next(data);
      this.data = data;
    })
  }

  getcontactsList(): Observable<any> {
    return this.contactsList.asObservable();
  }

  setcontactsList(contact) {
    this.contactsList.next(contact);
  }

}