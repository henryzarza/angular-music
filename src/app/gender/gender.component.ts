import { GenderService } from './../services/gender.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss'],
  providers: [GenderService]
})
export class GenderComponent implements OnInit {

  private informationData: Object;
  private data: Array<Object>;
  private limit = 50;
  private page = 1;

  constructor(private genderService: GenderService) { }

  ngOnInit() {
    this.genderService.getTopGender(this.limit, this.page).then(dataIn => {
        this.informationData = dataIn['tags']['@attr'];
        this.data = dataIn['tags']['tag'];
        console.log(this.data);
    });
  }
}