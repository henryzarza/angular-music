import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'settings-configuration',
  templateUrl: './settings-configuration.component.html'
})
export class SettingsConfigurationComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  openTap() {
    jQuery('.tap-target').tapTarget('open');
  }

}
