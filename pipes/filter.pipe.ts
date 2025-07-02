import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(User:any[],userfilter:string) {
    if(userfilter==''){
      return User; 
    }
    else return User.filter((item)=>{
      return item.firstname.toLowerCase() == userfilter.toLowerCase();
    })

  }

}
