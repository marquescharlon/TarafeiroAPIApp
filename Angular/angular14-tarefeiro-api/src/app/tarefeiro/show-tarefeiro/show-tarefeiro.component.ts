import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefeiroApiService } from 'src/app/tarefeiro-api.service';

@Component({
  selector: 'app-show-tarefeiro',
  templateUrl: './show-tarefeiro.component.html',
  styleUrls: ['./show-tarefeiro.component.css']
})
export class ShowTarefeiroComponent implements OnInit {

  tarefeiroList$!:Observable<any[]>;
  tarefeiroTiposList$!:Observable<any[]>;
  tarefeiroTiposList:any=[];

  // Map para mostrar a associação entre as tabelas (FK)
  tarefeiroTiposMap:Map<number, string> = new Map();

  constructor(private service:TarefeiroApiService) { }

  ngOnInit(): void {
    this.tarefeiroList$ = this.service.getTarefaList();
    this.tarefeiroTiposList$ = this.service.getTarefaTiposList();
    this.refreshTarefeiroTiposMap();
  }

  // Variável (propriedades)

  modalTitle:string = '';
  activateAddEditTarefeiroComponent:boolean = false;
  tarefeiro:any;

  modalAdd(){
    this.tarefeiro = {
      id:0,
      status:null,
      comentario:null,
      tarefaTipoId:null
    }
    this.modalTitle = "Nova Tarefa"
    this.activateAddEditTarefeiroComponent = true;
  }

  modalEdit(item:any){
    this.tarefeiro = item;
    this.modalTitle = "Alteração da tarefa";
    this.activateAddEditTarefeiroComponent = true;
  }

  // delete(item:any){
  //   if(confirm(`Você tem certeza que quer deletar a tarefa ${item.id}?`)){
  //     this.service.deleteTarefa(id).subscribe(res => {
  //       var closeModalBtn = document.getElementById('add-edit-modal-close');
  //       if(closeModalBtn){
  //         closeModalBtn.click();
  //       }
  //       var showDeleteSuccess = document.getElementById('delete-success-alert');
  //       if(showDeleteSuccess){
  //         showDeleteSuccess.style.display = "block";
  //       }
  //       setTimeout(function(){
  //         if(showDeleteSuccess){
  //           showDeleteSuccess.style.display = "none";
  //         }
  //       },4000);
  //   }

  modalClose(){
    this.activateAddEditTarefeiroComponent = false;
    this.tarefeiroList$ = this.service.getTarefaList();
  }


  refreshTarefeiroTiposMap(){
    this.service.getTarefaTiposList().subscribe(data => {
      this.tarefeiroTiposList = data;

      for(let i = 0; i < data.length; i++){
        this.tarefeiroTiposMap.set(
          this.tarefeiroTiposList[i].id, 
          this.tarefeiroTiposList[i].tarefaNome
        )
      }
    })
  }

}
