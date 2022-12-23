import { Component, OnInit } from '@angular/core';
import { DOING, DONE, IWidlo, PLAN } from 'src/app/interfaces/i-widlo';
import { WidloService } from 'src/app/services/widlo.service';

@Component({
  selector: 'app-card-done',
  templateUrl: './card-done.component.html',
  styleUrls: ['./card-done.component.css']
})
export class CardDoneComponent implements OnInit {
  tasks: IWidlo[] = [];
  statusDoing : string = DOING;
  statusDone : string = DONE;
  statusPlan : string = PLAN;

  constructor(
    private widloService: WidloService
  ) { }

  ngOnInit(): void {
    this.onAll();
  }

  onAll(){
    this.widloService.all(DONE).subscribe(
      (data: any) => {
        
        this.tasks = data.map((e: any) => {
          return{
            id: e.payload.doc.id,
            title: e.payload.doc.data()['title'],
            description: e.payload.doc.data()['description'],
            status: e.payload.doc.data()['status']
          } as IWidlo;
        })
      }
    )
  }

  onUpdate(id: string, task: IWidlo){
    this.widloService.update(id, task);
  }

  onDelete(id: string){
    this.widloService.delete(id);
  }


  

}
