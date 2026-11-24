import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje';
import { ServicePersonajes } from '../../services/service.personajes';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit{
  arraypersonajes!: Personaje[]

  constructor(
    private _service: ServicePersonajes,
    private _cdr: ChangeDetectorRef
  ){}

  async ngOnInit(): Promise<void> {
    this.arraypersonajes = await this._service.getPersonajesAsync()
    this._cdr.detectChanges()
  }
}
