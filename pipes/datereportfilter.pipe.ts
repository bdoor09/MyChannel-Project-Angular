import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datereportfilter'
})
export class DatereportfilterPipe implements PipeTransform {
  transform(ReportChannel: any[], startDate: string, endDate: string): any[] {
    const datePipe = new DatePipe('en-US');
    const startDateTime = startDate ? datePipe.transform(new Date(startDate), 'yyyy-MM-dd') : null;
    const endDateTime = endDate ? datePipe.transform(new Date(endDate), 'yyyy-MM-dd') : null;
    console.log(startDateTime)
    console.log(endDateTime)

    return ReportChannel.filter(item => {
      const itemDate = datePipe.transform(new Date(item.dtaeOfSend), 'yyyy-MM-dd');

      return (!startDateTime || (itemDate && itemDate >= startDateTime)) &&
             (!endDateTime || (itemDate && itemDate <= endDateTime));
    });
  }
   
  }





  // transform(ReportChannel: any[], startDate: string, endDate: string): any[] {
  //   if (!startDate && !endDate) {
  //     return ReportChannel;
  //   } else {
  //     const startDateTime = startDate ? new Date(startDate) : null;
  //     const endDateTime = endDate ? new Date(endDate) : null;
  
  //     return ReportChannel.filter((item) => {
  //       const itemDate = new Date(item.dateOfSend); // Fix the typo here
  
  //       if (startDateTime && endDateTime) {
  //         return itemDate >= startDateTime && itemDate <= endDateTime;
  //       } else if (startDateTime) {
  //         return itemDate >= startDateTime;
  //       } else if (endDateTime) {
  //         return itemDate <= endDateTime;
  //       }
  
  //       return true;
  //     });
  //   }
  // }
   
  // }



