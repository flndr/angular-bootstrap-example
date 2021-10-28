import { Input }             from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

    @Input() showHeader = true;
    
  constructor() { }

  ngOnInit(): void {
  }

}
