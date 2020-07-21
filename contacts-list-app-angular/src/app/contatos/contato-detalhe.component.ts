import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../contato.service';
import { Contato } from '../contato.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
    selector:'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'
})
export class ContatoDetalheComponent implements OnInit {

contato: Contato;
submitted = false;
id: string;

constructor (
  public contatosService: ContatosService,
  public route: ActivatedRoute,
  public location: Location
  ){}

  ngOnInit(){
    this.contato = new Contato('', '', '');
    this.id = this.route.snapshot.params._id;
    this.recupContato(this.id);
    console.log(this.id)
  }




  atualizaContato(contat: Contato){
    contat = this.contato
    return this.contatosService.upContato(contat).subscribe(() => this.goBack())
  }
  deletaContato(_id: string){
    _id = this.id
    this.contatosService.delContato(_id)
      .subscribe()
    this.location.back()
  }

  // Este Método retorna um contato pelo id passado na rota do navegador
  // Assim, este contato pode ser atualizado ou mesmo deletado
  recupContato(_id: string){
    _id = this.id
    return this.contatosService.getContatoPeloId(_id)
    .subscribe(
    res => this.contato = res)
  }
  goBack(): void {
    this.location.back();
  }






/*
logContato(){
 console.log(this.contato);
}*/
}
