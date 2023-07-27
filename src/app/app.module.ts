import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { CustomizeComponent } from './components/customize/customize.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './footer/footer.component';
import { TshirtBarComponent } from './components/tshirt-bar/tshirt-bar.component';
import { PhonecaseBarComponent } from './components/phonecase-bar/phonecase-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    BannerComponent,
    CustomizeComponent,
    ServicesComponent,
    FooterComponent,
    TshirtBarComponent,
    PhonecaseBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
