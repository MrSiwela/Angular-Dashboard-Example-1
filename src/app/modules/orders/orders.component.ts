import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  areaChart: any = [];
  cardCharts: any = [];
  pieChart: any = [];
  tableData: any = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.areaChart = this.dashboardService.areaChart();
    this.cardCharts = this.dashboardService.cardCharts();
    this.pieChart = this.dashboardService.pieChart();
    this.tableData = this.dashboardService.table();
  }

}
