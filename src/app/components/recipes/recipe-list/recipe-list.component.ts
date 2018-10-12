import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Miso Soup', 'Delicious, so Delicious', 'https://assets.epicurious.com/photos/576450dde047a6cf1ee8268c/2:1/w_1260%2Ch_630/miso-soup.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

}
