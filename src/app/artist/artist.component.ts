import { ArtistService } from './../services/artist.service';
import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  providers: [ArtistService]
})
export class ArtistComponent implements OnInit {

  private data: Array<Object>;
  private artistInfo;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.artistService.getTopArtist().then(dataIn => this.data = dataIn);
    jQuery('#modal-information-artist').modal();
  }

  private openModal(mbid: string) {
    jQuery('#modal-information-artist').modal('open');
    this.artistService.doRequest(mbid, 'getinfo').then(dataIn => {this.artistInfo = dataIn; console.log(this.artistInfo)});
  }

}
