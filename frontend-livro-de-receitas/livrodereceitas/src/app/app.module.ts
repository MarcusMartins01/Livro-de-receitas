import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';





// Componentes do projeto
import { NavComponent } from './components/nav/nav.component';
import { ReceitasComponent } from './components/receitas/receitas.component';
import { MinhasReceitasComponent } from './components/minhas-receitas/minhas-receitas.component';
import { CotasComponent } from './components/cotas/cotas.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { TelainicialComponent } from './components/telainicial/telainicial.component';
import { ReceitasdoisComponent } from './components/receitasdois/receitasdois.component';
import { DegustadorComponent } from './degustador/degustador.component';
import { MenuComponent } from './degustador/menu/menu.component';
import { VisualizarReceitasComponent } from './degustador/visualizar-receitas/visualizar-receitas.component';
import { AvaliarReceitasComponent } from './degustador/avaliar-receitas/avaliar-receitas.component';
import { AlterarDadosComponent } from './degustador/alterar-dados/alterar-dados.component';
import { DegustacaoComponent } from './admin/degustacao/degustacao.component';
import { RelatoriosReceitasComponent } from './admin/relatorios-receitas/relatorios-receitas.component';
import { LivroComponent } from './admin/livro/livro.component';
import { RelatoriosLivroComponent } from './admin/relatorios-livro/relatorios-livro.component';
import { FuncionariosComponent } from './admin/funcionarios/funcionarios.component';
import { CargosComponent } from './admin/cargos/cargos.component';
import { RestaurantesComponent } from './admin/restaurantes/restaurantes.component';
import { RelatoriosFuncionariosComponent } from './admin/relatorios-funcionarios/relatorios-funcionarios.component';
import { AdminComponent } from './admin/admin.component';
import { MenuadminComponent } from './admin/menuadmin/menuadmin.component';
import { ReceitasadminComponent } from './admin/receitasadmin/receitasadmin.component';
import { EditorComponent } from './editor/editor.component';
import { PerfilUsuarioEditorComponent } from './editor/perfil-usuario-editor/perfil-usuario-editor.component';
import { MenuEditorComponent } from './editor/menu-editor/menu-editor.component';
import { ReceitasprontasComponent } from './editor/receitasprontas/receitasprontas.component';
import { ReceitasdolivroComponent } from './editor/receitasdolivro/receitasdolivro.component';
import { NovolivroComponent } from './editor/novolivro/novolivro.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { InserirCargoComponent } from './insercoes/inserir-cargo/inserir-cargo.component';
import { UpdateCargoComponent } from './updates/update-cargo/update-cargo.component';
import { InserirFuncionarioComponent } from './insercoes/funcionario/inserir-funcionario/inserir-funcionario.component';
import { UpdateFuncionarioComponent } from './updates/funcionario/update-funcionario/update-funcionario.component';
import { InserirReceitaComponent } from './insercoes/receita/inserir-receita/inserir-receita.component';
import { UpdateReceitaComponent } from './updates/receita/update-receita/update-receita.component';
import { InserirRestauranteComponent } from './insercoes/restaurante/inserir-restaurante/inserir-restaurante.component';
import { UpdateRestauranteComponent } from './updates/restaurante/update-restaurante/update-restaurante.component';
import { CategoriaComponent } from './admin/categoria/categoria.component';
import { InserirCategoriaComponent } from './insercoes/categoria/inserir-categoria/inserir-categoria.component';
import { RoleGuardComponent } from './role-guard/role-guard.component';
import { ReceitasIneditasComponent } from './relatorios-component/receitas-ineditas/receitas-ineditas.component';
import { UpdateCategoriaComponent } from './updates/categoria/update-categoria/update-categoria.component';
import { InserirDegustacaoComponent } from './insercoes/degustacao/inserir-degustacao/inserir-degustacao.component';
import { VisualizarDegustacaoComponent } from './visualizar/degustacao/visualizar-degustacao/visualizar-degustacao.component';
import { VisualizarDegustacoesComponent } from './admin/visualizar-degustacoes/visualizar-degustacoes.component';
import { UpdateDegustacaoComponent } from './updates/degustacao/update-degustacao/update-degustacao.component';
import { VisuReceitaComponent } from './visualizar/receita/visu-receita/visu-receita.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ReceitasComponent,
    MinhasReceitasComponent,
    CotasComponent,
    UsuarioComponent,
    LoginComponent,
    TelainicialComponent,
    ReceitasdoisComponent,
    DegustadorComponent,
    MenuComponent,
    VisualizarReceitasComponent,
    AvaliarReceitasComponent,
    AlterarDadosComponent,
    DegustacaoComponent,
    RelatoriosReceitasComponent,
    LivroComponent,
    RelatoriosLivroComponent,
    FuncionariosComponent,
    CargosComponent,
    RestaurantesComponent,
    RelatoriosFuncionariosComponent,
    AdminComponent,
    MenuadminComponent,
    ReceitasadminComponent,
    EditorComponent,
    PerfilUsuarioEditorComponent,
    MenuEditorComponent,
    ReceitasprontasComponent,
    ReceitasdolivroComponent,
    NovolivroComponent,
    InserirCargoComponent,
    UpdateCargoComponent,
    InserirFuncionarioComponent,
    UpdateFuncionarioComponent,
    InserirReceitaComponent,
    UpdateReceitaComponent,
    InserirRestauranteComponent,
    UpdateRestauranteComponent,
    CategoriaComponent,
    InserirCategoriaComponent,
    RoleGuardComponent,
    ReceitasIneditasComponent,
    UpdateCategoriaComponent,
    InserirDegustacaoComponent,
    VisualizarDegustacaoComponent,
    VisualizarDegustacoesComponent,
    UpdateDegustacaoComponent,
    VisuReceitaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatTreeModule,
    MatProgressBarModule,
    MatDialogModule,
    MatAutocompleteModule,

    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    })
    
   
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }