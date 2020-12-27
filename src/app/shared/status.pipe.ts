import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(args);
    if (value == 1) {
      return 'Available';
    } else {
      return 'Not Available';
    }
  }
}
