import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Lemon Icebox Pie III', 'A family favorite when a no-bake, fast pie is needed.', 'https://images.media-allrecipes.com/userphotos/560x315/439002.jpg'),
    new Recipe('Mini Cheesecakes III', 'This is a delicious recipe that is perfect for an on-the-go snack. Plus it is a great treat for kids', 'https://images.media-allrecipes.com/userphotos/560x315/1277450.jpg'),
    new Recipe('Too Much Chocolate Cake', 'This cake won me First Prize at the county fair last year. It is very chocolaty.', 'https://images.media-allrecipes.com/userphotos/560x315/1130307.jpg'),
    new Recipe('Carrot Cake with Pineapple Cream Cheese Frosting', 'This rich, moist cake has all the flavor, without all the fat and calories. Because it is so full of carrots, pineapple, and nuts it is similar to a fruit bread. For the best flavor, bake the cake one day ahead.', 'https://images.media-allrecipes.com/userphotos/560x315/1121606.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
