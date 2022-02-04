import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  areaChart: any = [];
  cardCharts: any = [];
  pieChart: any = [];
  tableData: any = [];

  tableEdit = true;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.areaChart = this.dashboardService.areaChart();
    this.cardCharts = this.dashboardService.cardCharts();
    this.pieChart = this.dashboardService.pieChart();
    this.tableData = this.dashboardService.table();
  }
}
