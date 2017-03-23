import { Component, OnInit } from '@angular/core';
import { DataService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  info='';
  constructor (private _dataService: DataService) { }
  
  ngOnInit() {
    this.info = this._dataService.getAppAndVersion();
  }
}
