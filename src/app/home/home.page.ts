import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { ActionSheetController, IonRouterOutlet, ModalController, NavController } from '@ionic/angular';
import { Logs } from 'selenium-webdriver';
import { ResultadosComponent } from './resultados/resultados.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  resultados=[];
  tamanhoEscala;
  number;

  Escala = [
    {id:1, value: "3X3", num:3},
    {id:2, value: "4X4", num:4},
    {id:3, value: "5X5", num:5},
    {id:4, value: "6X6", num:6},
    {id:5, value: "7X7", num:7},
    {id:6, value: "8X8", num:8},
    {id:7, value: "9X9", num:9},
    {id:8, value: "10X10", num:10},

  ];
  constructor(
    public navCtrl: NavController,
    public routerOutlet: IonRouterOutlet,
    public modalController: ModalController  ) {}

  ngOnInit() {
  }

  SelectTamanhoEscala(id){
    this.tamanhoEscala = Array(id.num).fill(0).map((x,i)=>i);
    this.number = id.num;
  }
  
  calcular(){
    
    console.log();
    
    switch (this.number){

      case 3: 
        this.escalaDe3();
        break;
      case 4:
        this.escalaDe4();
        break;
      case 5:
        this.escalaDe5();
        break;
      case 6:
        this.escalaDe6();
        break;
      case 7:
        this.escalaDe7();
        break;
      case 8:
        this.escalaDe8();
        break;
      case 9:
        this.escalaDe9();
        break;
      case 10:
        this.escalaDe10();
        break;

      default:
        console.log("erro");
        break;
          
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ResultadosComponent,
      cssClass: 'my-custom-class',
      componentProps: {value: this.resultados}
    });   
    return await modal.present();
  
  }

  escalaDe3(){
    var A0:number = Number((document.getElementById('conta_10') as HTMLInputElement).value)/Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var A1:number = Number((document.getElementById('conta_11') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var A2:number = Number((document.getElementById('conta_12') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var A3:number = Number((document.getElementById('result_1') as HTMLInputElement).value) - A0 * Number((document.getElementById('result_0') as HTMLInputElement).value);
    
    var B0:number = Number((document.getElementById('conta_20') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var B1:number = Number((document.getElementById('conta_21') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var B2:number = Number((document.getElementById('conta_22') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var B3:number = Number((document.getElementById('result_2') as HTMLInputElement).value) - B0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var C0:number = B1/A1;
    var C1:number = B2 - (C0 * A2);
    var C2:number = B3 - (C0 * A3);

    var R0:number = C2/C1;
    var R1:number = (B3-B2*R0)/B1;
    var R2:number = ((Number((document.getElementById('result_0') as HTMLInputElement).value)-Number((document.getElementById('conta_02') as HTMLInputElement).value)*R0)-Number((document.getElementById('conta_01') as HTMLInputElement).value)*R1)/Number((document.getElementById('conta_00') as HTMLInputElement).value);

    this.resultados=[
    {label:'A', value: [A0.toFixed(2), A1.toFixed(2),A2.toFixed(2),A3.toFixed(2),]},
    {label:'B', value: [B0.toFixed(2), B1.toFixed(2),B2.toFixed(2),B3.toFixed(2),]},
    {label:'C', value: [C0.toFixed(2), C1.toFixed(2),C2.toFixed(2)]},
    {label:'D', value: [C0.toFixed(2), C1.toFixed(2),C2.toFixed(2)]},
    {label:'R', value: [R0.toFixed(2), R1.toFixed(2),R2.toFixed(2)]}
  ];
    this.presentModal();
  }

  escalaDe4(){
    var A0:number = Number((document.getElementById('conta_10') as HTMLInputElement).value)/Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var A1:number = Number((document.getElementById('conta_11') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var A2:number = Number((document.getElementById('conta_12') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var A3:number = Number((document.getElementById('conta_13') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var A4:number = Number((document.getElementById('result_1') as HTMLInputElement).value) - A0 * Number((document.getElementById('result_0') as HTMLInputElement).value);
    
    var B0:number = Number((document.getElementById('conta_20') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var B1:number = Number((document.getElementById('conta_21') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var B2:number = Number((document.getElementById('conta_22') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var B3:number = Number((document.getElementById('conta_23') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var B4:number = Number((document.getElementById('result_2') as HTMLInputElement).value) - B0 * Number((document.getElementById('result_0') as HTMLInputElement).value);
      
    var C0:number = Number((document.getElementById('conta_30') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var C1:number = Number((document.getElementById('conta_31') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var C2:number = Number((document.getElementById('conta_32') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var C3:number = Number((document.getElementById('conta_33') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var C4:number = Number((document.getElementById('result_3') as HTMLInputElement).value) - C0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var D0:number = B1/A1;
    var D1:number = B2 - (D0 * A2);
    var D2:number = B3 - (D0 * A3);
    var D3:number = B4 - (D0 * A4);

    var E0:number = C1/A1;
    var E1:number = C2 - (E0 * A2);
    var E2:number = C3 - (E0 * A3);
    var E3:number = C4 - (E0 * A4);

    
    var F0:number = E1/D1;
    var F1:number = E2 - (F0 * D2);
    var F2:number = E3 - (F0 * D3);

    // console.log(C0);
    // console.log(C1);
    // console.log(C2);
    var R0:number = F2/F1;
    var R1:number = (D3-D2*R0)/D1;
    var R2:number = (A4-A3*R0-A2*R1)/A1;
    var R3:number = ((Number((document.getElementById('result_0') as HTMLInputElement).value)
    -Number((document.getElementById('conta_03') as HTMLInputElement).value)*R0)
    -Number((document.getElementById('conta_02') as HTMLInputElement).value)*R1
    -Number((document.getElementById('conta_01') as HTMLInputElement).value)*R2)
    /Number((document.getElementById('conta_00') as HTMLInputElement).value);

    this.resultados=[
      {label:'A', value: [A0.toFixed(2), A1.toFixed(2),A2.toFixed(2),A3.toFixed(2),A4.toFixed(2)]},
      {label:'B', value: [B0.toFixed(2), B1.toFixed(2),B2.toFixed(2),B3.toFixed(2),B4.toFixed(2)]},
      {label:'C', value: [C0.toFixed(2), C1.toFixed(2),C2.toFixed(2),C3.toFixed(2),C4.toFixed(2)]},
      {label:'D', value: [D0.toFixed(2), D1.toFixed(2),D2.toFixed(2),D3.toFixed(2)]},
      {label:'E', value: [E0.toFixed(2), E1.toFixed(2),E2.toFixed(2),E3.toFixed(2)]},
      {label:'F', value: [F0.toFixed(2), F1.toFixed(2),F2.toFixed(2)]},
      {label:'R', value: [R0.toFixed(2), R1.toFixed(2),R2.toFixed(2),R3.toFixed(2)]}
    ];   
     this.presentModal();
  }

  escalaDe5(){
    var A0:number = Number((document.getElementById('conta_10') as HTMLInputElement).value)/Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var A1:number = Number((document.getElementById('conta_11') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var A2:number = Number((document.getElementById('conta_12') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var A3:number = Number((document.getElementById('conta_13') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var A4:number = Number((document.getElementById('conta_14') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var A5:number = Number((document.getElementById('result_1') as HTMLInputElement).value) - A0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var B0:number = Number((document.getElementById('conta_20') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var B1:number = Number((document.getElementById('conta_21') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var B2:number = Number((document.getElementById('conta_22') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var B3:number = Number((document.getElementById('conta_23') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var B4:number = Number((document.getElementById('conta_24') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var B5:number = Number((document.getElementById('result_2') as HTMLInputElement).value) - B0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var C0:number = Number((document.getElementById('conta_30') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var C1:number = Number((document.getElementById('conta_31') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var C2:number = Number((document.getElementById('conta_32') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var C3:number = Number((document.getElementById('conta_33') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var C4:number = Number((document.getElementById('conta_34') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var C5:number = Number((document.getElementById('result_3') as HTMLInputElement).value) - C0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var D0:number = Number((document.getElementById('conta_40') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var D1:number = Number((document.getElementById('conta_41') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var D2:number = Number((document.getElementById('conta_42') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var D3:number = Number((document.getElementById('conta_43') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var D4:number = Number((document.getElementById('conta_44') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var D5:number = Number((document.getElementById('result_4') as HTMLInputElement).value) - C0 * Number((document.getElementById('result_0') as HTMLInputElement).value);
   
    ///////////////////////////////////////////////////////////////

    var F0:number = B1/A1;
    var F1:number = B2 - (F0 * A2);
    var F2:number = B3 - (F0 * A3);
    var F3:number = B4 - (F0 * A4);
    var F4:number = B5 - (F0 * A5);

    var G0:number = C1/A1;
    var G1:number = C2 - (G0 * A2);
    var G2:number = C3 - (G0 * A3);
    var G3:number = C4 - (G0 * A4);
    var G4:number = C5 - (G0 * A5);

    var H0:number = D1/A1;
    var H1:number = D2 - (H0 * A2);
    var H2:number = D3 - (H0 * A3);
    var H3:number = D4 - (H0 * A4);
    var H4:number = D5 - (H0 * A5);
    
    ///////////////////////////////////////////////////////////////
    var I0:number = G1/F1;
    var I1:number = G2 - (I0 * F2);
    var I2:number = G3 - (I0 * F3);
    var I3:number = G4 - (I0 * F4);
        
    var J0:number = H1/F1;
    var J1:number = H2 - (J0 * F2);
    var J2:number = H3 - (J0 * F3);
    var J3:number = H4 - (J0 * F4);

    ///////////////////////////////////////////////////////////////
    var K0:number = J1/I1;
    var K1:number = J2 - (K0 * I2);
    var K2:number = J3 - (K0 * I3);
    ///////////////////////////////////////////////////////////////

    var R0:number = K2/K1;
    var R1:number = (I3-(I2*R0))/I1;
    var R2:number = (F4-(F3*R0)-(F2*R1))/F1;
    var R3:number = (A5-(A4*R0)-(A3*R1)-(A2*R2))/A1;

    var R4:number = ((Number((document.getElementById('result_0') as HTMLInputElement).value)
    -Number((document.getElementById('conta_04') as HTMLInputElement).value)*R0)
    -Number((document.getElementById('conta_03') as HTMLInputElement).value)*R1
    -Number((document.getElementById('conta_02') as HTMLInputElement).value)*R2
    -Number((document.getElementById('conta_01') as HTMLInputElement).value)*R3)
    /Number((document.getElementById('conta_00') as HTMLInputElement).value);

    this.resultados=[
      {label:'0', value: [A0.toFixed(2), A1.toFixed(2),A2.toFixed(2),A3.toFixed(2),A4.toFixed(2),A5.toFixed(2)]},
      {label:'1', value: [B0.toFixed(2), B1.toFixed(2),B2.toFixed(2),B3.toFixed(2),B4.toFixed(2),B5.toFixed(2)]},
      {label:'2', value: [C0.toFixed(2), C1.toFixed(2),C2.toFixed(2),C3.toFixed(2),C4.toFixed(2),C5.toFixed(2)]},
      {label:'3', value: [D0.toFixed(2), D1.toFixed(2),D2.toFixed(2),D3.toFixed(2),D4.toFixed(2),D5.toFixed(2)]},
      {label:'4', value: [F0.toFixed(2), F1.toFixed(2),F2.toFixed(2),F3.toFixed(2),F4.toFixed(2)]},
      {label:'5', value: [G0.toFixed(2), G1.toFixed(2),G2.toFixed(2),G3.toFixed(2),G4.toFixed(2)]},
      {label:'6', value: [H0.toFixed(2), H1.toFixed(2),H2.toFixed(2),H3.toFixed(2),H4.toFixed(2)]},
      {label:'7', value: [I0.toFixed(2), I1.toFixed(2),I2.toFixed(2),I3.toFixed(2)]},
      {label:'8', value: [J0.toFixed(2), J1.toFixed(2),J2.toFixed(2),J3.toFixed(2)]},
      {label:'9', value: [K0.toFixed(2), K1.toFixed(2),K2.toFixed(2)]},
      {label:'R', value: [R0.toFixed(2), R1.toFixed(2),R2.toFixed(2),R3.toFixed(2),R4.toFixed(2)]}
    ];   
      this.presentModal();
  }
  escalaDe6(){
    var A0:number = Number((document.getElementById('conta_10') as HTMLInputElement).value)/Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var A1:number = Number((document.getElementById('conta_11') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var A2:number = Number((document.getElementById('conta_12') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var A3:number = Number((document.getElementById('conta_13') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var A4:number = Number((document.getElementById('conta_14') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var A5:number = Number((document.getElementById('conta_15') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var A6:number = Number((document.getElementById('result_1') as HTMLInputElement).value) - A0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var B0:number = Number((document.getElementById('conta_20') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var B1:number = Number((document.getElementById('conta_21') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var B2:number = Number((document.getElementById('conta_22') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var B3:number = Number((document.getElementById('conta_23') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var B4:number = Number((document.getElementById('conta_24') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var B5:number = Number((document.getElementById('conta_25') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var B6:number = Number((document.getElementById('result_2') as HTMLInputElement).value) - B0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var C0:number = Number((document.getElementById('conta_30') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var C1:number = Number((document.getElementById('conta_31') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var C2:number = Number((document.getElementById('conta_32') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var C3:number = Number((document.getElementById('conta_33') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var C4:number = Number((document.getElementById('conta_34') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var C5:number = Number((document.getElementById('conta_35') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var C6:number = Number((document.getElementById('result_3') as HTMLInputElement).value) - C0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var D0:number = Number((document.getElementById('conta_40') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var D1:number = Number((document.getElementById('conta_41') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var D2:number = Number((document.getElementById('conta_42') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var D3:number = Number((document.getElementById('conta_43') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var D4:number = Number((document.getElementById('conta_44') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var D5:number = Number((document.getElementById('conta_45') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var D6:number = Number((document.getElementById('result_4') as HTMLInputElement).value) - D0 * Number((document.getElementById('result_0') as HTMLInputElement).value);
   
    var E0:number = Number((document.getElementById('conta_50') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var E1:number = Number((document.getElementById('conta_51') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var E2:number = Number((document.getElementById('conta_52') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var E3:number = Number((document.getElementById('conta_53') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var E4:number = Number((document.getElementById('conta_54') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var E5:number = Number((document.getElementById('conta_55') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var E6:number = Number((document.getElementById('result_5') as HTMLInputElement).value) - E0 * Number((document.getElementById('result_0') as HTMLInputElement).value);
   
    ///////////////////////////////////////////////////////////////

    var F0:number = B1/A1;
    var F1:number = B2 - (F0 * A2);
    var F2:number = B3 - (F0 * A3);
    var F3:number = B4 - (F0 * A4);
    var F4:number = B5 - (F0 * A5);
    var F5:number = B6 - (F0 * A6);


    var G0:number = C1/A1;
    var G1:number = C2 - (G0 * A2);
    var G2:number = C3 - (G0 * A3);
    var G3:number = C4 - (G0 * A4);
    var G4:number = C5 - (G0 * A5);
    var G5:number = C6 - (G0 * A6);

    var H0:number = D1/A1;
    var H1:number = D2 - (H0 * A2);
    var H2:number = D3 - (H0 * A3);
    var H3:number = D4 - (H0 * A4);
    var H4:number = D5 - (H0 * A5);
    var H5:number = D6 - (H0 * A6);

    var I0:number = E1/A1;
    var I1:number = E2 - (I0 * A2);
    var I2:number = E3 - (I0 * A3);
    var I3:number = E4 - (I0 * A4);
    var I4:number = E5 - (I0 * A5);
    var I5:number = E6 - (I0 * A6);

    ///////////////////////////////////////////////////////////////
    var J0:number = G1/F1;
    var J1:number = G2 - (J0 * F2);
    var J2:number = G3 - (J0 * F3);
    var J3:number = G4 - (J0 * F4);
    var J4:number = G5 - (J0 * F5);

    var K0:number = H1/F1;
    var K1:number = H2 - (K0 * F2);
    var K2:number = H3 - (K0 * F3);
    var K3:number = H4 - (K0 * F4);
    var K4:number = H5 - (K0 * F5);

    var L0:number = I1/F1;
    var L1:number = I2 - (L0 * F2);
    var L2:number = I3 - (L0 * F3);
    var L3:number = I4 - (L0 * F4);
    var L4:number = I5 - (L0 * F5);

    ///////////////////////////////////////////////////////////////
    var M0:number = K1/J1;
    var M1:number = K2 - (M0 * J2);
    var M2:number = K3 - (M0 * J3);
    var M3:number = K4 - (M0 * J4);

    var N0:number = L1/J1;
    var N1:number = L2 - (N0 * J2);
    var N2:number = L3 - (N0 * J3);
    var N3:number = L4 - (N0 * J4);

    ///////////////////////////////////////////////////////////////
    
    var O0:number = N1/M1;
    var O1:number = N2 - (O0 * M2);
    var O2:number = N3 - (O0 * M3);

    ///////////////////////////////////////////////////////////////

    var R0:number = O2/O1;
    var R1:number = (M3-M2*R0)/M1;
    var R2:number = (J4-J3*R0-J2*R1)/J1;
    var R3:number = (F5-F4*R0-F3*R1-F2*R2)/F1;
    var R4:number = (A6-A5*R0-A4*R1-A3*R2-A2*R3)/A1;
    var R5:number = ((Number((document.getElementById('result_0') as HTMLInputElement).value)
    -Number((document.getElementById('conta_05') as HTMLInputElement).value)*R0)
    -Number((document.getElementById('conta_04') as HTMLInputElement).value)*R1
    -Number((document.getElementById('conta_03') as HTMLInputElement).value)*R2
    -Number((document.getElementById('conta_02') as HTMLInputElement).value)*R3)
    -Number((document.getElementById('conta_01') as HTMLInputElement).value)*R4
    /Number((document.getElementById('conta_00') as HTMLInputElement).value);

    this.resultados=[
      {label:'0', value: [A0.toFixed(2), A1.toFixed(2),A2.toFixed(2),A3.toFixed(2),A4.toFixed(2),A5.toFixed(2),A6.toFixed(2)]},
      {label:'1', value: [B0.toFixed(2), B1.toFixed(2),B2.toFixed(2),B3.toFixed(2),B4.toFixed(2),B5.toFixed(2),B6.toFixed(2)]},
      {label:'2', value: [C0.toFixed(2), C1.toFixed(2),C2.toFixed(2),C3.toFixed(2),C4.toFixed(2),C5.toFixed(2),C6.toFixed(2)]},
      {label:'3', value: [D0.toFixed(2), D1.toFixed(2),D2.toFixed(2),D3.toFixed(2),D4.toFixed(2),D5.toFixed(2),D6.toFixed(2)]},
      {label:'4', value: [E0.toFixed(2), E1.toFixed(2),E2.toFixed(2),E3.toFixed(2),E4.toFixed(2),E5.toFixed(2),E6.toFixed(2)]},
      {label:'5', value: [F0.toFixed(2), F1.toFixed(2),F2.toFixed(2),F3.toFixed(2),F4.toFixed(2),F5.toFixed(2)]},
      {label:'6', value: [G0.toFixed(2), G1.toFixed(2),G2.toFixed(2),G3.toFixed(2),G4.toFixed(2),G5.toFixed(2)]},
      {label:'7', value: [H0.toFixed(2), H1.toFixed(2),H2.toFixed(2),H3.toFixed(2),H4.toFixed(2),H5.toFixed(2)]},
      {label:'8', value: [I0.toFixed(2), I1.toFixed(2),I2.toFixed(2),I3.toFixed(2),I4.toFixed(2),I5.toFixed(2)]},
      {label:'9', value: [J0.toFixed(2), J1.toFixed(2),J2.toFixed(2),J3.toFixed(2),J4.toFixed(2)]},
      {label:'9', value: [K0.toFixed(2), K1.toFixed(2),J2.toFixed(2),K3.toFixed(2),K4.toFixed(2)]},
      {label:'9', value: [L0.toFixed(2), L1.toFixed(2),L2.toFixed(2),L3.toFixed(2),L4.toFixed(2)]},
      {label:'9', value: [M0.toFixed(2), M1.toFixed(2),M2.toFixed(2),M3.toFixed(2)]},
      {label:'9', value: [N0.toFixed(2), N1.toFixed(2),N2.toFixed(2),N3.toFixed(2)]},
      {label:'10', value: [O0.toFixed(2), O1.toFixed(2),O2.toFixed(2)]},
      {label:'R', value: [R0.toFixed(2), R1.toFixed(2),R2.toFixed(2),R3.toFixed(2),R4.toFixed(2),R5.toFixed(2)]}
    ];    
    
    this.presentModal();
  }
  escalaDe7(){
    var A0:number = Number((document.getElementById('conta_10') as HTMLInputElement).value)/Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var A1:number = Number((document.getElementById('conta_11') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var A2:number = Number((document.getElementById('conta_12') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var A3:number = Number((document.getElementById('conta_13') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var A4:number = Number((document.getElementById('conta_14') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var A5:number = Number((document.getElementById('conta_15') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var A6:number = Number((document.getElementById('conta_16') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var A7:number = Number((document.getElementById('result_1') as HTMLInputElement).value) - A0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var B0:number = Number((document.getElementById('conta_20') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var B1:number = Number((document.getElementById('conta_21') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var B2:number = Number((document.getElementById('conta_22') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var B3:number = Number((document.getElementById('conta_23') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var B4:number = Number((document.getElementById('conta_24') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var B5:number = Number((document.getElementById('conta_25') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var B6:number = Number((document.getElementById('conta_26') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var B7:number = Number((document.getElementById('result_2') as HTMLInputElement).value) - B0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var C0:number = Number((document.getElementById('conta_30') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var C1:number = Number((document.getElementById('conta_31') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var C2:number = Number((document.getElementById('conta_32') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var C3:number = Number((document.getElementById('conta_33') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var C4:number = Number((document.getElementById('conta_34') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var C5:number = Number((document.getElementById('conta_35') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var C6:number = Number((document.getElementById('conta_36') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var C7:number = Number((document.getElementById('result_3') as HTMLInputElement).value) - C0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var D0:number = Number((document.getElementById('conta_40') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var D1:number = Number((document.getElementById('conta_41') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var D2:number = Number((document.getElementById('conta_42') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var D3:number = Number((document.getElementById('conta_43') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var D4:number = Number((document.getElementById('conta_44') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var D5:number = Number((document.getElementById('conta_45') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var D6:number = Number((document.getElementById('conta_46') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var D7:number = Number((document.getElementById('result_4') as HTMLInputElement).value) - D0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var E0:number = Number((document.getElementById('conta_50') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var E1:number = Number((document.getElementById('conta_51') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var E2:number = Number((document.getElementById('conta_52') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var E3:number = Number((document.getElementById('conta_53') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var E4:number = Number((document.getElementById('conta_54') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var E5:number = Number((document.getElementById('conta_55') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var E6:number = Number((document.getElementById('conta_56') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var E7:number = Number((document.getElementById('result_5') as HTMLInputElement).value) - E0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var F0:number = Number((document.getElementById('conta_60') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var F1:number = Number((document.getElementById('conta_61') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var F2:number = Number((document.getElementById('conta_62') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var F3:number = Number((document.getElementById('conta_63') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var F4:number = Number((document.getElementById('conta_64') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var F5:number = Number((document.getElementById('conta_65') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var F6:number = Number((document.getElementById('conta_66') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var F7:number = Number((document.getElementById('result_6') as HTMLInputElement).value) - F0 * Number((document.getElementById('result_0') as HTMLInputElement).value);
    ///////////////////////////////////////////////////////////////

    var G0:number = B1/A1;
    var G1:number = B2 - (G0 * A2);
    var G2:number = B3 - (G0 * A3);
    var G3:number = B4 - (G0 * A4);
    var G4:number = B5 - (G0 * A5);
    var G5:number = B6 - (G0 * A6);
    var G6:number = B7 - (G0 * A7);

    var H0:number = C1/A1;
    var H1:number = C2 - (H0 * A2);
    var H2:number = C3 - (H0 * A3);
    var H3:number = C4 - (H0 * A4);
    var H4:number = C5 - (H0 * A5);
    var H5:number = C6 - (H0 * A6);
    var H6:number = C7 - (H0 * A7);

    var I0:number = D1/A1;
    var I1:number = D2 - (I0 * A2);
    var I2:number = D3 - (I0 * A3);
    var I3:number = D4 - (I0 * A4);
    var I4:number = D5 - (I0 * A5);
    var I5:number = D6 - (I0 * A6);
    var I6:number = D7 - (I0 * A7);

    var J0:number = E1/A1;
    var J1:number = E2 - (J0 * A2);
    var J2:number = E3 - (J0 * A3);
    var J3:number = E4 - (J0 * A4);
    var J4:number = E5 - (J0 * A5);
    var J5:number = E6 - (J0 * A6);
    var J6:number = E7 - (J0 * A7);

    var K0:number = F1/A1;
    var K1:number = F2 - (K0 * A2);
    var K2:number = F3 - (K0 * A3);
    var K3:number = F4 - (K0 * A4);
    var K4:number = F5 - (K0 * A5);
    var K5:number = F6 - (K0 * A6);
    var K6:number = F7 - (K0 * A7);

    ///////////////////////////////////////////////////////////////
    var L0:number = H1/G1;
    var L1:number = H2 - (L0 * G2);
    var L2:number = H3 - (L0 * G3);
    var L3:number = H4 - (L0 * G4);
    var L4:number = H5 - (L0 * G5);
    var L5:number = H6 - (L0 * G6);

    var M0:number = I1/G1;
    var M1:number = I2 - (M0 * G2);
    var M2:number = I3 - (M0 * G3);
    var M3:number = I4 - (M0 * G4);
    var M4:number = I5 - (M0 * G5);
    var M5:number = I6 - (M0 * G6);

    var N0:number = J1/G1;
    var N1:number = J2 - (N0 * G2);
    var N2:number = J3 - (N0 * G3);
    var N3:number = J4 - (N0 * G4);
    var N4:number = J5 - (N0 * G5);
    var N5:number = J6 - (N0 * G6);

    var O0:number = K1/G1;
    var O1:number = K2 - (O0 * G2);
    var O2:number = K3 - (O0 * G3);
    var O3:number = K4 - (O0 * G4);
    var O4:number = K5 - (O0 * G5);
    var O5:number = K6 - (O0 * G6);

    ///////////////////////////////////////////////////////////////
    var P0:number = M1/L1;
    var P1:number = M2 - (P0 * L2);
    var P2:number = M3 - (P0 * L3);
    var P3:number = M4 - (P0 * L4);
    var P4:number = M5 - (P0 * L5);

    var Q0:number = N1/L1;
    var Q1:number = N2 - (Q0 * L2);
    var Q2:number = N3 - (Q0 * L3);
    var Q3:number = N4 - (Q0 * L4);
    var Q4:number = N5 - (Q0 * L5);

    var S0:number = O1/L1;
    var S1:number = O2 - (S0 * L2);
    var S2:number = O3 - (S0 * L3);
    var S3:number = O4 - (S0 * L4);
    var S4:number = O5 - (S0 * L5);

    ///////////////////////////////////////////////////////////////
    
    var T0:number = Q1/P1;
    var T1:number = Q2 - (T0 * P2);
    var T2:number = Q3 - (T0 * P3);
    var T3:number = Q4 - (T0 * P4);

    var U0:number = S1/P1;
    var U1:number = S2 - (U0 * M2);
    var U2:number = S3 - (U0 * M3);
    var U3:number = S4 - (U0 * M4);

    ///////////////////////////////////////////////////////////////
    
    var V0:number = U1/T1;
    var V1:number = U2 - (V0 * T2);
    var V2:number = U3 - (V0 * T3);

    ///////////////////////////////////////////////////////////////

    var R0:number = V2/V1;
    var R1:number = (T3-T2*R0)/T1;
    var R2:number = (P4-P3*R0-P2*R1)/P1;
    var R3:number = (L5-L4*R0-L3*R1-L2*R2)/L1;
    var R4:number = (G6-G5*R0-G4*R1-G3*R2-G2*R3)/G1;
    var R5:number = (A7-A6*R0-A5*R1-A4*R2-A3*R3-A2*R4)/A1;
    var R6:number = ((Number((document.getElementById('result_0') as HTMLInputElement).value)
    -Number((document.getElementById('conta_06') as HTMLInputElement).value)*R0)
    -Number((document.getElementById('conta_05') as HTMLInputElement).value)*R1
    -Number((document.getElementById('conta_04') as HTMLInputElement).value)*R2
    -Number((document.getElementById('conta_03') as HTMLInputElement).value)*R3)
    -Number((document.getElementById('conta_02') as HTMLInputElement).value)*R4
    -Number((document.getElementById('conta_01') as HTMLInputElement).value)*R5
    /Number((document.getElementById('conta_00') as HTMLInputElement).value);

    this.resultados=[
      {label:'0', value: [A0.toFixed(2), A1.toFixed(2),A2.toFixed(2),A3.toFixed(2),A4.toFixed(2),A5.toFixed(2),A6.toFixed(2),A7.toFixed(2)]},
      {label:'1', value: [B0.toFixed(2), B1.toFixed(2),B2.toFixed(2),B3.toFixed(2),B4.toFixed(2),B5.toFixed(2),B6.toFixed(2),B7.toFixed(2)]},
      {label:'2', value: [C0.toFixed(2), C1.toFixed(2),C2.toFixed(2),C3.toFixed(2),C4.toFixed(2),C5.toFixed(2),C6.toFixed(2),C7.toFixed(2)]},
      {label:'3', value: [D0.toFixed(2), D1.toFixed(2),D2.toFixed(2),D3.toFixed(2),D4.toFixed(2),D5.toFixed(2),D6.toFixed(2),D7.toFixed(2)]},
      {label:'4', value: [E0.toFixed(2), E1.toFixed(2),E2.toFixed(2),E3.toFixed(2),E4.toFixed(2),E5.toFixed(2),E6.toFixed(2),E7.toFixed(2)]},
      {label:'4', value: [E0.toFixed(2), F1.toFixed(2),F2.toFixed(2),F3.toFixed(2),F4.toFixed(2),F5.toFixed(2),F6.toFixed(2),F7.toFixed(2)]},
      {label:'6', value: [G0.toFixed(2), G1.toFixed(2),G2.toFixed(2),G3.toFixed(2),G4.toFixed(2),G5.toFixed(2),G6.toFixed(2)]},
      {label:'7', value: [H0.toFixed(2), H1.toFixed(2),H2.toFixed(2),H3.toFixed(2),H4.toFixed(2),H5.toFixed(2),G6.toFixed(2)]},
      {label:'8', value: [I0.toFixed(2), I1.toFixed(2),I2.toFixed(2),I3.toFixed(2),I4.toFixed(2),I5.toFixed(2),I6.toFixed(2)]},
      {label:'9', value: [J0.toFixed(2), J1.toFixed(2),J2.toFixed(2),J3.toFixed(2),J4.toFixed(2),J5.toFixed(2),J6.toFixed(2)]},
      {label:'9', value: [K0.toFixed(2), K1.toFixed(2),J2.toFixed(2),K3.toFixed(2),K4.toFixed(2),K5.toFixed(2),K6.toFixed(2)]},
      {label:'9', value: [L0.toFixed(2), L1.toFixed(2),L2.toFixed(2),L3.toFixed(2),L4.toFixed(2),L5.toFixed(2)]},
      {label:'9', value: [M0.toFixed(2), M1.toFixed(2),M2.toFixed(2),M3.toFixed(2),M4.toFixed(2),M5.toFixed(2)]},
      {label:'9', value: [N0.toFixed(2), N1.toFixed(2),N2.toFixed(2),N3.toFixed(2),N4.toFixed(2),N5.toFixed(2)]},
      {label:'10', value: [O0.toFixed(2), O1.toFixed(2),O2.toFixed(2),O3.toFixed(2),O4.toFixed(2),O5.toFixed(2)]},
      {label:'10', value: [P0.toFixed(2), P1.toFixed(2),P2.toFixed(2),P3.toFixed(2),P4.toFixed(2)]},
      {label:'10', value: [Q0.toFixed(2), Q1.toFixed(2),Q2.toFixed(2),Q3.toFixed(2),Q4.toFixed(2)]},
      {label:'10', value: [S0.toFixed(2), S1.toFixed(2),S2.toFixed(2),S3.toFixed(2),S4.toFixed(2)]},
      {label:'10', value: [T0.toFixed(2), T1.toFixed(2),T2.toFixed(2),T3.toFixed(2)]},
      {label:'10', value: [U0.toFixed(2), U1.toFixed(2),U2.toFixed(2),U3.toFixed(2)]},
      {label:'10', value: [V0.toFixed(2), V1.toFixed(2),V2.toFixed(2)]},

      {label:'R', value: [R0.toFixed(2), R1.toFixed(2),R2.toFixed(2),R3.toFixed(2),R4.toFixed(2),R5.toFixed(2),R6.toFixed(2)]}
    ];  
    this.presentModal();
  }
  escalaDe8(){
    var A0:number = Number((document.getElementById('conta_10') as HTMLInputElement).value)/Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var A1:number = Number((document.getElementById('conta_11') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var A2:number = Number((document.getElementById('conta_12') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var A3:number = Number((document.getElementById('conta_13') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var A4:number = Number((document.getElementById('conta_14') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var A5:number = Number((document.getElementById('conta_15') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var A6:number = Number((document.getElementById('conta_16') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var A7:number = Number((document.getElementById('conta_17') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var A8:number = Number((document.getElementById('result_1') as HTMLInputElement).value) - A0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var B0:number = Number((document.getElementById('conta_20') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var B1:number = Number((document.getElementById('conta_21') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var B2:number = Number((document.getElementById('conta_22') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var B3:number = Number((document.getElementById('conta_23') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var B4:number = Number((document.getElementById('conta_24') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var B5:number = Number((document.getElementById('conta_25') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var B6:number = Number((document.getElementById('conta_26') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var B7:number = Number((document.getElementById('conta_27') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var B8:number = Number((document.getElementById('result_2') as HTMLInputElement).value) - B0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var C0:number = Number((document.getElementById('conta_30') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var C1:number = Number((document.getElementById('conta_31') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var C2:number = Number((document.getElementById('conta_32') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var C3:number = Number((document.getElementById('conta_33') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var C4:number = Number((document.getElementById('conta_34') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var C5:number = Number((document.getElementById('conta_35') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var C6:number = Number((document.getElementById('conta_36') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var C7:number = Number((document.getElementById('conta_37') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var C8:number = Number((document.getElementById('result_3') as HTMLInputElement).value) - C0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var D0:number = Number((document.getElementById('conta_40') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var D1:number = Number((document.getElementById('conta_41') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var D2:number = Number((document.getElementById('conta_42') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var D3:number = Number((document.getElementById('conta_43') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var D4:number = Number((document.getElementById('conta_44') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var D5:number = Number((document.getElementById('conta_45') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var D6:number = Number((document.getElementById('conta_46') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var D7:number = Number((document.getElementById('conta_47') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var D8:number = Number((document.getElementById('result_4') as HTMLInputElement).value) - D0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var E0:number = Number((document.getElementById('conta_50') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var E1:number = Number((document.getElementById('conta_51') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var E2:number = Number((document.getElementById('conta_52') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var E3:number = Number((document.getElementById('conta_53') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var E4:number = Number((document.getElementById('conta_54') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var E5:number = Number((document.getElementById('conta_55') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var E6:number = Number((document.getElementById('conta_56') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var E7:number = Number((document.getElementById('conta_57') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var E8:number = Number((document.getElementById('result_5') as HTMLInputElement).value) - E0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var F0:number = Number((document.getElementById('conta_60') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var F1:number = Number((document.getElementById('conta_61') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var F2:number = Number((document.getElementById('conta_62') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var F3:number = Number((document.getElementById('conta_63') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var F4:number = Number((document.getElementById('conta_64') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var F5:number = Number((document.getElementById('conta_65') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var F6:number = Number((document.getElementById('conta_66') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var F7:number = Number((document.getElementById('conta_67') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var F8:number = Number((document.getElementById('result_6') as HTMLInputElement).value) - F0 * Number((document.getElementById('result_0') as HTMLInputElement).value);
    
    var F00:number = Number((document.getElementById('conta_70') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var F01:number = Number((document.getElementById('conta_71') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var F02:number = Number((document.getElementById('conta_72') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var F03:number = Number((document.getElementById('conta_73') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var F04:number = Number((document.getElementById('conta_74') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var F05:number = Number((document.getElementById('conta_75') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var F06:number = Number((document.getElementById('conta_76') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var F07:number = Number((document.getElementById('conta_77') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var F08:number = Number((document.getElementById('result_7') as HTMLInputElement).value) - F00 * Number((document.getElementById('result_0') as HTMLInputElement).value);
    ///////////////////////////////////////////////////////////////

    var G0:number = B1/A1;
    var G1:number = B2 - (G0 * A2);
    var G2:number = B3 - (G0 * A3);
    var G3:number = B4 - (G0 * A4);
    var G4:number = B5 - (G0 * A5);
    var G5:number = B6 - (G0 * A6);
    var G6:number = B7 - (G0 * A7);
    var G7:number = B8 - (G0 * A8);

    var H0:number = C1/A1;
    var H1:number = C2 - (H0 * A2);
    var H2:number = C3 - (H0 * A3);
    var H3:number = C4 - (H0 * A4);
    var H4:number = C5 - (H0 * A5);
    var H5:number = C6 - (H0 * A6);
    var H6:number = C7 - (H0 * A7);
    var H7:number = C8 - (H0 * A8);

    var I0:number = D1/A1;
    var I1:number = D2 - (I0 * A2);
    var I2:number = D3 - (I0 * A3);
    var I3:number = D4 - (I0 * A4);
    var I4:number = D5 - (I0 * A5);
    var I5:number = D6 - (I0 * A6);
    var I6:number = D7 - (I0 * A7);
    var I7:number = D8 - (I0 * A8);

    var J0:number = E1/A1;
    var J1:number = E2 - (J0 * A2);
    var J2:number = E3 - (J0 * A3);
    var J3:number = E4 - (J0 * A4);
    var J4:number = E5 - (J0 * A5);
    var J5:number = E6 - (J0 * A6);
    var J6:number = E7 - (J0 * A7);
    var J7:number = E8 - (J0 * A8);

    var K0:number = F1/A1;
    var K1:number = F2 - (K0 * A2);
    var K2:number = F3 - (K0 * A3);
    var K3:number = F4 - (K0 * A4);
    var K4:number = F5 - (K0 * A5);
    var K5:number = F6 - (K0 * A6);
    var K6:number = F7 - (K0 * A7);
    var K7:number = F8 - (K0 * A8);

    var K00:number = F01/A1;
    var K01:number = F02 - (K00 * A2);
    var K02:number = F03 - (K00 * A3);
    var K03:number = F04 - (K00 * A4);
    var K04:number = F05 - (K00 * A5);
    var K05:number = F06 - (K00 * A6);
    var K06:number = F07 - (K00 * A7);
    var K07:number = F08 - (K00 * A8);

    ///////////////////////////////////////////////////////////////
    var L0:number = H1/G1;
    var L1:number = H2 - (L0 * G2);
    var L2:number = H3 - (L0 * G3);
    var L3:number = H4 - (L0 * G4);
    var L4:number = H5 - (L0 * G5);
    var L5:number = H6 - (L0 * G6);
    var L6:number = H7 - (L0 * G7);

    var M0:number = I1/G1;
    var M1:number = I2 - (M0 * G2);
    var M2:number = I3 - (M0 * G3);
    var M3:number = I4 - (M0 * G4);
    var M4:number = I5 - (M0 * G5);
    var M5:number = I6 - (M0 * G5);
    var M6:number = I7 - (M0 * G7);

    var N0:number = J1/G1;
    var N1:number = J2 - (N0 * G2);
    var N2:number = J3 - (N0 * G3);
    var N3:number = J4 - (N0 * G4);
    var N4:number = J5 - (N0 * G5);
    var N5:number = J6 - (N0 * G6);
    var N6:number = J7 - (N0 * G7);

    var O0:number = K1/G1;
    var O1:number = K2 - (O0 * G2);
    var O2:number = K3 - (O0 * G3);
    var O3:number = K4 - (O0 * G4);
    var O4:number = K5 - (O0 * G5);
    var O5:number = K6 - (O0 * G6);
    var O6:number = K7 - (O0 * G7);

    var O00:number = K01/G1;
    var O01:number = K02 - (O00 * G2);
    var O02:number = K03 - (O00 * G3);
    var O03:number = K04 - (O00 * G4);
    var O04:number = K05 - (O00 * G5);
    var O05:number = K06 - (O00 * G6);
    var O06:number = K07 - (O00 * G7);

    ///////////////////////////////////////////////////////////////
    var P0:number = M1/L1;
    var P1:number = M2 - (P0 * L2);
    var P2:number = M3 - (P0 * L3);
    var P3:number = M4 - (P0 * L4);
    var P4:number = M5 - (P0 * L5);
    var P5:number = M6 - (P0 * L6);

    var Q0:number = N1/L1;
    var Q1:number = N2 - (Q0 * L2);
    var Q2:number = N3 - (Q0 * L3);
    var Q3:number = N4 - (Q0 * L4);
    var Q4:number = N5 - (Q0 * L5);
    var Q5:number = N6 - (Q0 * L6);

    var S0:number = O1/L1;
    var S1:number = O2 - (S0 * L2);
    var S2:number = O3 - (S0 * L3);
    var S3:number = O4 - (S0 * L4);
    var S4:number = O5 - (S0 * L5);
    var S5:number = O6 - (S0 * L6);

    var S00:number = O01/L1;
    var S01:number = O02 - (S00 * L2);
    var S02:number = O03 - (S00 * L3);
    var S03:number = O04 - (S00 * L4);
    var S04:number = O05 - (S00 * L5);
    var S05:number = O06 - (S00 * L6);

    ///////////////////////////////////////////////////////////////
    
    var T0:number = Q1/P1;
    var T1:number = Q2 - (T0 * P2);
    var T2:number = Q3 - (T0 * P3);
    var T3:number = Q4 - (T0 * P4);
    var T4:number = Q5 - (T0 * P5);

    var U0:number = S1/P1;
    var U1:number = S2 - (U0 * P1);
    var U2:number = S3 - (U0 * P3);
    var U3:number = S4 - (U0 * P4);
    var U4:number = S5 - (U0 * P5);

    var U00:number = S01/P1;
    var U01:number = S02 - (U00 * P1);
    var U02:number = S03 - (U00 * P3);
    var U03:number = S04 - (U00 * P4);
    var U04:number = S05 - (U00 * P5);

    ///////////////////////////////////////////////////////////////
    
    var V0:number = U1/T1;
    var V1:number = U2 - (V0 * T2);
    var V2:number = U3 - (V0 * T3);
    var V3:number = U4 - (V0 * T4);

    var V00:number = U01/T1;
    var V01:number = U02 - (V00 * T2);
    var V02:number = U03 - (V00 * T3);
    var V03:number = U04 - (V00 * T4);

    ///////////////////////////////////////////////////////////////
    var X0:number = V01/V1;
    var X1:number = V02 - (X0 * V2);
    var X2:number = V03 - (X0 * V3);

    ///////////////////////////////////////////////////////////////
    
    var R0:number = X2/X1;
    var R1:number = (V3-V2*R0)/V1;
    var R2:number = (T4-T3*R0-T2*R1)/T1;
    var R3:number = (P5-P4*R0-P3*R1-P2*R2)/P1;
    var R4:number = (L6-L5*R0-L4*R1-L3*R2-L2*R3)/L1;
    var R5:number = (G7-G6*R0-G5*R1-G4*R2-G3*R3-G2*R2)/G1;
    var R6:number = (A8-A7*R0-A6*R1-A5*R2-A4*R3-A3*R4-A2*R5)/A1;
    var R7:number = ((Number((document.getElementById('result_0') as HTMLInputElement).value)
    -Number((document.getElementById('conta_07') as HTMLInputElement).value)*R0)
    -Number((document.getElementById('conta_06') as HTMLInputElement).value)*R1
    -Number((document.getElementById('conta_05') as HTMLInputElement).value)*R2
    -Number((document.getElementById('conta_04') as HTMLInputElement).value)*R3)
    -Number((document.getElementById('conta_03') as HTMLInputElement).value)*R4
    -Number((document.getElementById('conta_02') as HTMLInputElement).value)*R5
    -Number((document.getElementById('conta_01') as HTMLInputElement).value)*R6
    /Number((document.getElementById('conta_00') as HTMLInputElement).value);
    
    this.resultados=[
      {label:'0', value: [A0.toFixed(2), A1.toFixed(2),A2.toFixed(2),A3.toFixed(2),A4.toFixed(2),A5.toFixed(2),A6.toFixed(2),A7.toFixed(2),A8.toFixed(2)]},
      {label:'1', value: [B0.toFixed(2), B1.toFixed(2),B2.toFixed(2),B3.toFixed(2),B4.toFixed(2),B5.toFixed(2),B6.toFixed(2),B7.toFixed(2),B8.toFixed(2)]},
      {label:'2', value: [C0.toFixed(2), C1.toFixed(2),C2.toFixed(2),C3.toFixed(2),C4.toFixed(2),C5.toFixed(2),C6.toFixed(2),C7.toFixed(2),C8.toFixed(2)]},
      {label:'3', value: [D0.toFixed(2), D1.toFixed(2),D2.toFixed(2),D3.toFixed(2),D4.toFixed(2),D5.toFixed(2),D6.toFixed(2),D7.toFixed(2),D8.toFixed(2)]},
      {label:'4', value: [E0.toFixed(2), E1.toFixed(2),E2.toFixed(2),E3.toFixed(2),E4.toFixed(2),E5.toFixed(2),E6.toFixed(2),E7.toFixed(2),E8.toFixed(2)]},
      {label:'4', value: [E0.toFixed(2), F1.toFixed(2),F2.toFixed(2),F3.toFixed(2),F4.toFixed(2),F5.toFixed(2),F6.toFixed(2),F7.toFixed(2),F8.toFixed(2)]},
      {label:'4', value: [F00.toFixed(2), F01.toFixed(2),F02.toFixed(2),F03.toFixed(2),F04.toFixed(2),F05.toFixed(2),F06.toFixed(2),F07.toFixed(2),F08.toFixed(2)]},

      {label:'6', value: [G0.toFixed(2), G1.toFixed(2),G2.toFixed(2),G3.toFixed(2),G4.toFixed(2),G5.toFixed(2),G6.toFixed(2),G7.toFixed(2)]},
      {label:'7', value: [H0.toFixed(2), H1.toFixed(2),H2.toFixed(2),H3.toFixed(2),H4.toFixed(2),H5.toFixed(2),H6.toFixed(2),H7.toFixed(2)]},
      {label:'8', value: [I0.toFixed(2), I1.toFixed(2),I2.toFixed(2),I3.toFixed(2),I4.toFixed(2),I5.toFixed(2),I6.toFixed(2),I7.toFixed(2)]},
      {label:'9', value: [J0.toFixed(2), J1.toFixed(2),J2.toFixed(2),J3.toFixed(2),J4.toFixed(2),J5.toFixed(2),J6.toFixed(2),J7.toFixed(2)]},
      {label:'9', value: [K0.toFixed(2), K1.toFixed(2),J2.toFixed(2),K3.toFixed(2),K4.toFixed(2),K5.toFixed(2),K6.toFixed(2),K7.toFixed(2)]},
      {label:'9', value: [K00.toFixed(2), K01.toFixed(2),K02.toFixed(2),K03.toFixed(2),K04.toFixed(2),K05.toFixed(2),K06.toFixed(2),K07.toFixed(2)]},

      {label:'9', value: [L0.toFixed(2), L1.toFixed(2),L2.toFixed(2),L3.toFixed(2),L4.toFixed(2),L5.toFixed(2),L6.toFixed(2)]},
      {label:'9', value: [M0.toFixed(2), M1.toFixed(2),M2.toFixed(2),M3.toFixed(2),M4.toFixed(2),M5.toFixed(2),M6.toFixed(2)]},
      {label:'9', value: [N0.toFixed(2), N1.toFixed(2),N2.toFixed(2),N3.toFixed(2),N4.toFixed(2),N5.toFixed(2),N6.toFixed(2)]},
      {label:'10', value: [O0.toFixed(2), O1.toFixed(2),O2.toFixed(2),O3.toFixed(2),O4.toFixed(2),O5.toFixed(2),O6.toFixed(2)]},
      {label:'10', value: [O00.toFixed(2), O01.toFixed(2),O02.toFixed(2),O03.toFixed(2),O04.toFixed(2),O05.toFixed(2),O06.toFixed(2)]},

      {label:'10', value: [P0.toFixed(2), P1.toFixed(2),P2.toFixed(2),P3.toFixed(2),P4.toFixed(2),P5.toFixed(2)]},
      {label:'10', value: [Q0.toFixed(2), Q1.toFixed(2),Q2.toFixed(2),Q3.toFixed(2),Q4.toFixed(2),Q5.toFixed(2)]},
      {label:'10', value: [S0.toFixed(2), S1.toFixed(2),S2.toFixed(2),S3.toFixed(2),S4.toFixed(2),S5.toFixed(2)]},
      {label:'10', value: [S00.toFixed(2), S01.toFixed(2),S02.toFixed(2),S03.toFixed(2),S04.toFixed(2),S05.toFixed(2)]},

      {label:'10', value: [T0.toFixed(2), T1.toFixed(2),T2.toFixed(2),T3.toFixed(2),T4.toFixed(2)]},
      {label:'10', value: [U0.toFixed(2), U1.toFixed(2),U2.toFixed(2),U3.toFixed(2),U4.toFixed(2)]},
      {label:'10', value: [U00.toFixed(2), U01.toFixed(2),U02.toFixed(2),U03.toFixed(2),U04.toFixed(2)]},

      {label:'10', value: [V0.toFixed(2), V1.toFixed(2),V2.toFixed(2),V3.toFixed(2)]},
      {label:'10', value: [V0.toFixed(2), V01.toFixed(2),V02.toFixed(2),V02.toFixed(2),V03.toFixed(2)]},

      {label:'10', value: [X0.toFixed(2), X1.toFixed(2),X2.toFixed(2)]},


      {label:'R', value: [R0.toFixed(2), R1.toFixed(2),R2.toFixed(2),R3.toFixed(2),R4.toFixed(2),R5.toFixed(2),R6.toFixed(2),R7.toFixed(2)]}
    ]; 
    this.presentModal();
  }
  escalaDe9(){
    var A0:number = Number((document.getElementById('conta_10') as HTMLInputElement).value)/Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var A1:number = Number((document.getElementById('conta_11') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var A2:number = Number((document.getElementById('conta_12') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var A3:number = Number((document.getElementById('conta_13') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var A4:number = Number((document.getElementById('conta_14') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var A5:number = Number((document.getElementById('conta_15') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var A6:number = Number((document.getElementById('conta_16') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var A7:number = Number((document.getElementById('conta_17') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var A8:number = Number((document.getElementById('conta_18') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var A9:number = Number((document.getElementById('result_1') as HTMLInputElement).value) - A0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var B0:number = Number((document.getElementById('conta_20') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var B1:number = Number((document.getElementById('conta_21') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var B2:number = Number((document.getElementById('conta_22') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var B3:number = Number((document.getElementById('conta_23') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var B4:number = Number((document.getElementById('conta_24') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var B5:number = Number((document.getElementById('conta_25') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var B6:number = Number((document.getElementById('conta_26') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var B7:number = Number((document.getElementById('conta_27') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var B8:number = Number((document.getElementById('conta_28') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var B9:number = Number((document.getElementById('result_2') as HTMLInputElement).value) - B0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var C0:number = Number((document.getElementById('conta_30') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var C1:number = Number((document.getElementById('conta_31') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var C2:number = Number((document.getElementById('conta_32') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var C3:number = Number((document.getElementById('conta_33') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var C4:number = Number((document.getElementById('conta_34') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var C5:number = Number((document.getElementById('conta_35') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var C6:number = Number((document.getElementById('conta_36') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var C7:number = Number((document.getElementById('conta_37') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var C8:number = Number((document.getElementById('conta_38') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var C9:number = Number((document.getElementById('result_3') as HTMLInputElement).value) - C0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var D0:number = Number((document.getElementById('conta_40') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var D1:number = Number((document.getElementById('conta_41') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var D2:number = Number((document.getElementById('conta_42') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var D3:number = Number((document.getElementById('conta_43') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var D4:number = Number((document.getElementById('conta_44') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var D5:number = Number((document.getElementById('conta_45') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var D6:number = Number((document.getElementById('conta_46') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var D7:number = Number((document.getElementById('conta_47') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var D8:number = Number((document.getElementById('conta_48') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var D9:number = Number((document.getElementById('result_4') as HTMLInputElement).value) - D0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var E0:number = Number((document.getElementById('conta_50') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var E1:number = Number((document.getElementById('conta_51') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var E2:number = Number((document.getElementById('conta_52') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var E3:number = Number((document.getElementById('conta_53') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var E4:number = Number((document.getElementById('conta_54') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var E5:number = Number((document.getElementById('conta_55') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var E6:number = Number((document.getElementById('conta_56') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var E7:number = Number((document.getElementById('conta_57') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var E8:number = Number((document.getElementById('conta_58') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var E9:number = Number((document.getElementById('result_5') as HTMLInputElement).value) - E0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var F0:number = Number((document.getElementById('conta_60') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var F1:number = Number((document.getElementById('conta_61') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var F2:number = Number((document.getElementById('conta_62') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var F3:number = Number((document.getElementById('conta_63') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var F4:number = Number((document.getElementById('conta_64') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var F5:number = Number((document.getElementById('conta_65') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var F6:number = Number((document.getElementById('conta_66') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var F7:number = Number((document.getElementById('conta_67') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var F8:number = Number((document.getElementById('conta_68') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var F9:number = Number((document.getElementById('result_6') as HTMLInputElement).value) - F0 * Number((document.getElementById('result_0') as HTMLInputElement).value);
    
    var F00:number = Number((document.getElementById('conta_70') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var F01:number = Number((document.getElementById('conta_71') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var F02:number = Number((document.getElementById('conta_72') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var F03:number = Number((document.getElementById('conta_73') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var F04:number = Number((document.getElementById('conta_74') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var F05:number = Number((document.getElementById('conta_75') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var F06:number = Number((document.getElementById('conta_76') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var F07:number = Number((document.getElementById('conta_77') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var F08:number = Number((document.getElementById('conta_78') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var F09:number = Number((document.getElementById('result_7') as HTMLInputElement).value) - F00 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var F10:number = Number((document.getElementById('conta_80') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var F11:number = Number((document.getElementById('conta_81') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var F12:number = Number((document.getElementById('conta_82') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var F13:number = Number((document.getElementById('conta_83') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var F14:number = Number((document.getElementById('conta_84') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var F15:number = Number((document.getElementById('conta_85') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var F16:number = Number((document.getElementById('conta_86') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var F17:number = Number((document.getElementById('conta_87') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var F18:number = Number((document.getElementById('conta_88') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var F19:number = Number((document.getElementById('result_8') as HTMLInputElement).value) - F10 * Number((document.getElementById('result_0') as HTMLInputElement).value);
    ///////////////////////////////////////////////////////////////

    var G0:number = B1/A1;
    var G1:number = B2 - (G0 * A2);
    var G2:number = B3 - (G0 * A3);
    var G3:number = B4 - (G0 * A4);
    var G4:number = B5 - (G0 * A5);
    var G5:number = B6 - (G0 * A6);
    var G6:number = B7 - (G0 * A7);
    var G7:number = B8 - (G0 * A8);
    var G8:number = B9 - (G0 * A9);

    var H0:number = C1/A1;
    var H1:number = C2 - (H0 * A2);
    var H2:number = C3 - (H0 * A3);
    var H3:number = C4 - (H0 * A4);
    var H4:number = C5 - (H0 * A5);
    var H5:number = C6 - (H0 * A6);
    var H6:number = C7 - (H0 * A7);
    var H7:number = C8 - (H0 * A8);
    var H8:number = C9 - (H0 * A9);

    var I0:number = D1/A1;
    var I1:number = D2 - (I0 * A2);
    var I2:number = D3 - (I0 * A3);
    var I3:number = D4 - (I0 * A4);
    var I4:number = D5 - (I0 * A5);
    var I5:number = D6 - (I0 * A6);
    var I6:number = D7 - (I0 * A7);
    var I7:number = D8 - (I0 * A8);
    var I8:number = D9 - (I0 * A9);

    var J0:number = E1/A1;
    var J1:number = E2 - (J0 * A2);
    var J2:number = E3 - (J0 * A3);
    var J3:number = E4 - (J0 * A4);
    var J4:number = E5 - (J0 * A5);
    var J5:number = E6 - (J0 * A6);
    var J6:number = E7 - (J0 * A7);
    var J7:number = E8 - (J0 * A8);
    var J8:number = E9 - (J0 * A9);

    var K0:number = F1/A1;
    var K1:number = F2 - (K0 * A2);
    var K2:number = F3 - (K0 * A3);
    var K3:number = F4 - (K0 * A4);
    var K4:number = F5 - (K0 * A5);
    var K5:number = F6 - (K0 * A6);
    var K6:number = F7 - (K0 * A7);
    var K7:number = F8 - (K0 * A8);
    var K8:number = F9 - (K0 * A9);

    var K00:number = F01/A1;
    var K01:number = F02 - (K00 * A2);
    var K02:number = F03 - (K00 * A3);
    var K03:number = F04 - (K00 * A4);
    var K04:number = F05 - (K00 * A5);
    var K05:number = F06 - (K00 * A6);
    var K06:number = F07 - (K00 * A7);
    var K07:number = F08 - (K00 * A8);
    var K08:number = F09 - (K00 * A9);

    var K10:number = F11/A1;
    var K11:number = F12 - (K10 * A2);
    var K12:number = F13 - (K10 * A3);
    var K13:number = F14 - (K10 * A4);
    var K14:number = F15 - (K10 * A5);
    var K15:number = F16 - (K10 * A6);
    var K16:number = F17 - (K10 * A7);
    var K17:number = F18 - (K10 * A8);
    var K18:number = F19 - (K10 * A9);

    ///////////////////////////////////////////////////////////////
    var L0:number = H1/G1;
    var L1:number = H2 - (L0 * G2);
    var L2:number = H3 - (L0 * G3);
    var L3:number = H4 - (L0 * G4);
    var L4:number = H5 - (L0 * G5);
    var L5:number = H6 - (L0 * G6);
    var L6:number = H7 - (L0 * G7);
    var L7:number = H8 - (L0 * G8);

    var M0:number = I1/G1;
    var M1:number = I2 - (M0 * G2);
    var M2:number = I3 - (M0 * G3);
    var M3:number = I4 - (M0 * G4);
    var M4:number = I5 - (M0 * G5);
    var M5:number = I6 - (M0 * G5);
    var M6:number = I7 - (M0 * G7);
    var M7:number = I8 - (M0 * G8);

    var N0:number = J1/G1;
    var N1:number = J2 - (N0 * G2);
    var N2:number = J3 - (N0 * G3);
    var N3:number = J4 - (N0 * G4);
    var N4:number = J5 - (N0 * G5);
    var N5:number = J6 - (N0 * G6);
    var N6:number = J7 - (N0 * G7);
    var N7:number = J8 - (N0 * G8);

    var O0:number = K1/G1;
    var O1:number = K2 - (O0 * G2);
    var O2:number = K3 - (O0 * G3);
    var O3:number = K4 - (O0 * G4);
    var O4:number = K5 - (O0 * G5);
    var O5:number = K6 - (O0 * G6);
    var O6:number = K7 - (O0 * G7);
    var O7:number = K8 - (O0 * G8);

    var O00:number = K01/G1;
    var O01:number = K02 - (O00 * G2);
    var O02:number = K03 - (O00 * G3);
    var O03:number = K04 - (O00 * G4);
    var O04:number = K05 - (O00 * G5);
    var O05:number = K06 - (O00 * G6);
    var O06:number = K07 - (O00 * G7);
    var O07:number = K08 - (O00 * G8);

    var O10:number = K11/G1;
    var O11:number = K12 - (O10 * G2);
    var O12:number = K13 - (O10 * G3);
    var O13:number = K14 - (O10 * G4);
    var O14:number = K15 - (O10 * G5);
    var O15:number = K16 - (O10 * G6);
    var O16:number = K17 - (O10 * G7);
    var O17:number = K18 - (O10 * G8);

    ///////////////////////////////////////////////////////////////
    var P0:number = M1/L1;
    var P1:number = M2 - (P0 * L2);
    var P2:number = M3 - (P0 * L3);
    var P3:number = M4 - (P0 * L4);
    var P4:number = M5 - (P0 * L5);
    var P5:number = M6 - (P0 * L6);
    var P6:number = M7 - (P0 * L7);

    var Q0:number = N1/L1;
    var Q1:number = N2 - (Q0 * L2);
    var Q2:number = N3 - (Q0 * L3);
    var Q3:number = N4 - (Q0 * L4);
    var Q4:number = N5 - (Q0 * L5);
    var Q5:number = N6 - (Q0 * L6);
    var Q6:number = N7 - (Q0 * L7);

    var S0:number = O1/L1;
    var S1:number = O2 - (S0 * L2);
    var S2:number = O3 - (S0 * L3);
    var S3:number = O4 - (S0 * L4);
    var S4:number = O5 - (S0 * L5);
    var S5:number = O6 - (S0 * L6);
    var S6:number = O7 - (S0 * L7);

    var S00:number = O01/L1;
    var S01:number = O02 - (S00 * L2);
    var S02:number = O03 - (S00 * L3);
    var S03:number = O04 - (S00 * L4);
    var S04:number = O05 - (S00 * L5);
    var S05:number = O06 - (S00 * L6);
    var S06:number = O07 - (S00 * L7);

    var S10:number = O11/L1;
    var S11:number = O12 - (S10 * L2);
    var S12:number = O13 - (S10 * L3);
    var S13:number = O14 - (S10 * L4);
    var S14:number = O15 - (S10 * L5);
    var S15:number = O16 - (S10 * L6);
    var S16:number = O17 - (S10 * L7);

    ///////////////////////////////////////////////////////////////
    
    var T0:number = Q1/P1;
    var T1:number = Q2 - (T0 * P2);
    var T2:number = Q3 - (T0 * P3);
    var T3:number = Q4 - (T0 * P4);
    var T4:number = Q5 - (T0 * P5);
    var T5:number = Q6 - (T0 * P6);

    var U0:number = S1/P1;
    var U1:number = S2 - (U0 * P1);
    var U2:number = S3 - (U0 * P3);
    var U3:number = S4 - (U0 * P4);
    var U4:number = S5 - (U0 * P5);
    var U5:number = S6 - (U0 * P6);

    var U00:number = S01/P1;
    var U01:number = S02 - (U00 * P1);
    var U02:number = S03 - (U00 * P3);
    var U03:number = S04 - (U00 * P4);
    var U04:number = S05 - (U00 * P5);
    var U05:number = S06 - (U00 * P6);

    var U10:number = S11/P1;
    var U11:number = S12 - (U10 * P1);
    var U12:number = S13 - (U10 * P3);
    var U13:number = S14 - (U10 * P4);
    var U14:number = S15 - (U10 * P5);
    var U15:number = S16 - (U10 * P6);

    ///////////////////////////////////////////////////////////////
    
    var V0:number = U1/T1;
    var V1:number = U2 - (V0 * T2);
    var V2:number = U3 - (V0 * T3);
    var V3:number = U4 - (V0 * T4);
    var V4:number = U5 - (V0 * T5);

    var V00:number = U01/T1;
    var V01:number = U02 - (V00 * T2);
    var V02:number = U03 - (V00 * T3);
    var V03:number = U04 - (V00 * T4);
    var V04:number = U05 - (V00 * T5);

    var V10:number = U11/T1;
    var V11:number = U12 - (V10 * T2);
    var V12:number = U13 - (V10 * T3);
    var V13:number = U14 - (V10 * T4);
    var V14:number = U15 - (V10 * T5);

    ///////////////////////////////////////////////////////////////
    var X0:number = V01/V1;
    var X1:number = V02 - (X0 * V2);
    var X2:number = V03 - (X0 * V3);
    var X3:number = V04 - (X0 * V4);

    var X00:number = V11/V1;
    var X01:number = V12 - (X00 * V2);
    var X02:number = V13 - (X00 * V3);
    var X03:number = V14 - (X00 * V4);

    ///////////////////////////////////////////////////////////////

    var X10:number = X01/X1;
    var X11:number = X02 - (X10 * X2);
    var X12:number = X03 - (X10 * X3);

    ///////////////////////////////////////////////////////////////
    var R0:number = X12/X11;
    var R1:number = (X3-X2*R0)/X1;
    var R2:number = (V4-V3*R0-V2*R1)/V1;
    var R3:number = (T5-T4*R0-T3*R1-T2*R2)/T1;
    var R4:number = (P6-P5*R0-P4*R1-P3*R2-P2*R3)/P1;
    var R5:number = (L7-L6*R0-L5*R1-L4*R2-L3*R3-L2*R4)/L1;
    var R6:number = (G8-G7*R0-G6*R1-G5*R2-G4*R3-G3*R2-G2*R3)/G1;
    var R7:number = (A9-A8*R0-A7*R1-A6*R2-A5*R3-A4*R4-A3*R5-A2*R6)/A1;
    var R8:number = ((Number((document.getElementById('result_0') as HTMLInputElement).value)
    -Number((document.getElementById('conta_08') as HTMLInputElement).value)*R0)
    -Number((document.getElementById('conta_07') as HTMLInputElement).value)*R1
    -Number((document.getElementById('conta_06') as HTMLInputElement).value)*R2
    -Number((document.getElementById('conta_05') as HTMLInputElement).value)*R3)
    -Number((document.getElementById('conta_04') as HTMLInputElement).value)*R4
    -Number((document.getElementById('conta_03') as HTMLInputElement).value)*R5
    -Number((document.getElementById('conta_02') as HTMLInputElement).value)*R6
    -Number((document.getElementById('conta_01') as HTMLInputElement).value)*R7
    /Number((document.getElementById('conta_00') as HTMLInputElement).value);

    this.resultados=[
      {label:'0', value: [A0.toFixed(2), A1.toFixed(2),A2.toFixed(2),A3.toFixed(2),A4.toFixed(2),A5.toFixed(2),A6.toFixed(2),A7.toFixed(2),A8.toFixed(2),A9.toFixed(2)]},
      {label:'1', value: [B0.toFixed(2), B1.toFixed(2),B2.toFixed(2),B3.toFixed(2),B4.toFixed(2),B5.toFixed(2),B6.toFixed(2),B7.toFixed(2),B8.toFixed(2),B9.toFixed(2)]},
      {label:'2', value: [C0.toFixed(2), C1.toFixed(2),C2.toFixed(2),C3.toFixed(2),C4.toFixed(2),C5.toFixed(2),C6.toFixed(2),C7.toFixed(2),C8.toFixed(2),C9.toFixed(2)]},
      {label:'3', value: [D0.toFixed(2), D1.toFixed(2),D2.toFixed(2),D3.toFixed(2),D4.toFixed(2),D5.toFixed(2),D6.toFixed(2),D7.toFixed(2),D8.toFixed(2),D9.toFixed(2)]},
      {label:'4', value: [E0.toFixed(2), E1.toFixed(2),E2.toFixed(2),E3.toFixed(2),E4.toFixed(2),E5.toFixed(2),E6.toFixed(2),E7.toFixed(2),E8.toFixed(2),E9.toFixed(2)]},
      {label:'4', value: [E0.toFixed(2), F1.toFixed(2),F2.toFixed(2),F3.toFixed(2),F4.toFixed(2),F5.toFixed(2),F6.toFixed(2),F7.toFixed(2),F8.toFixed(2),F9.toFixed(2)]},
      {label:'4', value: [F00.toFixed(2), F01.toFixed(2),F02.toFixed(2),F03.toFixed(2),F04.toFixed(2),F05.toFixed(2),F06.toFixed(2),F07.toFixed(2),F08.toFixed(2),F09.toFixed(2)]},
      {label:'4', value: [F10.toFixed(2), F11.toFixed(2),F12.toFixed(2),F13.toFixed(2),F14.toFixed(2),F15.toFixed(2),F16.toFixed(2),F17.toFixed(2),F18.toFixed(2),F19.toFixed(2)]},

      {label:'6', value: [G0.toFixed(2), G1.toFixed(2),G2.toFixed(2),G3.toFixed(2),G4.toFixed(2),G5.toFixed(2),G6.toFixed(2),G7.toFixed(2),G8.toFixed(2)]},
      {label:'7', value: [H0.toFixed(2), H1.toFixed(2),H2.toFixed(2),H3.toFixed(2),H4.toFixed(2),H5.toFixed(2),H6.toFixed(2),H7.toFixed(2),H8.toFixed(2)]},
      {label:'8', value: [I0.toFixed(2), I1.toFixed(2),I2.toFixed(2),I3.toFixed(2),I4.toFixed(2),I5.toFixed(2),I6.toFixed(2),I7.toFixed(2),I8.toFixed(2)]},
      {label:'9', value: [J0.toFixed(2), J1.toFixed(2),J2.toFixed(2),J3.toFixed(2),J4.toFixed(2),J5.toFixed(2),J6.toFixed(2),J7.toFixed(2),J8.toFixed(2)]},
      {label:'9', value: [K0.toFixed(2), K1.toFixed(2),J2.toFixed(2),K3.toFixed(2),K4.toFixed(2),K5.toFixed(2),K6.toFixed(2),K7.toFixed(2),K8.toFixed(2)]},
      {label:'9', value: [K00.toFixed(2), K01.toFixed(2),K02.toFixed(2),K03.toFixed(2),K04.toFixed(2),K05.toFixed(2),K06.toFixed(2),K07.toFixed(2),K08.toFixed(2)]},
      {label:'9', value: [K10.toFixed(2), K11.toFixed(2),K12.toFixed(2),K13.toFixed(2),K14.toFixed(2),K15.toFixed(2),K16.toFixed(2),K17.toFixed(2),K18.toFixed(2)]},

      {label:'9', value: [L0.toFixed(2), L1.toFixed(2),L2.toFixed(2),L3.toFixed(2),L4.toFixed(2),L5.toFixed(2),L6.toFixed(2),L7.toFixed(2)]},
      {label:'9', value: [M0.toFixed(2), M1.toFixed(2),M2.toFixed(2),M3.toFixed(2),M4.toFixed(2),M5.toFixed(2),M6.toFixed(2),M7.toFixed(2)]},
      {label:'9', value: [N0.toFixed(2), N1.toFixed(2),N2.toFixed(2),N3.toFixed(2),N4.toFixed(2),N5.toFixed(2),N6.toFixed(2),N7.toFixed(2)]},
      {label:'10', value: [O0.toFixed(2), O1.toFixed(2),O2.toFixed(2),O3.toFixed(2),O4.toFixed(2),O5.toFixed(2),O6.toFixed(2),O7.toFixed(2)]},
      {label:'10', value: [O00.toFixed(2), O01.toFixed(2),O02.toFixed(2),O03.toFixed(2),O04.toFixed(2),O05.toFixed(2),O06.toFixed(2),O07.toFixed(2)]},
      {label:'10', value: [O10.toFixed(2), O11.toFixed(2),O12.toFixed(2),O13.toFixed(2),O14.toFixed(2),O15.toFixed(2),O16.toFixed(2),O17.toFixed(2)]},

      {label:'10', value: [P0.toFixed(2), P1.toFixed(2),P2.toFixed(2),P3.toFixed(2),P4.toFixed(2),P5.toFixed(2),P6.toFixed(2)]},
      {label:'10', value: [Q0.toFixed(2), Q1.toFixed(2),Q2.toFixed(2),Q3.toFixed(2),Q4.toFixed(2),Q5.toFixed(2),Q6.toFixed(2)]},
      {label:'10', value: [S0.toFixed(2), S1.toFixed(2),S2.toFixed(2),S3.toFixed(2),S4.toFixed(2),S5.toFixed(2),S6.toFixed(2)]},
      {label:'10', value: [S00.toFixed(2), S01.toFixed(2),S02.toFixed(2),S03.toFixed(2),S04.toFixed(2),S05.toFixed(2),S06.toFixed(2)]},
      {label:'10', value: [S10.toFixed(2), S11.toFixed(2),S12.toFixed(2),S13.toFixed(2),S14.toFixed(2),S15.toFixed(2),S16.toFixed(2)]},

      {label:'10', value: [T0.toFixed(2), T1.toFixed(2),T2.toFixed(2),T3.toFixed(2),T4.toFixed(2),T5.toFixed(2)]},
      {label:'10', value: [U0.toFixed(2), U1.toFixed(2),U2.toFixed(2),U3.toFixed(2),U4.toFixed(2),U5.toFixed(2)]},
      {label:'10', value: [U00.toFixed(2), U01.toFixed(2),U02.toFixed(2),U03.toFixed(2),U04.toFixed(2),U05.toFixed(2)]},
      {label:'10', value: [U10.toFixed(2), U11.toFixed(2),U12.toFixed(2),U13.toFixed(2),U14.toFixed(2),U15.toFixed(2)]},

      {label:'10', value: [V0.toFixed(2), V1.toFixed(2),V2.toFixed(2),V3.toFixed(2),V4.toFixed(2)]},
      {label:'10', value: [V0.toFixed(2), V01.toFixed(2),V02.toFixed(2),V02.toFixed(2),V03.toFixed(2),V04.toFixed(2)]},
      {label:'10', value: [V0.toFixed(2), V11.toFixed(2),V12.toFixed(2),V12.toFixed(2),V13.toFixed(2),V14.toFixed(2)]},

      {label:'10', value: [X0.toFixed(2), X1.toFixed(2),X2.toFixed(2),X3.toFixed(2)]},
      {label:'10', value: [X0.toFixed(2), X01.toFixed(2),X02.toFixed(2),X03.toFixed(2)]},

      {label:'10', value: [X10.toFixed(2), X11.toFixed(2),X12.toFixed(2)]},


      {label:'R', value: [R0.toFixed(2), R1.toFixed(2),R2.toFixed(2),R3.toFixed(2),R4.toFixed(2),R5.toFixed(2),R6.toFixed(2),R7.toFixed(2),R8.toFixed(2)]}
    ]; 
    this.presentModal();
  }
  escalaDe10(){
    var A0:number = Number((document.getElementById('conta_10') as HTMLInputElement).value)/Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var A1:number = Number((document.getElementById('conta_11') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var A2:number = Number((document.getElementById('conta_12') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var A3:number = Number((document.getElementById('conta_13') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var A4:number = Number((document.getElementById('conta_14') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var A5:number = Number((document.getElementById('conta_15') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var A6:number = Number((document.getElementById('conta_16') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var A7:number = Number((document.getElementById('conta_17') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var A8:number = Number((document.getElementById('conta_18') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var A9:number = Number((document.getElementById('conta_19') as HTMLInputElement).value) - A0 * Number((document.getElementById('conta_09') as HTMLInputElement).value);
    var A10:number = Number((document.getElementById('result_1') as HTMLInputElement).value) - A0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var B0:number = Number((document.getElementById('conta_20') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var B1:number = Number((document.getElementById('conta_21') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var B2:number = Number((document.getElementById('conta_22') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var B3:number = Number((document.getElementById('conta_23') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var B4:number = Number((document.getElementById('conta_24') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var B5:number = Number((document.getElementById('conta_25') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var B6:number = Number((document.getElementById('conta_26') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var B7:number = Number((document.getElementById('conta_27') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var B8:number = Number((document.getElementById('conta_28') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var B9:number = Number((document.getElementById('conta_29') as HTMLInputElement).value) - B0 * Number((document.getElementById('conta_09') as HTMLInputElement).value);
    var B10:number = Number((document.getElementById('result_2') as HTMLInputElement).value) - B0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var C0:number = Number((document.getElementById('conta_30') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var C1:number = Number((document.getElementById('conta_31') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var C2:number = Number((document.getElementById('conta_32') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var C3:number = Number((document.getElementById('conta_33') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var C4:number = Number((document.getElementById('conta_34') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var C5:number = Number((document.getElementById('conta_35') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var C6:number = Number((document.getElementById('conta_36') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var C7:number = Number((document.getElementById('conta_37') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var C8:number = Number((document.getElementById('conta_38') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var C9:number = Number((document.getElementById('conta_39') as HTMLInputElement).value) - C0 * Number((document.getElementById('conta_09') as HTMLInputElement).value);
    var C10:number = Number((document.getElementById('result_3') as HTMLInputElement).value) - C0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var D0:number = Number((document.getElementById('conta_40') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var D1:number = Number((document.getElementById('conta_41') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var D2:number = Number((document.getElementById('conta_42') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var D3:number = Number((document.getElementById('conta_43') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var D4:number = Number((document.getElementById('conta_44') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var D5:number = Number((document.getElementById('conta_45') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var D6:number = Number((document.getElementById('conta_46') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var D7:number = Number((document.getElementById('conta_47') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var D8:number = Number((document.getElementById('conta_48') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var D9:number = Number((document.getElementById('conta_49') as HTMLInputElement).value) - D0 * Number((document.getElementById('conta_09') as HTMLInputElement).value);
    var D10:number = Number((document.getElementById('result_4') as HTMLInputElement).value) - D0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var E0:number = Number((document.getElementById('conta_50') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var E1:number = Number((document.getElementById('conta_51') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var E2:number = Number((document.getElementById('conta_52') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var E3:number = Number((document.getElementById('conta_53') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var E4:number = Number((document.getElementById('conta_54') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var E5:number = Number((document.getElementById('conta_55') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var E6:number = Number((document.getElementById('conta_56') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var E7:number = Number((document.getElementById('conta_57') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var E8:number = Number((document.getElementById('conta_58') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var E9:number = Number((document.getElementById('conta_59') as HTMLInputElement).value) - E0 * Number((document.getElementById('conta_09') as HTMLInputElement).value);
    var E10:number = Number((document.getElementById('result_5') as HTMLInputElement).value) - E0 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var F0:number = Number((document.getElementById('conta_60') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var F1:number = Number((document.getElementById('conta_61') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var F2:number = Number((document.getElementById('conta_62') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var F3:number = Number((document.getElementById('conta_63') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var F4:number = Number((document.getElementById('conta_64') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var F5:number = Number((document.getElementById('conta_65') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var F6:number = Number((document.getElementById('conta_66') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var F7:number = Number((document.getElementById('conta_67') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var F8:number = Number((document.getElementById('conta_68') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var F9:number = Number((document.getElementById('conta_69') as HTMLInputElement).value) - F0 * Number((document.getElementById('conta_09') as HTMLInputElement).value);
    var F100:number = Number((document.getElementById('result_6') as HTMLInputElement).value) - F0 * Number((document.getElementById('result_0') as HTMLInputElement).value);
    
    var F00:number = Number((document.getElementById('conta_70') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var F01:number = Number((document.getElementById('conta_71') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var F02:number = Number((document.getElementById('conta_72') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var F03:number = Number((document.getElementById('conta_73') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var F04:number = Number((document.getElementById('conta_74') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var F05:number = Number((document.getElementById('conta_75') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var F06:number = Number((document.getElementById('conta_76') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var F07:number = Number((document.getElementById('conta_77') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var F08:number = Number((document.getElementById('conta_78') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var F09:number = Number((document.getElementById('conta_79') as HTMLInputElement).value) - F00 * Number((document.getElementById('conta_09') as HTMLInputElement).value);
    var F010:number = Number((document.getElementById('result_7') as HTMLInputElement).value) - F00 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var F10:number = Number((document.getElementById('conta_80') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var F11:number = Number((document.getElementById('conta_81') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var F12:number = Number((document.getElementById('conta_82') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var F13:number = Number((document.getElementById('conta_83') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var F14:number = Number((document.getElementById('conta_84') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var F15:number = Number((document.getElementById('conta_85') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var F16:number = Number((document.getElementById('conta_86') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var F17:number = Number((document.getElementById('conta_87') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var F18:number = Number((document.getElementById('conta_88') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var F19:number = Number((document.getElementById('conta_88') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var F110:number = Number((document.getElementById('result_8') as HTMLInputElement).value) - F10 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    var F20:number = Number((document.getElementById('conta_90') as HTMLInputElement).value) / Number((document.getElementById('conta_00') as HTMLInputElement).value);
    var F21:number = Number((document.getElementById('conta_91') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_01') as HTMLInputElement).value);
    var F22:number = Number((document.getElementById('conta_92') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_02') as HTMLInputElement).value);
    var F23:number = Number((document.getElementById('conta_93') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_03') as HTMLInputElement).value);
    var F24:number = Number((document.getElementById('conta_94') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_04') as HTMLInputElement).value);
    var F25:number = Number((document.getElementById('conta_95') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_05') as HTMLInputElement).value);
    var F26:number = Number((document.getElementById('conta_96') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_06') as HTMLInputElement).value);
    var F27:number = Number((document.getElementById('conta_97') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_07') as HTMLInputElement).value);
    var F28:number = Number((document.getElementById('conta_98') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var F29:number = Number((document.getElementById('conta_98') as HTMLInputElement).value) - F10 * Number((document.getElementById('conta_08') as HTMLInputElement).value);
    var F210:number = Number((document.getElementById('result_9') as HTMLInputElement).value) - F10 * Number((document.getElementById('result_0') as HTMLInputElement).value);

    ///////////////////////////////////////////////////////////////

    var G0:number = B1/A1;
    var G1:number = B2 - (G0 * A2);
    var G2:number = B3 - (G0 * A3);
    var G3:number = B4 - (G0 * A4);
    var G4:number = B5 - (G0 * A5);
    var G5:number = B6 - (G0 * A6);
    var G6:number = B7 - (G0 * A7);
    var G7:number = B8 - (G0 * A8);
    var G8:number = B9 - (G0 * A9);
    var G9:number = B10 - (G0 * A10);

    var H0:number = C1/A1;
    var H1:number = C2 - (H0 * A2);
    var H2:number = C3 - (H0 * A3);
    var H3:number = C4 - (H0 * A4);
    var H4:number = C5 - (H0 * A5);
    var H5:number = C6 - (H0 * A6);
    var H6:number = C7 - (H0 * A7);
    var H7:number = C8 - (H0 * A8);
    var H8:number = C9 - (H0 * A9);
    var H9:number = C10 - (H0 * A10);

    var I0:number = D1/A1;
    var I1:number = D2 - (I0 * A2);
    var I2:number = D3 - (I0 * A3);
    var I3:number = D4 - (I0 * A4);
    var I4:number = D5 - (I0 * A5);
    var I5:number = D6 - (I0 * A6);
    var I6:number = D7 - (I0 * A7);
    var I7:number = D8 - (I0 * A8);
    var I8:number = D9 - (I0 * A9);
    var I9:number = D10 - (I0 * A10);

    var J0:number = E1/A1;
    var J1:number = E2 - (J0 * A2);
    var J2:number = E3 - (J0 * A3);
    var J3:number = E4 - (J0 * A4);
    var J4:number = E5 - (J0 * A5);
    var J5:number = E6 - (J0 * A6);
    var J6:number = E7 - (J0 * A7);
    var J7:number = E8 - (J0 * A8);
    var J8:number = E9 - (J0 * A9);
    var J9:number = E10 - (J0 * A10);

    var K0:number = F1/A1;
    var K1:number = F2 - (K0 * A2);
    var K2:number = F3 - (K0 * A3);
    var K3:number = F4 - (K0 * A4);
    var K4:number = F5 - (K0 * A5);
    var K5:number = F6 - (K0 * A6);
    var K6:number = F7 - (K0 * A7);
    var K7:number = F8 - (K0 * A8);
    var K8:number = F9 - (K0 * A9);
    var K9:number = F100 - (K0 * A10);

    var K00:number = F01/A1;
    var K01:number = F02 - (K00 * A2);
    var K02:number = F03 - (K00 * A3);
    var K03:number = F04 - (K00 * A4);
    var K04:number = F05 - (K00 * A5);
    var K05:number = F06 - (K00 * A6);
    var K06:number = F07 - (K00 * A7);
    var K07:number = F08 - (K00 * A8);
    var K08:number = F09 - (K00 * A9);
    var K09:number = F010 - (K00 * A10);

    var K10:number = F11/A1;
    var K11:number = F12 - (K10 * A2);
    var K12:number = F13 - (K10 * A3);
    var K13:number = F14 - (K10 * A4);
    var K14:number = F15 - (K10 * A5);
    var K15:number = F16 - (K10 * A6);
    var K16:number = F17 - (K10 * A7);
    var K17:number = F18 - (K10 * A8);
    var K18:number = F19 - (K10 * A9);
    var K19:number = F110 - (K10 * A10);

    var K20:number = F21/A1;
    var K21:number = F22 - (K20 * A2);
    var K22:number = F23 - (K20 * A3);
    var K23:number = F24 - (K20 * A4);
    var K24:number = F25 - (K20 * A5);
    var K25:number = F26 - (K20 * A6);
    var K26:number = F27 - (K20 * A7);
    var K27:number = F28 - (K20 * A8);
    var K28:number = F29 - (K20 * A9);
    var K29:number = F210 - (K20 * A10);

    ///////////////////////////////////////////////////////////////
    var L0:number = H1/G1;
    var L1:number = H2 - (L0 * G2);
    var L2:number = H3 - (L0 * G3);
    var L3:number = H4 - (L0 * G4);
    var L4:number = H5 - (L0 * G5);
    var L5:number = H6 - (L0 * G6);
    var L6:number = H7 - (L0 * G7);
    var L7:number = H8 - (L0 * G8);
    var L8:number = H9 - (L0 * G9);

    var M0:number = I1/G1;
    var M1:number = I2 - (M0 * G2);
    var M2:number = I3 - (M0 * G3);
    var M3:number = I4 - (M0 * G4);
    var M4:number = I5 - (M0 * G5);
    var M5:number = I6 - (M0 * G5);
    var M6:number = I7 - (M0 * G7);
    var M7:number = I8 - (M0 * G8);
    var M8:number = I9 - (M0 * G9);

    var N0:number = J1/G1;
    var N1:number = J2 - (N0 * G2);
    var N2:number = J3 - (N0 * G3);
    var N3:number = J4 - (N0 * G4);
    var N4:number = J5 - (N0 * G5);
    var N5:number = J6 - (N0 * G6);
    var N6:number = J7 - (N0 * G7);
    var N7:number = J8 - (N0 * G8);
    var N8:number = J9 - (N0 * G9);

    var O0:number = K1/G1;
    var O1:number = K2 - (O0 * G2);
    var O2:number = K3 - (O0 * G3);
    var O3:number = K4 - (O0 * G4);
    var O4:number = K5 - (O0 * G5);
    var O5:number = K6 - (O0 * G6);
    var O6:number = K7 - (O0 * G7);
    var O7:number = K8 - (O0 * G8);
    var O8:number = K9 - (O0 * G9);

    var O00:number = K01/G1;
    var O01:number = K02 - (O00 * G2);
    var O02:number = K03 - (O00 * G3);
    var O03:number = K04 - (O00 * G4);
    var O04:number = K05 - (O00 * G5);
    var O05:number = K06 - (O00 * G6);
    var O06:number = K07 - (O00 * G7);
    var O07:number = K08 - (O00 * G8);
    var O08:number = K09 - (O00 * G9);

    var O10:number = K11/G1;
    var O11:number = K12 - (O10 * G2);
    var O12:number = K13 - (O10 * G3);
    var O13:number = K14 - (O10 * G4);
    var O14:number = K15 - (O10 * G5);
    var O15:number = K16 - (O10 * G6);
    var O16:number = K17 - (O10 * G7);
    var O17:number = K18 - (O10 * G8);
    var O18:number = K19 - (O10 * G9);

    var O20:number = K21/G1;
    var O21:number = K22 - (O20 * G2);
    var O22:number = K23 - (O20 * G3);
    var O23:number = K24 - (O20 * G4);
    var O24:number = K25 - (O20 * G5);
    var O25:number = K26 - (O20 * G6);
    var O26:number = K27 - (O20 * G7);
    var O27:number = K28 - (O20 * G8);
    var O28:number = K29 - (O20 * G9);

    ///////////////////////////////////////////////////////////////
    var P0:number = M1/L1;
    var P1:number = M2 - (P0 * L2);
    var P2:number = M3 - (P0 * L3);
    var P3:number = M4 - (P0 * L4);
    var P4:number = M5 - (P0 * L5);
    var P5:number = M6 - (P0 * L6);
    var P6:number = M7 - (P0 * L7);
    var P7:number = M8 - (P0 * L8);

    var Q0:number = N1/L1;
    var Q1:number = N2 - (Q0 * L2);
    var Q2:number = N3 - (Q0 * L3);
    var Q3:number = N4 - (Q0 * L4);
    var Q4:number = N5 - (Q0 * L5);
    var Q5:number = N6 - (Q0 * L6);
    var Q6:number = N7 - (Q0 * L7);
    var Q7:number = N8 - (Q0 * L8);

    var S0:number = O1/L1;
    var S1:number = O2 - (S0 * L2);
    var S2:number = O3 - (S0 * L3);
    var S3:number = O4 - (S0 * L4);
    var S4:number = O5 - (S0 * L5);
    var S5:number = O6 - (S0 * L6);
    var S6:number = O7 - (S0 * L7);
    var S7:number = O8 - (S0 * L8);

    var S00:number = O01/L1;
    var S01:number = O02 - (S00 * L2);
    var S02:number = O03 - (S00 * L3);
    var S03:number = O04 - (S00 * L4);
    var S04:number = O05 - (S00 * L5);
    var S05:number = O06 - (S00 * L6);
    var S06:number = O07 - (S00 * L7);
    var S07:number = O08 - (S00 * L8);

    var S10:number = O11/L1;
    var S11:number = O12 - (S10 * L2);
    var S12:number = O13 - (S10 * L3);
    var S13:number = O14 - (S10 * L4);
    var S14:number = O15 - (S10 * L5);
    var S15:number = O16 - (S10 * L6);
    var S16:number = O17 - (S10 * L7);
    var S17:number = O18 - (S10 * L8);

    var S20:number = O21/L1;
    var S21:number = O22 - (S20 * L2);
    var S22:number = O23 - (S20 * L3);
    var S23:number = O24 - (S20 * L4);
    var S24:number = O25 - (S20 * L5);
    var S25:number = O26 - (S20 * L6);
    var S26:number = O27 - (S20 * L7);
    var S27:number = O28 - (S20 * L8);

    ///////////////////////////////////////////////////////////////
    
    var T0:number = Q1/P1;
    var T1:number = Q2 - (T0 * P2);
    var T2:number = Q3 - (T0 * P3);
    var T3:number = Q4 - (T0 * P4);
    var T4:number = Q5 - (T0 * P5);
    var T5:number = Q6 - (T0 * P6);
    var T6:number = Q7 - (T0 * P7);

    var U0:number = S1/P1;
    var U1:number = S2 - (U0 * P1);
    var U2:number = S3 - (U0 * P3);
    var U3:number = S4 - (U0 * P4);
    var U4:number = S5 - (U0 * P5);
    var U5:number = S6 - (U0 * P6);
    var U6:number = S7 - (U0 * P7);

    var U00:number = S01/P1;
    var U01:number = S02 - (U00 * P1);
    var U02:number = S03 - (U00 * P3);
    var U03:number = S04 - (U00 * P4);
    var U04:number = S05 - (U00 * P5);
    var U05:number = S06 - (U00 * P6);
    var U06:number = S07 - (U00 * P7);

    var U10:number = S11/P1;
    var U11:number = S12 - (U10 * P1);
    var U12:number = S13 - (U10 * P3);
    var U13:number = S14 - (U10 * P4);
    var U14:number = S15 - (U10 * P5);
    var U15:number = S16 - (U10 * P6);
    var U16:number = S17 - (U10 * P7);

    var U20:number = S21/P1;
    var U21:number = S22 - (U20 * P1);
    var U22:number = S23 - (U20 * P3);
    var U23:number = S24 - (U20 * P4);
    var U24:number = S25 - (U20 * P5);
    var U25:number = S26 - (U20 * P6);
    var U26:number = S27 - (U20 * P7);

    ///////////////////////////////////////////////////////////////
    
    var V0:number = U1/T1;
    var V1:number = U2 - (V0 * T2);
    var V2:number = U3 - (V0 * T3);
    var V3:number = U4 - (V0 * T4);
    var V4:number = U5 - (V0 * T5);
    var V5:number = U6 - (V0 * T6);

    var V00:number = U01/T1;
    var V01:number = U02 - (V00 * T2);
    var V02:number = U03 - (V00 * T3);
    var V03:number = U04 - (V00 * T4);
    var V04:number = U05 - (V00 * T5);
    var V05:number = U06 - (V00 * T6);

    var V10:number = U11/T1;
    var V11:number = U12 - (V10 * T2);
    var V12:number = U13 - (V10 * T3);
    var V13:number = U14 - (V10 * T4);
    var V14:number = U15 - (V10 * T5);
    var V15:number = U16 - (V10 * T6);

    var V20:number = U21/T1;
    var V21:number = U22 - (V20 * T2);
    var V22:number = U23 - (V20 * T3);
    var V23:number = U24 - (V20 * T4);
    var V24:number = U25 - (V20 * T5);
    var V25:number = U26 - (V20 * T6);

    ///////////////////////////////////////////////////////////////
    var X0:number = V01/V1;
    var X1:number = V02 - (X0 * V2);
    var X2:number = V03 - (X0 * V3);
    var X3:number = V04 - (X0 * V4);
    var X4:number = V05 - (X0 * V5);

    var X00:number = V11/V1;
    var X01:number = V12 - (X00 * V2);
    var X02:number = V13 - (X00 * V3);
    var X03:number = V14 - (X00 * V4);
    var X04:number = V15 - (X00 * V5);

    var X10:number = V21/V1;
    var X11:number = V22 - (X10 * V2);
    var X12:number = V23 - (X10 * V3);
    var X13:number = V24 - (X10 * V4);
    var X14:number = V25 - (X10 * V5);

    ///////////////////////////////////////////////////////////////

    var W0:number = X01/X1;
    var W1:number = X02 - (W0 * X2);
    var W2:number = X03 - (W0 * X3);
    var W3:number = X04 - (W0 * X4);

    var W00:number = X11/X1;
    var W01:number = X12 - (W00 * X2);
    var W02:number = X13 - (W00 * X3);
    var W03:number = X14 - (W00 * X4);

    ///////////////////////////////////////////////////////////////

    var W10:number = W01/W1;
    var W11:number = W02 - (W10 * W2);
    var W12:number = W03 - (W10 * W3);

    ///////////////////////////////////////////////////////////////
    var R0:number = W12/W11;
    var R1:number = (W3-W2*R0)/W1
    var R2:number = (X4-X3*R0-X2*R1)/X1;
    var R3:number = (V5-V4*R0-V3*R1-V2*R2)/V1;
    var R4:number = (T6-T5*R0-T4*R1-T3*R2-T2*R3)/T1;
    var R5:number = (P7-P6*R0-P5*R1-P4*R2-P3*R3-P2*R4)/P1;
    var R6:number = (L8-L7*R0-L6*R1-L5*R2-L4*R3-L3*R4-L2*R5)/L1;
    var R7:number = (G9-G8*R0-G7*R1-G6*R2-G5*R3-G4*R2-G3*R3-G2*R4)/G1;
    var R8:number = (A10-A9*R0-A8*R1-A7*R2-A6*R3-A5*R4-A4*R5-A3*R6-A2*R7)/A1;
    var R9:number = ((Number((document.getElementById('result_0') as HTMLInputElement).value)
    -Number((document.getElementById('conta_09') as HTMLInputElement).value)*R0)
    -Number((document.getElementById('conta_08') as HTMLInputElement).value)*R1
    -Number((document.getElementById('conta_07') as HTMLInputElement).value)*R2
    -Number((document.getElementById('conta_06') as HTMLInputElement).value)*R3)
    -Number((document.getElementById('conta_05') as HTMLInputElement).value)*R4
    -Number((document.getElementById('conta_04') as HTMLInputElement).value)*R5
    -Number((document.getElementById('conta_03') as HTMLInputElement).value)*R6
    -Number((document.getElementById('conta_02') as HTMLInputElement).value)*R7
    -Number((document.getElementById('conta_01') as HTMLInputElement).value)*R8
    /Number((document.getElementById('conta_00') as HTMLInputElement).value);

    this.resultados=[
      {label:'0', value: [A0.toFixed(2), A1.toFixed(2),A2.toFixed(2),A3.toFixed(2),A4.toFixed(2),A5.toFixed(2),A6.toFixed(2),A7.toFixed(2),A8.toFixed(2),A9.toFixed(2),A10.toFixed(2)]},
      {label:'1', value: [B0.toFixed(2), B1.toFixed(2),B2.toFixed(2),B3.toFixed(2),B4.toFixed(2),B5.toFixed(2),B6.toFixed(2),B7.toFixed(2),B8.toFixed(2),B9.toFixed(2),B10.toFixed(2)]},
      {label:'2', value: [C0.toFixed(2), C1.toFixed(2),C2.toFixed(2),C3.toFixed(2),C4.toFixed(2),C5.toFixed(2),C6.toFixed(2),C7.toFixed(2),C8.toFixed(2),C9.toFixed(2),C10.toFixed(2)]},
      {label:'3', value: [D0.toFixed(2), D1.toFixed(2),D2.toFixed(2),D3.toFixed(2),D4.toFixed(2),D5.toFixed(2),D6.toFixed(2),D7.toFixed(2),D8.toFixed(2),D9.toFixed(2),D10.toFixed(2)]},
      {label:'4', value: [E0.toFixed(2), E1.toFixed(2),E2.toFixed(2),E3.toFixed(2),E4.toFixed(2),E5.toFixed(2),E6.toFixed(2),E7.toFixed(2),E8.toFixed(2),E9.toFixed(2),E10.toFixed(2)]},
      {label:'4', value: [E0.toFixed(2), F1.toFixed(2),F2.toFixed(2),F3.toFixed(2),F4.toFixed(2),F5.toFixed(2),F6.toFixed(2),F7.toFixed(2),F8.toFixed(2),F9.toFixed(2),F100.toFixed(2)]},
      {label:'4', value: [F00.toFixed(2), F01.toFixed(2),F02.toFixed(2),F03.toFixed(2),F04.toFixed(2),F05.toFixed(2),F06.toFixed(2),F07.toFixed(2),F08.toFixed(2),F09.toFixed(2),F010.toFixed(2)]},
      {label:'4', value: [F10.toFixed(2), F11.toFixed(2),F12.toFixed(2),F13.toFixed(2),F14.toFixed(2),F15.toFixed(2),F16.toFixed(2),F17.toFixed(2),F18.toFixed(2),F19.toFixed(2),F110.toFixed(2)]},
      {label:'4', value: [F20.toFixed(2), F21.toFixed(2),F22.toFixed(2),F23.toFixed(2),F24.toFixed(2),F25.toFixed(2),F26.toFixed(2),F27.toFixed(2),F28.toFixed(2),F29.toFixed(2),F210.toFixed(2)]},

      {label:'6', value: [G0.toFixed(2), G1.toFixed(2),G2.toFixed(2),G3.toFixed(2),G4.toFixed(2),G5.toFixed(2),G6.toFixed(2),G7.toFixed(2),G8.toFixed(2),G9.toFixed(2)]},
      {label:'7', value: [H0.toFixed(2), H1.toFixed(2),H2.toFixed(2),H3.toFixed(2),H4.toFixed(2),H5.toFixed(2),H6.toFixed(2),H7.toFixed(2),H8.toFixed(2),H9.toFixed(2)]},
      {label:'8', value: [I0.toFixed(2), I1.toFixed(2),I2.toFixed(2),I3.toFixed(2),I4.toFixed(2),I5.toFixed(2),I6.toFixed(2),I7.toFixed(2),I8.toFixed(2),I9.toFixed(2)]},
      {label:'9', value: [J0.toFixed(2), J1.toFixed(2),J2.toFixed(2),J3.toFixed(2),J4.toFixed(2),J5.toFixed(2),J6.toFixed(2),J7.toFixed(2),J8.toFixed(2),J9.toFixed(2)]},
      {label:'9', value: [K0.toFixed(2), K1.toFixed(2),J2.toFixed(2),K3.toFixed(2),K4.toFixed(2),K5.toFixed(2),K6.toFixed(2),K7.toFixed(2),K8.toFixed(2),K9.toFixed(2)]},
      {label:'9', value: [K00.toFixed(2), K01.toFixed(2),K02.toFixed(2),K03.toFixed(2),K04.toFixed(2),K05.toFixed(2),K06.toFixed(2),K07.toFixed(2),K08.toFixed(2),K09.toFixed(2)]},
      {label:'9', value: [K10.toFixed(2), K11.toFixed(2),K12.toFixed(2),K13.toFixed(2),K14.toFixed(2),K15.toFixed(2),K16.toFixed(2),K17.toFixed(2),K18.toFixed(2),K19.toFixed(2)]},
      {label:'9', value: [K20.toFixed(2), K11.toFixed(2),K12.toFixed(2),K13.toFixed(2),K14.toFixed(2),K15.toFixed(2),K16.toFixed(2),K17.toFixed(2),K18.toFixed(2),K29.toFixed(2)]},

      {label:'9', value: [L0.toFixed(2), L1.toFixed(2),L2.toFixed(2),L3.toFixed(2),L4.toFixed(2),L5.toFixed(2),L6.toFixed(2),L7.toFixed(2),L8.toFixed(2)]},
      {label:'9', value: [M0.toFixed(2), M1.toFixed(2),M2.toFixed(2),M3.toFixed(2),M4.toFixed(2),M5.toFixed(2),M6.toFixed(2),M7.toFixed(2),M8.toFixed(2)]},
      {label:'9', value: [N0.toFixed(2), N1.toFixed(2),N2.toFixed(2),N3.toFixed(2),N4.toFixed(2),N5.toFixed(2),N6.toFixed(2),N7.toFixed(2),N8.toFixed(2)]},
      {label:'10', value: [O0.toFixed(2), O1.toFixed(2),O2.toFixed(2),O3.toFixed(2),O4.toFixed(2),O5.toFixed(2),O6.toFixed(2),O7.toFixed(2),O8.toFixed(2)]},
      {label:'10', value: [O00.toFixed(2), O01.toFixed(2),O02.toFixed(2),O03.toFixed(2),O04.toFixed(2),O05.toFixed(2),O06.toFixed(2),O07.toFixed(2),O08.toFixed(2)]},
      {label:'10', value: [O10.toFixed(2), O11.toFixed(2),O12.toFixed(2),O13.toFixed(2),O14.toFixed(2),O15.toFixed(2),O16.toFixed(2),O17.toFixed(2),O18.toFixed(2)]},
      {label:'10', value: [O20.toFixed(2), O11.toFixed(2),O12.toFixed(2),O13.toFixed(2),O14.toFixed(2),O15.toFixed(2),O16.toFixed(2),O17.toFixed(2),O28.toFixed(2)]},

      {label:'10', value: [P0.toFixed(2), P1.toFixed(2),P2.toFixed(2),P3.toFixed(2),P4.toFixed(2),P5.toFixed(2),P6.toFixed(2),P7.toFixed(2)]},
      {label:'10', value: [Q0.toFixed(2), Q1.toFixed(2),Q2.toFixed(2),Q3.toFixed(2),Q4.toFixed(2),Q5.toFixed(2),Q6.toFixed(2),Q7.toFixed(2)]},
      {label:'10', value: [S0.toFixed(2), S1.toFixed(2),S2.toFixed(2),S3.toFixed(2),S4.toFixed(2),S5.toFixed(2),S6.toFixed(2),S7.toFixed(2)]},
      {label:'10', value: [S00.toFixed(2), S01.toFixed(2),S02.toFixed(2),S03.toFixed(2),S04.toFixed(2),S05.toFixed(2),S06.toFixed(2),S06.toFixed(2)]},
      {label:'10', value: [S10.toFixed(2), S11.toFixed(2),S12.toFixed(2),S13.toFixed(2),S14.toFixed(2),S15.toFixed(2),S16.toFixed(2),S17.toFixed(2)]},
      {label:'10', value: [S20.toFixed(2), S11.toFixed(2),S12.toFixed(2),S13.toFixed(2),S14.toFixed(2),S15.toFixed(2),S16.toFixed(2),S27.toFixed(2)]},

      {label:'10', value: [T0.toFixed(2), T1.toFixed(2),T2.toFixed(2),T3.toFixed(2),T4.toFixed(2),T5.toFixed(2),T6.toFixed(2)]},
      {label:'10', value: [U0.toFixed(2), U1.toFixed(2),U2.toFixed(2),U3.toFixed(2),U4.toFixed(2),U5.toFixed(2),U6.toFixed(2)]},
      {label:'10', value: [U00.toFixed(2), U01.toFixed(2),U02.toFixed(2),U03.toFixed(2),U04.toFixed(2),U05.toFixed(2),U06.toFixed(2)]},
      {label:'10', value: [U10.toFixed(2), U11.toFixed(2),U12.toFixed(2),U13.toFixed(2),U14.toFixed(2),U15.toFixed(2),U16.toFixed(2)]},
      {label:'10', value: [U20.toFixed(2), U11.toFixed(2),U12.toFixed(2),U13.toFixed(2),U14.toFixed(2),U15.toFixed(2),U16.toFixed(2)]},

      {label:'10', value: [V0.toFixed(2), V1.toFixed(2),V2.toFixed(2),V3.toFixed(2),V4.toFixed(2)]},
      {label:'10', value: [V00.toFixed(2), V01.toFixed(2),V02.toFixed(2),V02.toFixed(2),V03.toFixed(2),V04.toFixed(2)]},
      {label:'10', value: [V10.toFixed(2), V11.toFixed(2),V12.toFixed(2),V12.toFixed(2),V13.toFixed(2),V14.toFixed(2)]},
      {label:'10', value: [V20.toFixed(2), V21.toFixed(2),V22.toFixed(2),V22.toFixed(2),V23.toFixed(2),V24.toFixed(2)]},

      {label:'10', value: [X0.toFixed(2), X1.toFixed(2),X2.toFixed(2),X3.toFixed(2)]},
      {label:'10', value: [X00.toFixed(2), X01.toFixed(2),X02.toFixed(2),X03.toFixed(2)]},
      {label:'10', value: [X10.toFixed(2), X11.toFixed(2),X12.toFixed(2),X13.toFixed(2)]},

      {label:'10', value: [W0.toFixed(2), W1.toFixed(2),W2.toFixed(2),W3.toFixed(2)]},
      {label:'10', value: [W00.toFixed(2), W01.toFixed(2),W02.toFixed(2),W3.toFixed(2)]},

      {label:'10', value: [W10.toFixed(2), W11.toFixed(2),W12.toFixed(2)]},

      {label:'R', value: [R0.toFixed(2), R1.toFixed(2),R2.toFixed(2),R3.toFixed(2),R4.toFixed(2),R5.toFixed(2),R6.toFixed(2),R7.toFixed(2),R8.toFixed(2),R9.toFixed(2)]}
    ];  
    this.presentModal();
  }

}
