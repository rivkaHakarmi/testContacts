import { Component, OnInit } from '@angular/core';
import { Student } from '../../shared/models/student.model';
import { StudentService } from '../../shared/services/student.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {

  students = new Array<Student>();

  constructor(private studentService :StudentService) { }

  ngOnInit() {

    this.studentService.getStudents().
    subscribe((students)=> this.students = students), (error) => {
      console.log(error);
      swal({
        title: "שגיאה",
        text: "טעינת רשימת התלמידים נכשלה",
        icon: "error",
        buttons: [false],
        closeOnClickOutside : true


      });
    }
  }

}
