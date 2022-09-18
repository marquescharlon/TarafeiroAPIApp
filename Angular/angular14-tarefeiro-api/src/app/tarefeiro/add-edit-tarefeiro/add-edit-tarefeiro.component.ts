import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefeiroApiService } from 'src/app/tarefeiro-api.service';

@Component({
  selector: 'app-add-edit-tarefeiro',
  templateUrl: './add-edit-tarefeiro.component.html',
  styleUrls: ['./add-edit-tarefeiro.component.css']
})
export class AddEditTarefeiroComponent implements OnInit {

  tarefaList$!:Observable<any[]>;
  statusList$!:Observable<any[]>;
  tarefaTipoList$!:Observable<any[]>;

  constructor(private service:TarefeiroApiService) { }

  @Input() tarefa:any;
  id:number = 0;
  status: string = "";
  comentario: string = "";
  tarefaTipoId!: number;

  ngOnInit(): void {
    this.id = this.tarefa.id;
    this.status = this.tarefa.status;
    this.comentario = this.tarefa.comentario;
    this.tarefaTipoId = this.tarefa.tarefaTipoId;
    this.statusList$ = this.service.getStatusList();
    this.tarefaList$ = this.service.getTarefaList();
    this.tarefaTipoList$ = this.service.getTarefaTiposList();
  }

  addTarefa(){
    var tarefa = {
      status:this.status,
      comentario:this.comentario,
      tarefaTipoId:this.tarefaTipoId
    }
    this.service.addTarefa(tarefa).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display = "none";
        }
      },4000)
    })

  }

  updateTarefa(){

  }

}
