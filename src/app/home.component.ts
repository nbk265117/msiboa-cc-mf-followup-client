import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {state$ } from '@eai/utility';
import { Subscription } from 'rxjs';
import {TranslateService} from "@ngx-translate/core";
import {clients} from './utils/mock-data';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'angular-app';
  chosedTier : any = {};
  subscription!: Subscription;
  searchkey: string = '';
  clients :any =[];
  checkValues: boolean[] = [true, true, true];
  objSearch = {};
  searchForm: FormGroup = this.fb.group({
    ribBeneficiary: ['', Validators.required],
    motif: ['', Validators.required]
  });

  constructor(private translate: TranslateService,private fb: FormBuilder) {
    this.translate.use("ENGLISH");
  }



  ngOnInit(): void {
    this.subscription = state$.subscribe((tierId: any) => {
      console.log("received from rxjs ", tierId);
    })
    this.clients=clients;
    this.chosedTier=clients.filter(e=>e.id==1)[0];
  }

  guichetValue(e: any) {
    this.checkValues[0] = e;
  }
  persPhysiqueValue(e: any) {
    this.checkValues[1] = e;
  }
  persMoraleValue(e: any) {
    this.checkValues[2] = e;
  }


  onClick(item: client) {
    this.chosedTier=clients.filter(e=>e.id==item.id)[0];
  }

  onSubmit() {
    this.objSearch = { ...this.searchForm.value };
    console.log('search form :', this.objSearch);
  }

}

interface client {
  id:number;
  name: string;
  rib: string;
  solde: number;
  operations: any[];
}
