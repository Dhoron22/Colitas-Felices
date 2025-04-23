import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-mascotas',
  standalone: false,

  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent {
  @Input() imagenUrl: string ='';
  @Input() nombre: string = '';
  @Input() edad: string = '';
  @Input() raza: string = '';
  @Input() caracteristicas: string = '';
}
