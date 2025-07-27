import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
<<<<<<< HEAD
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
=======
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
>>>>>>> 1c46259c63bf2d1c53f01c0b50f0a2e85bb51928
  setRecipes: (recipes) => set({ recipes }),
}));
