import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strNums'
})
export class StrNumsPipe implements PipeTransform {

  transform(value: string): unknown {
    const newWords = value.toLowerCase().split('').map((element: string) => {
      const vocales: Record<string, string> = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
        'u': 'u'
      }
      return vocales[element] != undefined ? element = vocales[element] : element
    }
      )
      return newWords.join('')
  }

}
