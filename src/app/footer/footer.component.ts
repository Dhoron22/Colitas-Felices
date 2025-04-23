import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,

  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  logoInstagram: string = 'assets/img/instagram.png';
  logoFacebook: string = 'assets/img/facebook.png';
  logoTwitter: string = 'assets/img/twitter.png';
}
