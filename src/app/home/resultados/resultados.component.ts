import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
})
export class ResultadosComponent implements OnInit {
  @Input("value") value;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.value);
    
  }
  currentModal = null;
 dismissModal() {
  this.modalController.dismiss();
  }
}
