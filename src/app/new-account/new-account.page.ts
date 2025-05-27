import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { DropdownComponent } from '../components/dropdown/dropdown.component';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.page.html',
  styleUrls: ['./new-account.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, DropdownComponent]
})
export class NewAccountPage implements OnInit {

  currencyOptions = [
    { label: 'EUR', image: 'assets/images/currency/EUR_icon.png' },
    { label: 'USD', image: 'assets/images/currency/USD_icon.png' },
    { label: 'GBP', image: 'assets/images/currency/GBP_icon.png' },
    { label: 'JPY', image: 'assets/images/currency/JPY_icon.png' },
    { label: 'CAD', image: 'assets/images/currency/CAD_icon.png' },
    { label: 'CHF', image: 'assets/images/currency/CHF_icon.png' },
    { label: 'CNY', image: 'assets/images/currency/CNY_icon.png' },
    { label: 'INR', image: 'assets/images/currency/INR_icon.png' },
    { label: 'BRL', image: 'assets/images/currency/BRL_icon.png' },
    { label: 'MXN', image: 'assets/images/currency/MXN_icon.png' },
    { label: 'RUB', image: 'assets/images/currency/RUB_icon.png' },
    { label: 'ARS', image: 'assets/images/currency/ARS_icon.png' },
    { label: 'CLP', image: 'assets/images/currency/CLP_icon.png' },
    { label: 'COP', image: 'assets/images/currency/COP_icon.png' },
    { label: 'PEN', image: 'assets/images/currency/PEN_icon.png' },
    { label: 'ZAR', image: 'assets/images/currency/ZAR_icon.png' },
    { label: 'SEK', image: 'assets/images/currency/SEK_icon.png' },
    { label: 'NOK', image: 'assets/images/currency/NOK_icon.png' },
    { label: 'DKK', image: 'assets/images/currency/DKK_icon.png' },
    { label: 'KRW', image: 'assets/images/currency/KRW_icon.png' },
    { label: 'TRY', image: 'assets/images/currency/TRY_icon.png' },
    { label: 'IDR', image: 'assets/images/currency/IDR_icon.png' },
    { label: 'PHP', image: 'assets/images/currency/PHP_icon.png' },
    { label: 'EGP', image: 'assets/images/currency/EGP_icon.png' },
    { label: 'THB', image: 'assets/images/currency/THB_icon.png' },
    { label: 'AFN', image: 'assets/images/currency/AFN_icon.png' },
    { label: 'ALL', image: 'assets/images/currency/ALL_icon.png' },
    { label: 'DZD', image: 'assets/images/currency/DZD_icon.png' },
    { label: 'AOA', image: 'assets/images/currency/AOA_icon.png' },
    { label: 'AMD', image: 'assets/images/currency/AMD_icon.png' },
    { label: 'AZN', image: 'assets/images/currency/AZN_icon.png' },
    { label: 'BSD', image: 'assets/images/currency/BSD_icon.png' },
    { label: 'BHD', image: 'assets/images/currency/BHD_icon.png' },
    { label: 'BDT', image: 'assets/images/currency/BDT_icon.png' },
    { label: 'BBD', image: 'assets/images/currency/BBD_icon.png' },
    { label: 'BYN', image: 'assets/images/currency/BYN_icon.png' },
    { label: 'BZD', image: 'assets/images/currency/BZD_icon.png' },
    { label: 'BMD', image: 'assets/images/currency/BMD_icon.png' },
    { label: 'BTN', image: 'assets/images/currency/BTN_icon.png' },
    { label: 'BOB', image: 'assets/images/currency/BOB_icon.png' },
    { label: 'BWP', image: 'assets/images/currency/BWP_icon.png' },
    { label: 'BND', image: 'assets/images/currency/BND_icon.png' },
    { label: 'BGN', image: 'assets/images/currency/BGN_icon.png' },
    { label: 'BIF', image: 'assets/images/currency/BIF_icon.png' },
    { label: 'CVE', image: 'assets/images/currency/CVE_icon.png' },
    { label: 'KHR', image: 'assets/images/currency/KHR_icon.png' },
    { label: 'XAF', image: 'assets/images/currency/XAF_icon.png' },
    { label: 'XOF', image: 'assets/images/currency/XOF_icon.png' },
    { label: 'XCD', image: 'assets/images/currency/XCD_icon.png' },
    { label: 'KMF', image: 'assets/images/currency/KMF_icon.png' },
    { label: 'CDF', image: 'assets/images/currency/CDF_icon.png' },
    { label: 'CRC', image: 'assets/images/currency/CRC_icon.png' },
    { label: 'CUP', image: 'assets/images/currency/CUP_icon.png' },
    { label: 'DJF', image: 'assets/images/currency/DJF_icon.png' },
    { label: 'DOP', image: 'assets/images/currency/DOP_icon.png' },
    { label: 'ERN', image: 'assets/images/currency/ERN_icon.png' },
    { label: 'ETB', image: 'assets/images/currency/ETB_icon.png' },
    { label: 'FJD', image: 'assets/images/currency/FJD_icon.png' },
    { label: 'GMD', image: 'assets/images/currency/GMD_icon.png' },
    { label: 'GEL', image: 'assets/images/currency/GEL_icon.png' },
    { label: 'GHS', image: 'assets/images/currency/GHS_icon.png' },
    { label: 'GTQ', image: 'assets/images/currency/GTQ_icon.png' },
    { label: 'GNF', image: 'assets/images/currency/GNF_icon.png' },
    { label: 'GYD', image: 'assets/images/currency/GYD_icon.png' },
    { label: 'HTG', image: 'assets/images/currency/HTG_icon.png' },
    { label: 'HNL', image: 'assets/images/currency/HNL_icon.png' },
    { label: 'HUF', image: 'assets/images/currency/HUF_icon.png' },
    { label: 'ISK', image: 'assets/images/currency/ISK_icon.png' },
    { label: 'IRR', image: 'assets/images/currency/IRR_icon.png' },
    { label: 'IQD', image: 'assets/images/currency/IQD_icon.png' },
    { label: 'ILS', image: 'assets/images/currency/ILS_icon.png' },
    { label: 'JMD', image: 'assets/images/currency/JMD_icon.png' },
    { label: 'JOD', image: 'assets/images/currency/JOD_icon.png' },
    { label: 'KZT', image: 'assets/images/currency/KZT_icon.png' },
    { label: 'KES', image: 'assets/images/currency/KES_icon.png' },
    { label: 'KWD', image: 'assets/images/currency/KWD_icon.png' },
    { label: 'KGS', image: 'assets/images/currency/KGS_icon.png' },
    { label: 'LAK', image: 'assets/images/currency/LAK_icon.png' },
    { label: 'LBP', image: 'assets/images/currency/LBP_icon.png' },
    { label: 'LSL', image: 'assets/images/currency/LSL_icon.png' },
    { label: 'LRD', image: 'assets/images/currency/LRD_icon.png' },
    { label: 'LYD', image: 'assets/images/currency/LYD_icon.png' },
    { label: 'MGA', image: 'assets/images/currency/MGA_icon.png' },
    { label: 'MWK', image: 'assets/images/currency/MWK_icon.png' },
    { label: 'MYR', image: 'assets/images/currency/MYR_icon.png' },
    { label: 'MVR', image: 'assets/images/currency/MVR_icon.png' }
  ];

  selectedCurrency: any = null;

  

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack()
  {
    this.navCtrl.back();
  }

  onCurrencySelected(option: any) {
    console.log('País seleccionado:', option);
    this.selectedCurrency = option;
  }

}
