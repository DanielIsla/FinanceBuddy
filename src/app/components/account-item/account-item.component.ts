import { Component, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { bankEntities, BankEntity } from 'src/app/models/banks';

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AccountItemComponent  implements OnInit {

  banks:BankEntity[] = bankEntities;

  accountBankCode = input("");
  accountBalance = input(1);

  bankEntityByCode?:BankEntity = { bankName: '', shortName: '', corporateColorHex: '', corporateColorHexSecondary: '', bankType: 'Banco Relevante', code: '' };

  constructor() { }

  ngOnInit() 
  {
    //Find the color for the bank card on the bankEntities array, by the bank code
    if(bankEntities.find(b => b.code === this.accountBankCode.toString() != undefined))
    {
      this.bankEntityByCode = bankEntities.find(b => b.code === this.accountBankCode.toString());
    }
  }

}