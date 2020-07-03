import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PropostaEstagioService {

  constructor(private http: HttpClient, private auth$: AuthService) { }

  cadastrar(proposta: any) {
    return this.http.post(environment.API_URL.concat('propostasestagio/'), proposta, this.auth$.httpOptions());
  }

  editar(proposta, id) {
    return this.http.put(environment.API_URL.concat('propostasestagio/${id}/'), proposta, this.auth$.httpOptions());
  }

  
  lista() {
    return this.http.get(environment.API_URL.concat('propostasestagio/'), this.auth$.httpOptions());
  }

  get(id) {
    return this.http.get(environment.API_URL.concat('propostasestagio/${id}/'), this.auth$.httpOptions());
  }


}