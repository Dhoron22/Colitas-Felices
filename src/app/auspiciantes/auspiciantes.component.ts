import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-auspiciantes',
  standalone: false,

  templateUrl: './auspiciantes.component.html',
  styleUrl: './auspiciantes.component.css'
})
export class AuspiciantesComponent {
  @Input() auspicianteUrl:string='';
  @Input() nombre_auspiciante:string='';
}
