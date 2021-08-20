import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apk-button',
  templateUrl: './apk-button.component.html',
  styleUrls: ['./apk-button.component.scss']
})
export class ApkButtonComponent implements OnInit {

  @Input() buttonText = "Label";
  
  constructor() { }

  ngOnInit(): void {
  }

}
