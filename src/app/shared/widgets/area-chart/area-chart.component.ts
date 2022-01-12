import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {

  @Input() data = [];

  Highcharts = Highcharts;
  chartOptions = {}

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Random Data'
      },
      subtitle: {
          text: 'Demo'
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      }, 
      series: this.data
  };

  HC_exporting(Highcharts);

  setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    );
  },300)

  }

}
