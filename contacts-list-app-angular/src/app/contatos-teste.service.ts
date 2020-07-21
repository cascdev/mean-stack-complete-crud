import { Injectable } from '@angular/core';

//////////////////////////
export interface Contato {
  _id: number;
  name: string;
  email: string;
  phone: string;
  }
/////////////////////////


@Injectable()
export class ContatosTesteService {

  public contatos: Contato[] = [

    {_id: 1, name: 'Fulano de Tal', email: 'fulano@email.com', phone: '(00) 0000-0000'},
    {_id: 2, name: 'Ciclano', email: 'ciclano@email.com', phone: '(11) 1111-1111'},
    {_id: 3, name: 'Escatamaquio', email: 'escatamaquio@email.com', phone: '(22) 2222-2222'},
    {_id: 4, name: 'Seu madruga', email: 'madruga@email.com', phone: '(33) 3333-3333'},
    {_id: 5, name: 'Bob Esponja', email: 'bob@email.com', phone: '(44) 4444-4444'},

  ];


  constructor(){}

  testeGetAll(): Contato[] {
  return this.contatos
  }

}
