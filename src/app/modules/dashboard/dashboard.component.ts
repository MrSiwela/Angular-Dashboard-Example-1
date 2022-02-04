import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  areaChart: any = [];
  cardCharts: any = [];
  pieChart: any = [];
  tableData: any = [];

  tableEdit = false;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.areaChart = this.dashboardService.areaChart();
    this.cardCharts = this.dashboardService.cardCharts();
    this.pieChart = this.dashboardService.pieChart();
    this.tableData = this.dashboardService.table();
  }

}
