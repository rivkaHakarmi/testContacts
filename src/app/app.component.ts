import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/services/shared.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  data;
  dataJson = null;

  collapsedTitlesObj = [
    { title: "", component: "informationsCentralization", },
    { title: "", component: "contactsList", },
    { title: "", component: "contactsCentralization", }
  ];
  superForm: FormGroup = null;

  constructor(private sharedSrv: SharedService) {
  }

  ngOnInit() {
    this.sharedSrv.dataEvent.subscribe(data => {
      if (data) {
        this.dataJson = data;
        this.initialForm();
      }

    })
  }

  initialForm() {
    const form: any = {};

    this.collapsedTitlesObj.forEach(item => {
      form[item.component] = this.addFormArray(item.component);

    });

    this.superForm = new FormGroup(form);
  }

  addFormArray(form): FormGroup {
    const group: any = {};

    Object.keys(this.dataJson).forEach(elemnt => {
      if (this.dataJson[elemnt].form == form ) {
        debugger;
        let validation =[];
        if(this.dataJson[elemnt].validators)
        this.dataJson[elemnt].validators.forEach(valid=>{
          validation.push(Validators[valid])
        })

        group[this.dataJson[elemnt].field] = new FormControl('', validation);

      }
    });

    return new FormGroup(group);
  }

  reset(){
    this.dataJson["injuryType"].isActive=false;
    this.superForm.reset();
  }
}