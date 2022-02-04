import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  areaChart() {
    return [{name: 'Asia',data: [502, 635, 809, 947, 1402, 3634, 5268]},
            {name: 'Africa',data: [106, 107, 111, 133, 221, 767, 1766]},
            {name: 'Europe',data: [163, 203, 276, 408, 547, 729, 628]},
            {name: 'America',data: [18, 31, 54, 156, 339, 818, 1201]},
            {name: 'Oceania',data: [2, 2, 2, 6, 13, 30, 46]}
          ];
  }

  cardCharts(){
    return [{data: [50, 63, 80,66]}];
  }

  pieChart(){
    return [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: 'Internet Explorer',
          y: 11.84
      }, {
          name: 'Firefox',
          y: 10.85
      }, {
          name: 'Edge',
          y: 4.67
      }, {
          name: 'Safari',
          y: 4.18
      }, {
          name: 'Sogou Explorer',
          y: 1.64
      }, {
          name: 'Opera',
          y: 1.6
      }, {
          name: 'QQ',
          y: 1.2
      }, {
          name: 'Other',
          y: 2.61
      }]
  }]
  }

  table(){
    return[
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',edit: true},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',edit: true},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',edit: true},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',edit: true},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',edit: true},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',edit: true},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',edit: true},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',edit: true},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',edit: true},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',edit: true},
      {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na',edit: true},
      {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg',edit: true},
      {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al',edit: true},
      {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si',edit: true},
      {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P',edit: true},
      {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S',edit: true},
      {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl',edit: true},
      {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar',edit: true},
      {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K',edit: true},
      {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca',edit: true},
    ];
  }



}
