import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: Usuario = new Usuario
  confirmarSenha: string
  tipo: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipo = event.target.value
  }

  cadastrar(){
this.user.tipoUsuario = this.tipo
//console.log("user "+JSON.stringify(this.user))
//console.log("confirmar senha "+this.confirmarSenha)
if(this.user.senha!= this.confirmarSenha){
alert('Senhas divergentes!')
}else{
this.authService.cadastrar(this.user).subscribe((resp:Usuario) => {
  this.user=resp
  this.router.navigate(['/entrar'])
  alert('Usuário Cadastrado com Sucesso!')
}) 
}
  }

}
