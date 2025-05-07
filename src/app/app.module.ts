import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SkyAlertModule } from '@skyux/indicators';
import { SkyThemeModule } from '@skyux/theme'; // Ensure theme is imported
import { AppComponent } from './app.component';
import { MyTileComponent } from './my-tile/my-tile.component';
import { RouterModule } from '@angular/router';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';

@NgModule({
  declarations: [
    AppComponent,
    MyTileComponent
  ],
  imports: [
    BrowserModule,
    SkyAlertModule,
    SkyThemeModule, // Add SkyThemeModule to imports
    RouterModule.forRoot([
      { path: 'my-new-addin', children: [
        { path: 'my-tile', component: MyTileComponent}
      ]}
    ]),
  ],
  providers: [AddinClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }