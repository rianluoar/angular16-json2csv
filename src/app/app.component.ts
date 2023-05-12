import { Component } from '@angular/core';
import { Json2CsvService } from './json2-csv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly json2CsvService:Json2CsvService){}

  downloadCSV(){
    const data = [
      {
        'col1':'data1',
        'col2':'data1',
        'col3':'data1',
        'col4':'data1',
      },
      {
        'col1':'data2',
        'col2':'data2',
        'col3':'data2',
        'col4':'data2',
      }
    ];
    this.json2CsvService.generateCSV(data);
  }
}
