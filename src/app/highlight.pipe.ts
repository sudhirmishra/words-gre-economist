import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}

  transform(value: string, ...args: string[]): unknown {
    let highlightWord = args[0].toLowerCase()
    let replacedValue = value.replace(highlightWord, "<strong>"+highlightWord+"</strong>");
    return replacedValue
  }

}
