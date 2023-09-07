import { Recipe } from "./recipe.model";
export class RecipeService{
    private recipes: Recipe[]=[
        new Recipe('A Test Recipe','This is simply a test','https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&webp=true&resize=300,272')
        ];
    getRecipe(){
        return this.recipes.slice();
    }
}