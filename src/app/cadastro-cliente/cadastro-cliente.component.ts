import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';  

class Cliente {
  constructor(
    public id: number,
    public nome: string,
    public email: string,
    public idade: number
  ) {}
}

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [FormsModule, CommonModule],  
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {
  id: number = 0;
  nome: string = '';
  email: string = '';
  idade: number = 0;

  clientes: Cliente[] = [];

  cadastrarCliente() {
    const novoCliente = new Cliente(this.id, this.nome, this.email, this.idade);
    this.clientes.push(novoCliente);

    
    this.id = 0;
    this.nome = '';
    this.email = '';
    this.idade = 0;

    
    console.log(novoCliente);
  }
}
