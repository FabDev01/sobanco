import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendZape() {
    
    const nome = (<HTMLInputElement>document.getElementById("nome")).value; 
    const message = (<HTMLInputElement>document.getElementById("texto")).value;
    window.open("https://wa.me/5521997792360?&text=".concat(" [ ", "Nome: ", nome, " ] ").concat(" ").concat(" ")
    .concat("Menssagem: ", message))

  }
}