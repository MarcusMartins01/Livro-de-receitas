import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ReceitasComponent } from './components/receitas/receitas.component';
import { MinhasReceitasComponent } from './components/minhas-receitas/minhas-receitas.component';
import { CotasComponent } from './components/cotas/cotas.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';
import { TelainicialComponent } from './components/telainicial/telainicial.component';
import { ReceitasdoisComponent } from './components/receitasdois/receitasdois.component';
import { VisualizarReceitasComponent } from './degustador/visualizar-receitas/visualizar-receitas.component';
import { AvaliarReceitasComponent } from './degustador/avaliar-receitas/avaliar-receitas.component';
import { AlterarDadosComponent } from './degustador/alterar-dados/alterar-dados.component';
import { DegustacaoComponent } from './admin/degustacao/degustacao.component';
import { RelatoriosLivroComponent } from './admin/relatorios-livro/relatorios-livro.component';
import { LivroComponent } from './admin/livro/livro.component';
import { FuncionariosComponent } from './admin/funcionarios/funcionarios.component';
import { CargosComponent } from './admin/cargos/cargos.component';
import { RestaurantesComponent } from './admin/restaurantes/restaurantes.component';
import { RelatoriosFuncionariosComponent } from './admin/relatorios-funcionarios/relatorios-funcionarios.component';
import { MenuComponent } from './degustador/menu/menu.component';
import { MenuadminComponent } from './admin/menuadmin/menuadmin.component';
import { ReceitasadminComponent } from './admin/receitasadmin/receitasadmin.component';
import { RelatoriosReceitasComponent } from './admin/relatorios-receitas/relatorios-receitas.component';
import { MenuEditorComponent } from './editor/menu-editor/menu-editor.component';
import { PerfilUsuarioEditorComponent } from './editor/perfil-usuario-editor/perfil-usuario-editor.component';
import { ReceitasdolivroComponent } from './editor/receitasdolivro/receitasdolivro.component';
import { ReceitasprontasComponent } from './editor/receitasprontas/receitasprontas.component';
import { NovolivroComponent } from './editor/novolivro/novolivro.component';
import { InserirCargoComponent } from './insercoes/inserir-cargo/inserir-cargo.component';
import { UpdateCargoComponent } from './updates/update-cargo/update-cargo.component';
import { InserirFuncionarioComponent } from './insercoes/funcionario/inserir-funcionario/inserir-funcionario.component';
import { UpdateFuncionarioComponent } from './updates/funcionario/update-funcionario/update-funcionario.component';
import { InserirReceitaComponent } from './insercoes/receita/inserir-receita/inserir-receita.component';
import { UpdateReceitaComponent } from './updates/receita/update-receita/update-receita.component';
import { InserirRestauranteComponent } from './insercoes/restaurante/inserir-restaurante/inserir-restaurante.component';
import { UpdateRestauranteComponent } from './updates/restaurante/update-restaurante/update-restaurante.component';
import { CategoriaComponent } from './admin/categoria/categoria.component';
import { ReceitasIneditasComponent } from './relatorios-component/receitas-ineditas/receitas-ineditas.component';
import { VisualizarDegustacoesComponent } from './admin/visualizar-degustacoes/visualizar-degustacoes.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},  
  {
  
  path: 'cozinheiro', component: NavComponent, children: [
    { path: 'Home', component: TelainicialComponent },
    { path: 'Receitas', component:  MinhasReceitasComponent},
    { path: 'MinhasReceitas', component: ReceitasdoisComponent  }, 
    { path: 'VisualizarCotas', component: CotasComponent },
    { path: 'PerfilUsuário', component: UsuarioComponent },
  ]  },

  {path: 'degustador', component: MenuComponent, children: [
    { path: 'visualizar-receitas', component: VisualizarReceitasComponent },
    { path: 'avaliar-receitas', component: AvaliarReceitasComponent },
    { path: 'alterar-dados', component: AlterarDadosComponent },
  ],
},
{path: 'admin', component: MenuadminComponent ,
    children: [
      { path: 'receitasadmin', component: ReceitasadminComponent },
      { path: 'degustacao', component: DegustacaoComponent},
      { path: 'relatorios-receitas', component: RelatoriosReceitasComponent  },
      { path: 'livro', component: LivroComponent },
      { path: 'relatorios-livro', component: RelatoriosLivroComponent },
      { path: 'funcionarios', component: FuncionariosComponent },
      { path: 'cargos', component: CargosComponent },
      { path: 'restaurantes', component: RestaurantesComponent },
      { path: 'relatorios-funcionarios', component: RelatoriosFuncionariosComponent },
      { path: 'alterar-dados', component: AlterarDadosComponent },
      { path: 'categoria', component: CategoriaComponent },
      { path: 'visualizar-degustacoes', component: VisualizarDegustacoesComponent},
    ]
  },  

  {path: 'inserirCargo', component: InserirCargoComponent },
  { path: 'atualizarCargo/:id/update', component: UpdateCargoComponent },
  {path: 'inserirFuncionario', component: InserirFuncionarioComponent },
  { path: 'atualizarFuncionario/:id/update', component: UpdateFuncionarioComponent },
  {path: 'inserirReceita', component: InserirReceitaComponent },
  { path: 'atualizarReceita/:nome/:funcionario/update', component: UpdateReceitaComponent },
  {path: 'inserirRestaurante', component: InserirRestauranteComponent },
  { path: 'atualizarRestaurante/:id/update', component: UpdateRestauranteComponent },
  { path: 'receitasIneditas', component: ReceitasIneditasComponent },





  {path: 'editor', component: MenuEditorComponent ,
  children: [
    { path: 'perfil-usuario-editor', component: PerfilUsuarioEditorComponent  },
    {path: 'receitasdolivro', component: ReceitasdolivroComponent},
    {path:'receitasprontas', component: ReceitasprontasComponent},
    {path:'novolivro', component: NovolivroComponent},

    
  ]
  },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
