import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServicePersonajes } from '../../services/service.personajes';

@Component({
  selector: 'app-delete-component',
  standalone: false,
  styleUrl: './delete-component.css',
  templateUrl: './delete-component.html',
})
export class DeleteComponent implements OnInit {
  idpersonaje!: number
  mensaje!: string

  constructor(
    private _active: ActivatedRoute,
    private _service: ServicePersonajes,
    private _cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    this._active.params.subscribe(async(params: Params) => {
      let id = params['id'];
      this.idpersonaje = id;
      this._cdr.detectChanges();
    })
  }
  async eliminarPersonaje(): Promise<void> {
    await this._service.deletePersonajeAsync(this.idpersonaje)
    this.mensaje = "Personaje eliminado";
    this._cdr.detectChanges()
  }
}
