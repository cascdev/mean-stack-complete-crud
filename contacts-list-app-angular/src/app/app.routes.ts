import { RouterModule, Routes } from '@angular/router';
import { ContatosListaComponent } from './contatos/contatos-lista.component';
import { ContatoDetalheComponent } from './contatos/contato-detalhe.component';
import { ContatoAddComponent } from './contatos/contato-add.component';



const APP_ROUTES: Routes = [

    { path: 'contatos', component: ContatosListaComponent },
    { path: 'contato/detalhe', component: ContatoDetalheComponent},
    { path: 'contato/add', component: ContatoAddComponent},
    { path: 'contato/detalhe/:_id', component: ContatoDetalheComponent},
    { path: '', component: ContatosListaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'contatos' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

