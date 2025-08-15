import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: Date.now(), ...newRecipe }],
    })),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Update a recipe by ID
  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      ),
    })),
}));
