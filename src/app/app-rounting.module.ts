import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrackComponent } from './track/track.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GenderComponent } from './gender/gender.component';
import { ExploreComponent } from './explore/explore.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
    { path: '', component: PrincipalComponent, pathMatch: 'full' },
    { path: 'album', component: AlbumComponent },
    { path: 'artist', component: ArtistComponent },
    { path: 'explore', component: ExploreComponent },
    { path: 'gender', component: GenderComponent },
    { path: 'track', component: TrackComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}