import { Component, Input } from '@angular/core';
import { DbzModule } from '../dbz.module';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  constructor(private dbzService: DbzService){}
  //@Input() personajes: Personaje[] = [];
  get personajes() {
    return this.dbzService.personajes;
  }
}
