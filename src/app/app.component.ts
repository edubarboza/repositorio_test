import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  persona = {nombre: 'Luis', edad: 20}

  title = 'hola a esta primera clase';

  rockbands = ['nirvana', 'los prisioneros', 'cass', 'aas'];
  rockBandName = '';
  botonStatus = false;
  isActive = true;

  personas : any = [];
  constructor(private usuarioService: UsuariosService){
    this.personas = usuarioService.getUsuarios();
  }

  miFormulario = new FormGroup({
    username: new FormControl('', Validators.required),
    userpassword: new FormControl('', Validators.required),
  });

  changeTitle() {
    this.title = 'nuevo titulo';
  }

  addRockBand() {
    this.rockbands.push(this.rockBandName);
    this.rockBandName = '';
  }

  onKeyUp(usuario) {
    console.log(usuario);
  }



}
