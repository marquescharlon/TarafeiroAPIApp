import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefeiroApiService {

  readonly tarefeiroAPIUrl = "https://localhost:7041/api";

  constructor(private http:HttpClient) { }

  // Tarefa

  getTarefaList():Observable<any[]>{
    return this.http.get<any>(this.tarefeiroAPIUrl + '/tarefas');
  }

  addTarefa(data:any){
    return this.http.post(this.tarefeiroAPIUrl + '/tarefas', data);
  }

  updateTarefa(id:number|string, data:any){
    return this.http.put(this.tarefeiroAPIUrl + `/taferas/${id}`, data);
  }

  deleteTarefa(id:number|string){
    return this.http.delete(this.tarefeiroAPIUrl + `/tarefas/${id}`);
  }

  // Tarefa Tipos

  getTarefaTipoList():Observable<any[]>{
    return this.http.get<any>(this.tarefeiroAPIUrl + '/tarefaTipos');
  }

  addTarefaTipo(data:any){
    return this.http.post(this.tarefeiroAPIUrl + '/tarefaTipos', data);
  }

  updateTarefaTipos(id:number|string, data:any){
    return this.http.put(this.tarefeiroAPIUrl + `/tarefaTipos/${id}`, data);
  }

  deleteTarefaTipos(id:number|string){
    return this.http.delete(this.tarefeiroAPIUrl + `/tarefaTipos/${id}`);
  }

  // Status

  getStatusList():Observable<any[]>{
    return this.http.get<any>(this.tarefeiroAPIUrl + '/status');
  }

  addStatus(data:any){
    return this.http.post(this.tarefeiroAPIUrl + '/status', data)
  }

  updateStatus(id:number|string, data:any){
    return this.http.put(this.tarefeiroAPIUrl + `/status/${id}`, data);
  }

  deleteStatus(id:number|string){
    return this.http.delete(this.tarefeiroAPIUrl + `/status/${id}`);
  }


}
