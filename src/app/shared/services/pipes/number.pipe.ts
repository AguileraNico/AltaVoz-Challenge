import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'numberPipe',
    pure: true,
    standalone: true
})
export class NumberPipe implements PipeTransform {
    transform(value: number): string {
        return value < 1000 ? value.toString() : (value/1000) + 'k';
      }
}