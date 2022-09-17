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
  }

}
