import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createVideo'
})
export class CreateVideoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
