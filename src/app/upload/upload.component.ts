import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  fileName = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onChange(event: any) {
    console.log('files: ', event?.target?.files);
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;

      const formData = new FormData();

      formData.append('thumbnail', file);

      //const upload$ = this.http.post('/api/thumbnail-upload', formData);

      // upload$.subscribe();
    }
  }
}
