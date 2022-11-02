import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { CityService } from '../../shared/services/city.service';
import { City } from '../../shared/models/city.model';
import { JsonpCallbackContext } from '@angular/common/http/src/jsonp';
import { StudentService } from '../../shared/services/student.service';
import { Student } from '../../shared/models/student.model';
import { ValidationService } from 'src/app/shared/services/validation.service';
import swal from 'sweetalert';




@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.css']
})
export class InsertStudentComponent implements OnInit {

  insertStudentForm: FormGroup;
  cities: City[] = new Array<City>();
  cityId: number;

  constructor(private cityService: CityService, private formBuildar: FormBuilder,
    private studentService: StudentService) {
  }
  ngOnInit() {
    this.getCities();
    this.createForm();
  }

  createForm() {
    this.insertStudentForm = this.formBuildar.group({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(20), ValidationService.hebrewValidator]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(20), ValidationService.emailValidator]),
      dateOfBirth: new FormControl('', [Validators.required]),
      israeliId: new FormControl('', [Validators.required, ValidationService.phoneNumberValidator]),
      city: new FormControl('', Validators.required),

    });
  }

  getCities() {
    this.cityService.getCities().subscribe(cities => {
      this.cities = cities;
      console.log(this.cities);
    }, (error) => {
      console.log(error);
      swal({
        title: "שגיאה",
        text: "טעינת רשימת הערים נכשלה",
        icon: "error",
        buttons: [false],
        closeOnClickOutside : true


      });
    }
    );


  }

  insertStudent() {
    let student: Student = new Student();
    student.CityId = this.insertStudentForm.controls["city"].value;
    student.DateOfBirth = this.insertStudentForm.get("dateOfBirth").value;
    student.FirstName = this.insertStudentForm.get("firstName").value;
    student.LastName = this.insertStudentForm.get("lastName").value;
    student.IsraeliId = this.insertStudentForm.get("israeliId").value;


    this.studentService.insertStudent(student).
      subscribe(() => {
        this.createForm();
        
        swal({
          title: "",
          text: "תלמיד חדש נוסף בהצלחה",
          icon: "success",
          buttons: [false],
          closeOnClickOutside : true

        });
      }, (error) => {
        console.log(error);
        swal({
          title: "שגיאה",
          text: "הזנת נתוני התלמיד נכשלה",
          icon: "error",
          buttons: [false],
          closeOnClickOutside : true


        });
      });


  }


}
