import { Component, OnInit , ViewChild} from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';  // Simplificado
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { DonutChartComponent } from "../../components/donut-chart/donut-chart.component";
import { CalendarselectorComponent } from "../../components/calendarselector/calendarselector.component";
import { SwitchChartStyleComponent } from "../../components/switch-chart-style/switch-chart-style.component";
import { SwitchDataComponent } from '../../components/switch-data/switch-data.component';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    BarChartComponent,
    DonutChartComponent,
    CalendarselectorComponent,
    SwitchChartStyleComponent,
    SwitchDataComponent
]
})
export class StatisticsPage implements OnInit {

  public chartOptions: any = {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: 'rgba(0,0,0,0.1)',
          borderColor: 'rgba(0,0,0,0.1)'
        },
      },
      y: {
        grid: {
          color: 'rgba(0,0,0,0.1)',
          borderColor: 'rgba(0,0,0,0.1)'
        },
      },
    },
  };
  

  constructor(private navCtrl: NavController) { }

  @ViewChild('calendarselector') popup!: CalendarselectorComponent;

  pageNumber: number = 1;

  statsStyle: boolean = false;

  ngOnInit() {
  }

  pageChangeSpent() {
    this.pageNumber = 1;
  }

  pageChangeIncome() {
    this.pageNumber = 2;
  }

  goBack() {
    this.navCtrl.back();
  }

  onChartChangeSwitch(value: boolean) {
    console.log('Switch toggled:', value);
    this.statsStyle = value;
  }

  abrirPopup() {
    this.popup.abrirPopup();
  }

  onSwitchToggle(switchState:string) {
    console.log('El switch está ' + switchState);
  }
}
