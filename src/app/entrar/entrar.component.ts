import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin

  constructor(
    private auth: AuthService,
    private route: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }
  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.usuario = this.usuarioLogin.usuario
      environment.id = this.usuarioLogin.idLog
      environment.foto = this.usuarioLogin.foto

      /*console.log(environment.token)
      console.log(environment.usuario)
      console.log(environment.id)
      console.log(environment.foto)*/

      this.route.navigate(['/inicio'])
    }, erro =>{
      if(erro.status == 500){
        alert('Usuário ou senha incorretos!')
      }
    })

  }

}
