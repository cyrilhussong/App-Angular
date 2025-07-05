import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: any[], searchTerm: string): any[] {
    if (!searchTerm) return products;
    searchTerm = searchTerm.toLowerCase();
    return products.filter(p => p.name.toLowerCase().includes(searchTerm));
  }
}
