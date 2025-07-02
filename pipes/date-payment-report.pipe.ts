import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePaymentReport'
})
export class DatePaymentReportPipe implements PipeTransform {

  transform(lispaymentuser: any[], _startDate: string, _endDate: string): any[] {
    const datePipe = new DatePipe('en-US');
    const startDateTime = _startDate ? datePipe.transform(new Date(_startDate), 'yyyy-MM-dd') : null;
    const endDateTime = _endDate ? datePipe.transform(new Date(_endDate), 'yyyy-MM-dd') : null;
    console.log(startDateTime)
    console.log(endDateTime)

    return lispaymentuser.filter(item => {
      const itemDate = datePipe.transform(new Date(item.paymentdate), 'yyyy-MM-dd');

      return (!startDateTime || (itemDate && itemDate >= startDateTime)) &&
             (!endDateTime || (itemDate && itemDate <= endDateTime));
    });
  }
   
}


