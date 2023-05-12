import { Injectable } from '@angular/core';
import { AsyncParser } from '@json2csv/whatwg';

@Injectable({
  providedIn: 'root'
})
export class Json2CsvService {

  async generateCSV(data: any) {
    console.log('generateCSV');
    const parser:any = new AsyncParser();
    const csv = await parser.parse(data).promise();
    console.log(csv);
  }
}
