import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch-chart-style',
  templateUrl: './switch-chart-style.component.html',
  styleUrls: ['./switch-chart-style.component.scss'],
})
export class SwitchChartStyleComponent {
  @Input() checked: boolean = false;
  @Input() onColor: string = '#4caf50';
  @Input() offColor: string = '#ccc';
  @Input() size: string = '40px';

  switchHandleImage: string = "assets/images/bar_graph.png";

  @Output() toggle = new EventEmitter<boolean>();

  switchToggle() {
    this.checked = !this.checked;
    this.toggle.emit(this.checked);
    this.changeImage();
  }

  changeImage()
  {
    if(this.checked = this.checked)
    {
      
      this.switchHandleImage = "assets/images/doghnut_chart.png";
    }

    else
    {
      this.switchHandleImage = "assets/images/bar_graph.png";
    }
  }
}
