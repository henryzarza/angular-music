import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SettingsConfigurationComponent } from './settings-configuration/settings-configuration.component';
import { TrackComponent } from './track/track.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GenderComponent } from './gender/gender.component';
import { ExploreComponent } from './explore/explore.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { PrincipalComponent } from './principal/principal.component';
import { AppRoutingModule } from './app-rounting.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SettingsConfigurationComponent,
    PrincipalComponent,
    AlbumComponent,
    ArtistComponent,
    ExploreComponent,
    GenderComponent,
    TrackComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
