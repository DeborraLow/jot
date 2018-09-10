import { Directive, HostListener, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs';
import {UploaderService} from '../_Services/uploader.service';
@Directive({
  selector: '[jotUploader]'
})
export class UploaderDirective {

  @HostBinding('style.background') private background = '#eee';

  constructor(private uploaderService:UploaderService) { }

  @HostListener('dragover', ['$event']) onDragOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    
    let files = evt.dataTransfer.files;

    this.background = '#ddd'

    if(files.length > 0){
      //do some stuff here
    }
  }
  @HostListener('dragleave', ['$event']) public onDragLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();

    this.background = '#eee'

    //do some stuff
  }
  @HostListener('drop', ['$event']) public onDrop(evt){
    evt.preventDefault();
    evt.stopPropagation();

    let files = evt.dataTransfer.files;

    this.background = '#ddd'
    
    if(files.length > 0){
      console.log(files)
      //do some stuff
      this.uploaderService.upload(files);
    }
  }


}
