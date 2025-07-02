import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datereport'
})
export class DatereportPipe implements PipeTransform {

  transform(Report: any[], startDate: Date, endDate: Date): any[] {
    if (!startDate || !endDate) {
      return Report;
    }

    return Report.filter((Report) => {
      const courseStartDate = new Date(Report.startDate);
      const courseEndDate = new Date(Report.endDate);

      return courseStartDate >= startDate && courseEndDate <= endDate;
    });
  }
}
