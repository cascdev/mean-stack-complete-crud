import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contato } from './contato.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ContatosService {

    private baseUrl = 'http://localhost:3000/contatos';

    constructor ( private http: HttpClient ) {}



getContatos(){
  return this.http.get<Contato[]>(`${this.baseUrl}`)
}

addContato(contato: Contato): Observable<Contato>{

  return this.http.post<Contato>(this.baseUrl,contato,httpOptions)

}

upContato(contato: Contato){
  const _id = contato._id
  const url = `${this.baseUrl}/${_id}`;
return this.http.put(url, contato, httpOptions )

}

delContato(_id: string): Observable<Object>{
  return this.http.delete(`${this.baseUrl}/${_id}`, httpOptions)
}

getContatoPeloId(_id: string): Observable<Contato> {
  const url = `${this.baseUrl}/${_id}`;
  return this.http.get<Contato>(url);
}




///////Testes//////

// ok Funcionando perfeitamente - Uso com Promise
deleteTeste(contato: Contato) {
  const url = `${this.baseUrl}/${contato._id}`; // app/contatos/:id
  return this.http.delete(url, httpOptions)
  .toPromise()
  .then(() => contato as Contato)
  .catch(e => console.log(e))
}



// ok Funcionando perfeitamente - Para uso com observables
delContatoV2(contato: Contato){
  const url = `${this.baseUrl}/${contato._id}`;
  return this.http.delete(url, httpOptions)
}




}





/*
obterTodos(): Observable<Contato[]> {
  return this.http.get<Contato[]>(`${this.baseUrl}`)
}
obterTodoss(){
      return this.http.get<Contato[]>(`${this.baseUrl}`)
    }

    obterTodos(): Observable<Contato[]> {
      return this.http.get<Contato[]>(`${this.baseUrl}`)
    }

deletaContato (contato: Contato): Observable<Contato> {
  const url = `${this.baseUrl}/${contato._id}`;
  return this.http.delete<Contato>(url.toString(), httpOptions)
}
*/
