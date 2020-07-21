import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../contato.service';
import { Contato } from '../contato.model';


@Component({
  selector: 'contatos-lista',
  templateUrl: 'contatos-lista.component.html',
  styleUrls: ["./contatos-lista.component.css"]
})
export class ContatosListaComponent implements OnInit {

  contatos: Contato[];
  contato: Contato;

  constructor( public contatosService: ContatosService ) { }

  ngOnInit() {
    this.listar();

  }

  listar() {
    return this.contatosService.getContatos()
            .subscribe( contatos => this.contatos = contatos )
  }

  deletarContato(c: Contato){
    this.contato = c;
    let id = c._id

    return this.contatosService.delContato(id).subscribe( )

  }



//////////Delete Teste para atualizar a listagem dos  contatos na tela////


  /********Funcionando OK - Usando com Promise***********/
  onDelete(contato: Contato): void {
    this.contato = contato;

    this.contatosService.deleteTeste(contato)
      .then(() => this.contatos = this.contatos.filter((c: Contato) => c._id != contato._id))
      .catch(e => console.log(e))
}
/*********************************/



deletarContatoV2(contato: Contato){
  this.contato = contato;

  this.contatosService.delContatoV2(contato)
   .subscribe(() => this.contatos = this.contatos.filter((c: Contato) => c._id != contato._id))
}










/* Usado p testar se o botão estava recebendo a varável local do template
  logContato(c: Contato){
    this.contato = c;
    console.log(c)
  }
*/




}





/*constructor( public contatosService: ContatosService ) { }

  ngOnInit() {
    this.listar();

  }

  listar() {
    return this.contatosService.obterTodos()
            .subscribe( contatos => this.contatos = contatos )
  }

   listar() {
    return this.contatosService.obterTodos()
            .subscribe( contatos => this.contatos = contatos )
  }

  listarr(){
    return this.contatosService.obterTodoss()
               .subscribe( contatos => this.contatos = contatos )
  }

}*/
