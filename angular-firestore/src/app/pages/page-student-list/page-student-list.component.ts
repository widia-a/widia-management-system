import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/interfaces/i-student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-page-student-list',
  templateUrl: './page-student-list.component.html',
  styleUrls: ['./page-student-list.component.css']
})
export class PageStudentListComponent implements OnInit {
  student: IStudent = {} as IStudent;
  students: Array<IStudent> = [];

  constructor(
    private studentService : StudentService
  ) { }

  ngOnInit(): void {
    this.onAllStudent();
  }

  // onCreateStudent(){
  //   // this.student.age=10;
  //   // this.student.firstName="adi";
  //   // this.student.lastName="jiopnhu";

  //   this.studentService.create(this.student).then((data: any) => {
  //     console.log(data);
  //   })
  //   .catch((err: any) => {
  //     console.log(err);
      
  //   })
  // }

  async onCreateStudent(){
    try{
      await this.studentService.create(this.student);
      this.student = {} as IStudent;
    }catch (e:any){
      console.log(e);
    }
  }

  onAllStudent(){
    this.studentService.all().subscribe(
      (data: any) => {
        
        this.students = data.map((e: any) => {
          return{
            id: e.payload.doc.id,
            age: e.payload.doc.data()['age'],
            firstName: e.payload.doc.data()['firstName'],
            lastName: e.payload.doc.data()['lastName']
          } as IStudent;
        })
      }
    )
  }

  onUpdateStudent(id: string, student:IStudent){
    this.studentService.update(id, student)
  }

  onDeleteStudent(id: string){
    this.studentService.delete(id);
  }

}
