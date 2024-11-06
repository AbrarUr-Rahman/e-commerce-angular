import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute,Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen:boolean=false;

  toggleMenu(){
    console.log('menu toggled');
    this.menuOpen=!this.menuOpen;
  }
}
