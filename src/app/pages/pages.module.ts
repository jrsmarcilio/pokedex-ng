import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexComponent } from './pokedex/pokedex.component';
import { PokecardComponent } from './pokedex/pokecard/pokecard.component';

@NgModule({
  declarations: [PokedexComponent, PokecardComponent],
  imports: [CommonModule],
  exports: [PokedexComponent],
})

export class PagesModule {}
