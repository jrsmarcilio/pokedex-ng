import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  linkMenu = [
    { title: `Home`, link: '/' },
    { title: 'Pokédex', link: '/pokedex' },
    { title: 'Legengaries', link: '/legendaries' },
    { title: 'Documentation', link: '/doc' },
  ];

  ngOnInit(): void {}
}
