import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {

  @Input() public name: string;
  @Input() public url: string;


  public handlerClick(): void{
    window.open( this.url, "_blank" );
  }
}
