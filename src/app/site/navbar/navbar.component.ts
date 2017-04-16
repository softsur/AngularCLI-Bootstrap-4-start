import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    titulo = 'Softsur.cl';
    nosotros = 'Servicios';
    contactanos = 'Contactanos';
    buscar = 'buscar';
    inicio = 'Inicio';
    buscar_place = 'Buscar en la web';
    Entrada = 'hola';
    // store de state of toggle
    isShow = false;
    toggleState(event: Event) { // click handler
        event.preventDefault();
        this.isShow = this.isShow === false ? true : false;
    }
}
