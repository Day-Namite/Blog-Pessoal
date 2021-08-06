import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

  token ={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('http://localhost:8080/api/v1/tema/buscarTodos', this.token)
  }

  getByIdTema(idTema: number): Observable<Tema>{
    return this.http.get<Tema>(`http://localhost:8080/api/v1/tema/${idTema}`, this.token)
  }

  postTema(tema:Tema): Observable<Tema>{
    return this.http.post<Tema>('http://localhost:8080/api/v1/tema/Novo/Tema', tema, this.token)
  }

  putTema(tema:Tema,idTema:number): Observable<Tema>{
    return this.http.put<Tema>(`http://localhost:8080/api/v1/tema/${idTema}/Editar`, tema, this.token)
  }

  deleteTema (idTema: number){
    return this.http.delete(`http://localhost:8080/api/v1/tema/${idTema}/Deletar`, this.token)
  }
}
