import { Component, OnInit, Optional, Directive } from '@angular/core';
import { HighlightDirective } from './../directivs/highlight.directive';
import { DataService } from './../services';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.css']
})

export class VisualComponent implements OnInit {

  randString: string;
  constructor( @Optional() public dataService: DataService) { }

  ngOnInit() {
    this.randString = this.dataService
                    ? this.dataService.getRandString(5)
                    : 'Service is unavailable';
  }

  onInputChange(inputField: HTMLInputElement) {
    this.randString = this.dataService
                    ? this.dataService.getRandString(inputField.valueAsNumber)
                    : 'Service is unavailable';
  }
}
