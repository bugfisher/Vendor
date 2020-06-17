import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testprogress',
  templateUrl: './testprogress.component.html',
  styleUrls: ['./testprogress.component.css']
})
export class TestProgressComponent implements OnInit {

  constructor() { }

  public num:number = 4;

  ngOnInit(): void {
  }

}
