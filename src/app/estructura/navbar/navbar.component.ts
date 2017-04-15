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

    isShow = false;
       // store state
    toggleState() { // click handler
        let bool = this.isShow;
        this.isShow = bool === false ? true : false;
    }
}
