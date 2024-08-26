import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  tipo:string = "Simples"
  preco = 200;


getFullPrice(){
  return 'R$' + this.preco + ',00/Mês';
}

}
