import { Component } from '@angular/core';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CadastroClienteComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atividade 3';
}
