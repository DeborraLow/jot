import { Directive, HostListener, HostBinding, EventEmitter, Output,Input } from '@angular/core';
import { Subscription } from 'rxjs';
import {UploaderService} from '../_Services/uploader.service';
@Directive({
  selector: '[appJotUploader]'
})

export class UploaderDirective {

  @HostBinding('style.background') private background = '#eee';

  @Input() private allowed_extensions : Array<string> = [];

  constructor(private uploaderService:UploaderService) { }

  @Output() private filesChangeEmiter : EventEmitter<File[]> = new EventEmitter();
  @Output() private filesInvalidEmiter : EventEmitter<File[]> = new EventEmitter();
  @Output() private fileDropped : EventEmitter<boolean> = new EventEmitter(false);


  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    
    const files = evt.dataTransfer.files;

    this.background = '#ddd';

    if(files.length > 0) {

    }
  }
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    this.background = '#eee';

  }
  
  @HostListener('drop', ['$event']) public onDrop(evt) {
    
    this.fileDropped.emit(true);

    evt.preventDefault();
    evt.stopPropagation();

    this.background = '#eee';
    
    const files = evt.dataTransfer.files;

    const valid_files : Array<File> = [];
    const invalid_files : Array<File> = [];

    if(files.length > 0) {

      for(let x = 0;  x < files.length; x++ ) {

        const ext = files[x].name.split('.')[files[x].name.split('.').length - 1];

        if(this.allowed_extensions.lastIndexOf(ext) !== -1) {
          valid_files.push(files[x]);
        } else { 
          invalid_files.push(files[x]);

        }
        
      }

      this.filesChangeEmiter.emit(valid_files);
      this.filesInvalidEmiter.emit(invalid_files);
    }
    
  }


}
