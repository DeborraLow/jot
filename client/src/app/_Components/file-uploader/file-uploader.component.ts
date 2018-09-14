import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { UploaderService} from '../../_Services/uploader.service';
import { Observable } from 'rxjs';
import {MessageService} from '../../_Services/message.service';
@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
  private fileList : any = [];
  fileDropped:boolean;
  uploadStatus:number;
  
  constructor(private upload:UploaderService, private message:MessageService) { }

 @Output() UploadPath:EventEmitter<string> = new EventEmitter();
 @Input() Path:boolean;

  ngOnInit() {

  }

  onFileDrop(trigger:boolean) {
    this.fileDropped = trigger;
  }

  onFilesChange(fileList : FileList) {

    this.fileList = fileList;

    if(this.fileList.length > 0) { 
      let status:any = '';

        if(this.Path) {
          status = this.upload.uploadEntry(this.fileList)[this.fileList[0].name];
        } else {
          status = this.upload.upload(this.fileList)[this.fileList[0].name];
        }
        

      status.progress.subscribe(s=> {
        this.uploadStatus = s;
      });

      status.path.subscribe(file=> {
          if(file) {
            this.UploadPath.emit(file);
          }
      });

    } else {

      this.fileDropped = false;
      this.message.add('Invalid file type. Only png, gif, jpg allowed.', 'error');
    }
    
    

  }

}
