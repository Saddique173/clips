import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeURL'
})
export class SafeURLPipe implements PipeTransform {

  constructor(public sanitizer:DomSanitizer ){
  }
  transform(value: string) {
    //console.log(value)
    //return this.sanitizer.bypassSecurityTrustHtml(value);
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
