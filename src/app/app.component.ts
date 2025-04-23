import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Colitas_Felices';

  mascotas = [
    {
      imagenUrl:'assets/img/mascota.png',
      nombre:'Poroto',
      edad:'10 meses',
      caracteristicas:'Cariñoso,familiar,compañero'
    },
    {
      imagenUrl:'assets/img/mascota2.png',
      nombre:'Doroteo',
      edad:'10 meses',
      caracteristicas:'Cariñoso,familiar,compañero'
    },
    {
      imagenUrl:'assets/img/mascota3.png',
      nombre:'Señora',
      edad:'8 meses',
      caracteristicas:'Cariñoso,familiar,compañero'
    },
    {
      imagenUrl:'assets/img/mascota4.png',
      nombre:'Canela',
      edad:'2 años',
      caracteristicas:'Cariñoso,familiar,compañero'
    },
    {
      imagenUrl:'assets/img/mascota.png',
      nombre:'Betooven',
      edad:'10 meses',
      caracteristicas:'Cariñoso,familiar,compañero'
    },
    {
      imagenUrl:'assets/img/mascota2.png',
      nombre:'Pepita',
      edad:'8 meses',
      caracteristicas:'Cariñoso,familiar,compañero'
    },
    {
      imagenUrl:'assets/img/mascota3.png',
      nombre:'Canela',
      edad:'2 años',
      caracteristicas:'Cariñoso,familiar,compañero'

    },
    {
      imagenUrl:'assets/img/mascota4.png',
      nombre:'Betooven',
      edad:'10 meses',
      caracteristicas:'Cariñoso,familiar,compañero'
    }
  ]
  auspiciantes=[
    {
      auspicianteUrl:'assets/img/aus2.png',
      nombre_auspiciante:'Hills Pet Nutrition'
    },
    {
      auspicianteUrl:'assets/img/aus3.png',
      nombre_auspiciante:'Nextgard'
    },
    {
      auspicianteUrl:'assets/img/aus5.png',
      nombre_auspiciante:'Pedigree'
    },
    {
      auspicianteUrl:'assets/img/aus1.png',
      nombre_auspiciante:'Premier'
    },
    {
      auspicianteUrl:'assets/img/aus7.png',
      nombre_auspiciante:'Royal Canin'
    },
    {
      auspicianteUrl:'assets/img/aus4.png',
      nombre_auspiciante:'Whistas'
    },
    {
      auspicianteUrl:'assets/img/aus8.png',
      nombre_auspiciante:'Farmina'
    }
  ]
}
