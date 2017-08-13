import { Component, OnInit } from '@angular/core';
import { TrackService } from './../services/track.service';

declare var jQuery: any;

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
  providers: [TrackService]
})
export class TrackComponent implements OnInit {

  private informationData: Object;
  private data: Array<Object>;
  private trackInfo;
  private limit = 50;
  private page = 1;

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    this.trackService.getTopTracks(this.limit, this.page).then(dataIn => {
        this.informationData = dataIn['tracks']['@attr'];
        this.data = dataIn['tracks']['track'];
    });

    jQuery('#modal-information-track').modal();
  }

  private openModal(track: Object) {
    jQuery('#modal-information-track').modal('open');    
    this.trackService.getInfo(track['artist']['name'], track['name']).then(dataIn => {
      this.trackInfo = dataIn['track'];
    });
  }

}
