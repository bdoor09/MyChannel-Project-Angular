// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { ReportService } from '../services/report.service';
// import { Chart } from 'chart.js';

// @Component({
//   selector: 'app-user-chart',
//   template: `
//     <div>
//       <label for="dateFrom">From:</label>
//       <input type="date" id="dateFrom" [(ngModel)]="dateFrom" />
//       <label for="dateTo">To:</label>
//       <input type="date" id="dateTo" [(ngModel)]="dateTo" />
//       <button (click)="onGetTotalReportCount()">Show Total Report Count</button>
//       <div *ngIf="totalReportData !== undefined">
//         <p>Total Report Count: {{ totalReportCount }}</p>
//         <canvas #totalReportChartCanvas></canvas>
//       </div>
//     </div>
//   `,
// })

// export class TestdateComponent {
//   dateFrom: string = '';
//   dateTo: string = '';
//   totalReportCount: number | undefined;
//   totalReportData: { date: string, count: number }[] | undefined;

//   @ViewChild('totalReportChartCanvas') totalReportChartCanvas!: ElementRef;

//   constructor(private reportService: ReportService) {}

//   onGetTotalReportCount(): void {
//     const dateFrom = new Date(this.dateFrom);
//     const dateTo = new Date(this.dateTo);
  
//     this.reportService.getTotalReportData(dateFrom, dateTo).subscribe((data) => {
//       this.totalReportData = data;
//       this.totalReportCount = data.reduce((sum, item) => sum + item.count, 0);
//       this.renderTotalReportChart();
//     });
//   }

//   renderTotalReportChart(): void {
//     if (!this.totalReportData) {
//       return;
//     }

//     const ctx = this.totalReportChartCanvas.nativeElement.getContext('2d');

//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: this.totalReportData.map(item => item.date),
//         datasets: [
//           {
//             label: 'Total Report Count',
//             data: this.totalReportData.map(item => item.count),
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           x: {
//             type: 'time',
//             time: {
//               unit: 'day',
//             },
//             title: {
//               display: true,
//               text: 'Date',
//             },
//           },
//           y: {
//             beginAtZero: true,
//             title: {
//               display: true,
//               text: 'Total Report Count',
//             },
//           },
//         },
//       },
//     });
//   }
// }
