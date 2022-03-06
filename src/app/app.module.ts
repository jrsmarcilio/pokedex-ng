import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
