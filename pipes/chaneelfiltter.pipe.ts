import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
  name: 'chaneelfilter'
})
export class ChaneelfiltterPipe implements PipeTransform {
  transform(channels: any[], filterText: string): any[] {
    if (!channels || !filterText) {
      return channels;
    }
 
    return channels.filter((channel) =>
      channel.channelname.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}