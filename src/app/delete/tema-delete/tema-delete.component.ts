import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {


  tema : Tema = new Tema()
  IdTema: number

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
  }

  this.IdTema = this.route.snapshot.params['id']
    this.findByIdTema(this.IdTema)
}
findByIdTema(idTema: number){
  this.temaService.getByIdTema(idTema).subscribe((resp: Tema)=>{
    this.tema = resp
  })

}

apagar(){
  this.temaService.deleteTema(this.IdTema).subscribe(()=>{
    alert('Tema deletado com sucesso!')
    this.router.navigate(['/tema'])
  })
}

}
