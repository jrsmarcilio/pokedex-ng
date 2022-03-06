import { Component, OnInit } from '@angular/core';
import { pokemonModel } from '../../../@core/pokemon.model';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss'],
})
export class PokecardComponent implements OnInit {
  pokemon!: pokemonModel;

  constructor() {}

  ngOnInit(): void {}
}
