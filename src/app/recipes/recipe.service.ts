import { Injectable, signal } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes = signal<Recipe[]>([
    new Recipe(
      'Caprese Salad',
      'A refreshing Italian starter made with juicy tomatoes, creamy mozzarella, and fragrant basil leaves. ' +
        'Each layer bursts with freshness, drizzled lightly with olive oil and balsamic glaze. ' +
        'This simple salad balances creamy, tangy, and herbal flavors beautifully. ' +
        'Perfect as a light appetizer or a summer side dish.',
      '../../../../assets/Recipes/Caprese Salad.jpg',
      '00:15:00',
      [
        'Wash and dry the tomatoes, then slice them into 1 cm thick rounds.',
        'Slice the fresh mozzarella into similar-sized rounds.',
        'Arrange tomato and mozzarella slices alternately on a serving plate.',
        'Tuck whole basil leaves between the layers or scatter them over the top.',
        'Drizzle evenly with extra-virgin olive oil and balsamic glaze.',
        'Season lightly with salt and freshly ground black pepper.',
        'Serve immediately or chill for 5–10 minutes before serving.',
      ],
      [
        new Ingredient('Tomatoes (ripe, medium size)', 3, 'pieces'),
        new Ingredient('Fresh Mozzarella', 150, 'grams'),
        new Ingredient('Fresh Basil Leaves', 10, 'grams'),
        new Ingredient('Extra-Virgin Olive Oil', 2, 'tablespoons'),
        new Ingredient('Balsamic Glaze', 1, 'tablespoon'),
        new Ingredient('Salt', 1, 'teaspoon'),
        new Ingredient('Black Pepper', 0.5, 'teaspoon'),
      ],
      'Italian Cuisine',
      'Vegetarian',
      0
    ),

    new Recipe(
      'Spaghetti Carbonara',
      'A creamy and comforting Italian pasta dish with rich flavors of pancetta, egg, and Parmesan cheese. ' +
        'The sauce clings perfectly to al dente spaghetti, creating a silky texture. ' +
        'Every bite carries the warmth of black pepper and savory umami. ' +
        'An authentic Roman classic that’s both simple and indulgent.',
      '../../../../assets/Recipes/Spaghetti Carbonara.jpg',
      '00:25:00',
      [
        'Bring a large pot of salted water to a boil and cook the spaghetti until al dente.',
        'While the pasta cooks, heat a pan over medium heat and cook the pancetta until crispy. Remove from heat.',
        'In a mixing bowl, whisk together eggs, Pecorino Romano cheese, black pepper, and a small splash of pasta water.',
        'Once the spaghetti is cooked, transfer it directly into the pan with the pancetta.',
        'Remove the pan from the heat to prevent the eggs from scrambling.',
        'Pour the egg mixture over the hot pasta and toss quickly until the sauce becomes creamy and coats the spaghetti.',
        'Add more cheese and black pepper to taste.',
        'Serve immediately while hot.',
      ],
      [
        new Ingredient('Spaghetti', 250, 'grams'),
        new Ingredient('Pancetta', 100, 'grams'),
        new Ingredient('Eggs', 2, 'pieces'),
        new Ingredient('Egg Yolks', 1, 'piece'),
        new Ingredient('Pecorino Romano Cheese (grated)', 50, 'grams'),
        new Ingredient('Black Pepper (freshly ground)', 1, 'teaspoon'),
        new Ingredient('Salt', 1, 'teaspoon'),
      ],
      'Italian Cuisine',
      'Non-Vegetarian',
      1
    ),

    new Recipe(
      'Chicken Biryani',
      'A flavorful Indian rice dish layered with marinated chicken, fragrant basmati rice, and rich spices. ' +
        'Each grain absorbs the essence of saffron, ghee, and caramelized onions. ' +
        'The aroma is irresistible and the taste truly royal. ' +
        'A festive centerpiece loved across India for its depth and flavor.',
      '../../../../assets/Recipes/Chicken Biryani.jpg',
      '01:30:00',
      [
        'Wash and soak the basmati rice for 30 minutes.',
        'In a bowl, marinate the chicken with yogurt, ginger-garlic paste, biryani masala, turmeric, red chili powder, salt, and lemon juice. Rest for at least 30 minutes.',
        'Heat oil in a large pan and fry sliced onions until golden brown to make birista. Set some aside for layering.',
        'In the same pot, add whole spices (bay leaf, cloves, cardamom, cinnamon) and sauté until fragrant.',
        'Add the marinated chicken and cook until partially done.',
        'In another pot, boil water with salt and whole spices. Parboil the soaked rice until 70% cooked, then drain.',
        'Layer the biryani: add half-cooked chicken at the bottom, followed by a layer of rice, fried onions, mint, coriander, saffron milk, and a drizzle of ghee.',
        'Repeat the layers until all ingredients are used.',
        'Seal the pot with a lid or dough and cook on low heat (dum) for 20–25 minutes.',
        'Let it rest for 10 minutes before gently fluffing and serving.',
      ],
      [
        new Ingredient('Basmati Rice', 300, 'grams'),
        new Ingredient('Chicken (bone-in pieces)', 500, 'grams'),
        new Ingredient('Yogurt', 100, 'grams'),
        new Ingredient('Onions (sliced)', 200, 'grams'),
        new Ingredient('Ginger-Garlic Paste', 2, 'tablespoons'),
        new Ingredient('Biryani Masala', 2, 'tablespoons'),
        new Ingredient('Turmeric Powder', 1, 'teaspoon'),
        new Ingredient('Red Chili Powder', 1, 'teaspoon'),
        new Ingredient('Salt', 2, 'teaspoons'),
        new Ingredient('Lemon Juice', 1, 'tablespoon'),
        new Ingredient('Oil', 3, 'tablespoons'),
        new Ingredient('Ghee', 2, 'tablespoons'),
        new Ingredient('Mint Leaves', 10, 'grams'),
        new Ingredient('Coriander Leaves', 10, 'grams'),
        new Ingredient('Saffron', 1, 'pinch'),
        new Ingredient('Warm Milk', 3, 'tablespoons'),
        new Ingredient('Bay Leaf', 1, 'piece'),
        new Ingredient('Cloves', 4, 'pieces'),
        new Ingredient('Green Cardamom', 3, 'pieces'),
        new Ingredient('Cinnamon Stick', 1, 'piece'),
      ],
      'Indian Cuisine',
      'Non-Vegetarian',
      2
    ),

    new Recipe(
      'Classic Beef Burger',
      'A timeless favorite featuring a juicy beef patty grilled to perfection. ' +
        'Fresh lettuce, tomato, and melted cheese add layers of texture and taste. ' +
        'All enclosed in soft toasted buns with your favorite sauce. ' +
        'Every bite offers a satisfying mix of smoky, cheesy, and savory goodness.',
      '../../../../assets/Recipes/Classic Beef Burger.jpg',
      '00:30:00',
      [
        'In a bowl, mix ground beef with salt, pepper, garlic powder, and onion powder. Form into equal-sized patties.',
        'Preheat a skillet or grill over medium-high heat.',
        'Cook the beef patties for 3–4 minutes per side, or until desired doneness. Add cheese slices during the last minute to melt.',
        'Toast the burger buns lightly on the grill or pan.',
        'Assemble the burger: spread mayo on the bottom bun, place lettuce and tomato slices, then add the beef patty with melted cheese.',
        'Top with onion rings and desired condiments such as ketchup or mustard.',
        'Finish by placing the top bun and serve immediately.',
      ],
      [
        new Ingredient('Ground Beef (80/20 lean-to-fat)', 300, 'grams'),
        new Ingredient('Salt', 1, 'teaspoon'),
        new Ingredient('Black Pepper', 1, 'teaspoon'),
        new Ingredient('Garlic Powder', 0.5, 'teaspoon'),
        new Ingredient('Onion Powder', 0.5, 'teaspoon'),
        new Ingredient('Burger Buns', 2, 'pieces'),
        new Ingredient('Cheese Slices', 2, 'pieces'),
        new Ingredient('Lettuce Leaves', 20, 'grams'),
        new Ingredient('Tomato (sliced)', 1, 'piece'),
        new Ingredient('Onion Rings', 30, 'grams'),
        new Ingredient('Mayonnaise', 1, 'tablespoon'),
        new Ingredient('Ketchup', 1, 'tablespoon'),
        new Ingredient('Mustard', 1, 'teaspoon'),
      ],
      'American Cuisine',
      'Non-Vegetarian',
      3
    ),

    new Recipe(
      'Sushi Platter',
      'A beautiful assortment of Japanese sushi rolls filled with fresh fish and crisp vegetables. ' +
        'Each roll showcases balance between flavor, color, and presentation. ' +
        'Served with soy sauce, wasabi, and pickled ginger for harmony of taste. ' +
        'A perfect meal for those who appreciate art in their food.',
      '../../../../assets/Recipes/Sushi Platter.jpg',
      '01:10:00',
      [
        'Rinse the sushi rice several times until the water runs clear, then cook according to package instructions.',
        'In a bowl, mix rice vinegar, sugar, and salt. Fold this mixture gently into the cooked rice while it is still warm. Let the rice cool completely.',
        'Prepare fillings: slice the salmon and tuna into thin sashimi pieces, cut cucumber and avocado into strips.',
        'For maki rolls, place a nori sheet on a bamboo mat, spread an even layer of sushi rice, and add fillings such as salmon, cucumber, or avocado.',
        'Roll tightly using the bamboo mat and slice into equal bite-sized pieces with a sharp wet knife.',
        'For nigiri, shape small portions of sushi rice into oval mounds and top each with a slice of fresh fish.',
        'Arrange maki, nigiri, and sashimi neatly on a platter.',
        'Garnish with pickled ginger, wasabi, and soy sauce on the side.',
        'Serve immediately or keep chilled until ready to serve.',
      ],
      [
        new Ingredient('Sushi Rice', 300, 'grams'),
        new Ingredient('Rice Vinegar', 3, 'tablespoons'),
        new Ingredient('Sugar', 1, 'tablespoon'),
        new Ingredient('Salt', 1, 'teaspoon'),
        new Ingredient('Nori Sheets', 4, 'pieces'),
        new Ingredient('Fresh Salmon (sashimi-grade)', 150, 'grams'),
        new Ingredient('Fresh Tuna (sashimi-grade)', 150, 'grams'),
        new Ingredient('Cucumber (sliced)', 50, 'grams'),
        new Ingredient('Avocado (sliced)', 1, 'piece'),
        new Ingredient('Soy Sauce', 2, 'tablespoons'),
        new Ingredient('Wasabi', 1, 'teaspoon'),
        new Ingredient('Pickled Ginger', 20, 'grams'),
      ],
      'Japanese Cuisine',
      'Non-Vegetarian',
      4
    ),

    new Recipe(
      'Ramen Bowl',
      'A hearty Japanese noodle soup with a deeply flavored broth and chewy noodles. ' +
        'Topped with tender pork slices, soft-boiled eggs, and fresh greens. ' +
        'The miso or soy base gives warmth and comfort in every sip. ' +
        'A complete meal that embodies true umami satisfaction.',
      '../../../../assets/Recipes/Ramen Bowl.jpg',
      '01:20:00',
      [
        'In a large pot, heat oil and sauté garlic and ginger until fragrant.',
        'Add chicken broth, soy sauce, miso paste, and mirin. Stir well and let the broth simmer for 45–50 minutes to develop flavor.',
        'Boil the ramen noodles in a separate pot according to package instructions. Drain and set aside.',
        'Prepare toppings: slice cooked chicken, soft-boil eggs (6–7 minutes), cut corn and green onions.',
        'Add bok choy to the simmering broth for the last 5 minutes of cooking.',
        'Assemble the bowl: place cooked ramen noodles in a bowl, pour hot broth over them.',
        'Arrange sliced chicken, soft-boiled egg halves, bok choy, corn, and green onions on top.',
        'Finish with sesame seeds and optional chili oil.',
        'Serve immediately while hot.',
      ],
      [
        new Ingredient('Ramen Noodles', 200, 'grams'),
        new Ingredient('Chicken Broth', 1, 'liter'),
        new Ingredient('Soy Sauce', 3, 'tablespoons'),
        new Ingredient('Miso Paste', 2, 'tablespoons'),
        new Ingredient('Mirin', 1, 'tablespoon'),
        new Ingredient('Garlic (minced)', 3, 'cloves'),
        new Ingredient('Ginger (minced)', 1, 'tablespoon'),
        new Ingredient('Cooked Chicken (sliced)', 200, 'grams'),
        new Ingredient('Eggs', 2, 'pieces'),
        new Ingredient('Bok Choy', 100, 'grams'),
        new Ingredient('Sweet Corn', 50, 'grams'),
        new Ingredient('Green Onions (sliced)', 20, 'grams'),
        new Ingredient('Sesame Seeds', 1, 'teaspoon'),
        new Ingredient('Chili Oil', 1, 'teaspoon'),
      ],
      'Japanese Cuisine',
      'Non-Vegetarian',
      5
    ),

    new Recipe(
      'Chicken Tacos',
      'Soft tortillas filled with smoky grilled chicken, crunchy lettuce, and zesty salsa. ' +
        'Each bite bursts with Mexican flavors and a hint of lime. ' +
        'Perfect for gatherings or a quick weeknight meal. ' +
        'Fresh, flavorful, and impossible to resist.',
      '../../../../assets/Recipes/Chicken Tacos.jpg',
      '00:35:00',
      [
        'In a bowl, season the chicken with chili powder, cumin, paprika, garlic powder, salt, pepper, and lime juice. Marinate for 10–15 minutes.',
        'Heat oil in a skillet over medium heat and cook the chicken until fully cooked and slightly charred. Slice or shred the chicken.',
        'Warm the tortillas in a pan or directly over a flame until soft and pliable.',
        'Prepare the toppings: chop lettuce, dice tomatoes, slice onions, and grate cheese.',
        'Assemble the tacos by placing chicken in the center of each tortilla.',
        'Top with lettuce, tomatoes, onions, cheese, and fresh cilantro.',
        'Finish with a squeeze of lime and optional salsa or sour cream.',
        'Serve immediately while warm.',
      ],
      [
        new Ingredient('Chicken Breast (sliced or shredded)', 300, 'grams'),
        new Ingredient('Tortillas (small, soft)', 6, 'pieces'),
        new Ingredient('Chili Powder', 1, 'teaspoon'),
        new Ingredient('Cumin Powder', 1, 'teaspoon'),
        new Ingredient('Paprika', 1, 'teaspoon'),
        new Ingredient('Garlic Powder', 0.5, 'teaspoon'),
        new Ingredient('Salt', 1, 'teaspoon'),
        new Ingredient('Black Pepper', 0.5, 'teaspoon'),
        new Ingredient('Lime Juice', 1, 'tablespoon'),
        new Ingredient('Oil', 1, 'tablespoon'),
        new Ingredient('Lettuce (shredded)', 30, 'grams'),
        new Ingredient('Tomatoes (diced)', 1, 'piece'),
        new Ingredient('Onion (sliced)', 50, 'grams'),
        new Ingredient('Cheddar Cheese (grated)', 40, 'grams'),
        new Ingredient('Cilantro', 5, 'grams'),
        new Ingredient('Salsa', 2, 'tablespoons'),
        new Ingredient('Sour Cream', 2, 'tablespoons'),
      ],
      'Mexican Cuisine',
      'Non-Vegetarian',
      6
    ),

    new Recipe(
      'Margherita Pizza',
      'Classic Italian pizza topped with tangy tomato sauce, fresh mozzarella, and fragrant basil. ' +
        'A perfect balance of simplicity and flavor, baked to golden perfection. ' +
        'Soft on the inside with a crisp edge that melts in your mouth. ' +
        'Loved worldwide for its authenticity and freshness.',
      '../../../../assets/Recipes/Margherita Pizza.jpg',
      '01:30:00',
      [
        'In a bowl, mix warm water, sugar, and yeast. Let it sit for 5–10 minutes until frothy.',
        'Add flour, salt, and olive oil to the yeast mixture. Mix until a dough forms.',
        'Knead the dough for 8–10 minutes until smooth and elastic.',
        'Cover and let the dough rise for 1 hour or until doubled in size.',
        'Preheat the oven to 230–250°C (445–480°F). Place a pizza stone or tray inside to heat.',
        'Punch down the dough and roll it into a thin pizza base.',
        'Spread tomato sauce evenly over the base, leaving a small border for the crust.',
        'Add slices of fresh mozzarella evenly across the surface.',
        'Bake for 10–12 minutes until the crust is golden and the cheese is bubbly.',
        'Remove from the oven and top with fresh basil leaves.',
        'Drizzle lightly with olive oil before serving.',
      ],
      [
        new Ingredient('All-Purpose Flour', 250, 'grams'),
        new Ingredient('Warm Water', 150, 'ml'),
        new Ingredient('Instant Yeast', 1, 'teaspoon'),
        new Ingredient('Sugar', 1, 'teaspoon'),
        new Ingredient('Salt', 1, 'teaspoon'),
        new Ingredient('Olive Oil', 1, 'tablespoon'),
        new Ingredient('Tomato Sauce (pizza sauce)', 100, 'grams'),
        new Ingredient('Fresh Mozzarella', 150, 'grams'),
        new Ingredient('Fresh Basil Leaves', 10, 'grams'),
        new Ingredient('Olive Oil (for drizzle)', 1, 'teaspoon'),
      ],
      'Italian Cuisine',
      'Vegetarian',
      7
    ),

    new Recipe(
      'Chocolate Lava Cake',
      'A decadent dessert featuring a molten chocolate center that flows like lava when cut. ' +
        'Soft on the outside with a rich, gooey core inside. ' +
        'Perfect with a scoop of vanilla ice cream or whipped cream. ' +
        'A heavenly treat for every chocolate lover.',
      '../../../../assets/Recipes/Chocolate Lava Cake.jpg',
      '00:30:00',
      [
        'Preheat the oven to 220°C (425°F). Grease the ramekins with butter and dust lightly with cocoa powder.',
        'Melt the butter and dark chocolate together in a heatproof bowl over a double boiler or in the microwave.',
        'In a separate bowl, whisk the eggs, egg yolks, and sugar until pale and slightly thickened.',
        'Fold the melted chocolate mixture into the egg mixture.',
        'Sift in the flour and gently fold to form a smooth batter.',
        'Divide the batter evenly into the greased ramekins.',
        'Bake for 10–12 minutes until the edges are set but the center remains soft.',
        'Remove from the oven, let rest for 1 minute, then invert onto plates.',
        'Serve immediately, optionally with ice cream or powdered sugar.',
      ],
      [
        new Ingredient('Dark Chocolate', 120, 'grams'),
        new Ingredient('Unsalted Butter', 80, 'grams'),
        new Ingredient('Eggs', 2, 'pieces'),
        new Ingredient('Egg Yolks', 2, 'pieces'),
        new Ingredient('Sugar', 50, 'grams'),
        new Ingredient('All-Purpose Flour', 40, 'grams'),
        new Ingredient('Cocoa Powder (for dusting)', 1, 'tablespoon'),
      ],
      'French Cuisine',
      'Vegetarian',
      8
    ),

    new Recipe(
      'Blueberry Pancakes',
      'Soft, fluffy pancakes dotted with juicy blueberries that burst with sweetness. ' +
        'A breakfast classic that’s light yet satisfying. ' +
        'Perfectly golden and served with butter or maple syrup. ' +
        'Ideal for a lazy weekend brunch or family breakfast.',
      '../../../../assets/Recipes/Blueberry Pancakes.jpg',
      '00:25:00',
      [
        'In a bowl, whisk together flour, sugar, baking powder, and salt.',
        'In a separate bowl, whisk milk, egg, and melted butter until combined.',
        'Pour the wet mixture into the dry ingredients and mix gently until just combined. Do not overmix.',
        'Fold in fresh blueberries.',
        'Heat a lightly oiled or buttered skillet over medium heat.',
        'Pour about 1/4 cup of batter onto the skillet for each pancake.',
        'Cook until bubbles form on the surface and the edges begin to set, then flip and cook the other side until golden brown.',
        'Repeat with remaining batter.',
        'Serve warm with butter, extra blueberries, and maple syrup.',
      ],
      [
        new Ingredient('All-Purpose Flour', 150, 'grams'),
        new Ingredient('Sugar', 2, 'tablespoons'),
        new Ingredient('Baking Powder', 2, 'teaspoons'),
        new Ingredient('Salt', 0.5, 'teaspoon'),
        new Ingredient('Milk', 200, 'ml'),
        new Ingredient('Egg', 1, 'piece'),
        new Ingredient('Unsalted Butter (melted)', 2, 'tablespoons'),
        new Ingredient('Blueberries (fresh)', 100, 'grams'),
        new Ingredient('Butter (for cooking)', 1, 'tablespoon'),
        new Ingredient('Maple Syrup (for serving)', 2, 'tablespoons'),
      ],
      'American Cuisine',
      'Vegetarian',
      9
    ),

    new Recipe(
      'Butter Chicken',
      'A creamy and indulgent Indian curry featuring tender chicken simmered in tomato gravy. ' +
        'The buttery sauce is mildly spiced and irresistibly smooth. ' +
        'Pairs beautifully with naan or basmati rice. ' +
        'A dish that defines the rich essence of Indian Cuisine.',
      '../../../../assets/Recipes/Butter Chicken.jpg',
      '01:10:00',
      [
        'In a bowl, marinate the chicken with yogurt, ginger-garlic paste, turmeric, chili powder, garam masala, lemon juice, and salt. Let it rest for 20–30 minutes.',
        'Heat oil or butter in a pan and cook the marinated chicken until lightly browned. Remove and set aside.',
        'In the same pan, add more butter and sauté onions until soft.',
        'Add ginger-garlic paste and cook until fragrant.',
        'Stir in tomato puree, chili powder, coriander powder, and salt. Cook for 8–10 minutes until the sauce thickens and the oil begins to separate.',
        'Add cashew paste and cook for 2–3 minutes to enhance creaminess.',
        'Return the cooked chicken to the pan and stir well.',
        'Pour in heavy cream and simmer on low heat for 10–15 minutes until the chicken is tender and the sauce is silky.',
        'Finish with butter, crushed fenugreek leaves (kasuri methi), and stir gently.',
        'Serve hot with naan, roti, or steamed basmati rice.',
      ],
      [
        new Ingredient('Chicken (boneless, diced)', 500, 'grams'),
        new Ingredient('Yogurt', 100, 'grams'),
        new Ingredient('Ginger-Garlic Paste', 2, 'tablespoons'),
        new Ingredient('Turmeric Powder', 1, 'teaspoon'),
        new Ingredient('Red Chili Powder', 1, 'teaspoon'),
        new Ingredient('Garam Masala', 1, 'teaspoon'),
        new Ingredient('Lemon Juice', 1, 'tablespoon'),
        new Ingredient('Salt', 2, 'teaspoons'),
        new Ingredient('Butter', 3, 'tablespoons'),
        new Ingredient('Onions (chopped)', 150, 'grams'),
        new Ingredient('Tomato Puree', 200, 'grams'),
        new Ingredient('Coriander Powder', 1, 'teaspoon'),
        new Ingredient('Cashew Paste', 2, 'tablespoons'),
        new Ingredient('Heavy Cream', 100, 'ml'),
        new Ingredient('Kasuri Methi (crushed)', 1, 'teaspoon'),
        new Ingredient('Oil', 1, 'tablespoon'),
      ],
      'Indian Cuisine',
      'Non-Vegetarian',
      10
    ),

    new Recipe(
      'Strawberry Smoothie',
      'A vibrant, refreshing drink blending strawberries, yogurt, and honey to perfection. ' +
        'Cool, creamy, and naturally sweet without extra sugar. ' +
        'Ideal for breakfast, post-workout, or a hot summer day. ' +
        'A fruity pick-me-up packed with flavor and freshness.',
      '../../../../assets/Recipes/Strawberry Smoothie.jpg',
      '00:10:00',
      [
        'Wash and hull the strawberries.',
        'Add strawberries, yogurt, milk, honey, and ice cubes into a blender.',
        'Blend on high speed until smooth and creamy.',
        'Taste and adjust sweetness by adding more honey if desired.',
        'Pour into a glass and serve immediately.',
        'Optionally garnish with fresh strawberry slices or mint leaves.',
      ],
      [
        new Ingredient('Strawberries (fresh)', 200, 'grams'),
        new Ingredient('Yogurt', 150, 'grams'),
        new Ingredient('Milk', 100, 'ml'),
        new Ingredient('Honey', 1, 'tablespoon'),
        new Ingredient('Ice Cubes', 4, 'pieces'),
        new Ingredient('Mint Leaves (optional garnish)', 2, 'grams'),
      ],
      'American Cuisine',
      'Vegetarian',
      11
    ),

    new Recipe(
      'Paneer Butter Masala',
      'A rich and creamy North Indian curry made with soft paneer cubes in tomato gravy. ' +
        'The sauce is buttery, spiced just right, and silky smooth. ' +
        'Every bite melts in your mouth and pairs perfectly with naan or rice. ' +
        'A vegetarian classic that never disappoints.',
      '../../../../assets/Recipes/Paneer Butter Masala.jpg',
      '00:50:00',
      [
        'Heat 1 tablespoon of butter in a pan and sauté onions until soft.',
        'Add ginger-garlic paste and cook until fragrant.',
        'Add tomatoes, cashews, chili powder, turmeric, and salt. Cook until tomatoes soften.',
        'Cool slightly, then blend the mixture into a smooth paste.',
        'In the same pan, heat the remaining butter and add the blended gravy. Cook for 5–7 minutes until the oil starts to separate.',
        'Add garam masala, coriander powder, and sugar. Mix well.',
        'Pour in heavy cream and simmer for 2 minutes.',
        'Add paneer cubes and gently stir to coat them in the gravy.',
        'Simmer on low heat for 5–7 minutes so the paneer absorbs the flavors.',
        'Finish with crushed kasuri methi and a small knob of butter.',
        'Serve hot with naan, roti, or steamed rice.',
      ],
      [
        new Ingredient('Paneer (cubed)', 300, 'grams'),
        new Ingredient('Butter', 3, 'tablespoons'),
        new Ingredient('Onions (chopped)', 100, 'grams'),
        new Ingredient('Tomatoes (chopped)', 200, 'grams'),
        new Ingredient('Cashews', 20, 'grams'),
        new Ingredient('Ginger-Garlic Paste', 1, 'tablespoon'),
        new Ingredient('Red Chili Powder', 1, 'teaspoon'),
        new Ingredient('Turmeric Powder', 0.5, 'teaspoon'),
        new Ingredient('Salt', 1.5, 'teaspoons'),
        new Ingredient('Garam Masala', 1, 'teaspoon'),
        new Ingredient('Coriander Powder', 1, 'teaspoon'),
        new Ingredient('Sugar', 1, 'teaspoon'),
        new Ingredient('Heavy Cream', 80, 'ml'),
        new Ingredient('Kasuri Methi (crushed)', 1, 'teaspoon'),
      ],
      'Indian Cuisine',
      'Vegetarian',
      12
    ),

    new Recipe(
      'Veggie Stir-Fry with Noodles',
      'A colorful Asian-inspired dish combining noodles with crisp vegetables. ' +
        'Lightly tossed in a glossy, flavorful sauce for balance and crunch. ' +
        'Healthy, quick, and full of umami flavor. ' +
        'A go-to meal for busy weeknights or light lunches.',
      '../../../../assets/Recipes/Veggie Stir-Fry with Noodles.jpg',
      '00:30:00',
      [
        'Cook the noodles according to package instructions, drain, and set aside.',
        'Heat oil in a large wok or pan over medium-high heat.',
        'Add garlic and ginger and sauté until fragrant.',
        'Add carrots, bell peppers, broccoli, and snap peas. Stir-fry for 4–5 minutes until slightly tender but still crisp.',
        'Add soy sauce, oyster sauce (or vegetarian alternative), vinegar, and a pinch of sugar. Mix well.',
        'Add the cooked noodles to the wok and toss everything together until well combined.',
        'Add spring onions and sesame oil, then stir for another minute.',
        'Remove from heat and serve hot, garnished with sesame seeds or extra spring onions.',
      ],
      [
        new Ingredient('Noodles (any type – wheat or rice)', 200, 'grams'),
        new Ingredient('Carrot (sliced)', 50, 'grams'),
        new Ingredient('Bell Pepper (sliced)', 70, 'grams'),
        new Ingredient('Broccoli Florets', 80, 'grams'),
        new Ingredient('Snap Peas', 60, 'grams'),
        new Ingredient('Garlic (minced)', 2, 'cloves'),
        new Ingredient('Ginger (minced)', 1, 'teaspoon'),
        new Ingredient('Soy Sauce', 2, 'tablespoons'),
        new Ingredient('Oyster Sauce or Veg Oyster Sauce', 1, 'tablespoon'),
        new Ingredient('Vinegar', 1, 'teaspoon'),
        new Ingredient('Sugar', 0.5, 'teaspoon'),
        new Ingredient('Spring Onions (chopped)', 20, 'grams'),
        new Ingredient('Sesame Oil', 1, 'teaspoon'),
        new Ingredient('Cooking Oil', 1, 'tablespoon'),
        new Ingredient('Sesame Seeds (optional garnish)', 1, 'teaspoon'),
      ],
      'Mexican Cuisine',
      'Vegetarian',
      13
    ),

    new Recipe(
      'Veggie Lasagna',
      'A comforting baked pasta layered with vegetables, sauce, and gooey cheese. ' +
        'Each bite delivers warmth and homely satisfaction. ' +
        'Golden crust on top with soft, flavorful layers below. ' +
        'A wholesome vegetarian delight perfect for family dinners.',
      '../../../../assets/Recipes/Veggie Lasagna.jpg',
      '01:20:00',
      [
        'Preheat the oven to 180°C (350°F).',
        'Heat olive oil in a pan and sauté onions and garlic until softened.',
        'Add bell peppers, zucchini, spinach, carrots, salt, and pepper. Cook until the vegetables soften.',
        'Pour in tomato sauce, oregano, and basil. Simmer for 8–10 minutes.',
        'In a separate saucepan, melt butter, whisk in flour, and gradually add milk to make a smooth béchamel sauce. Season with salt and pepper.',
        'Spread a thin layer of tomato-vegetable sauce at the bottom of a baking dish.',
        'Place a layer of lasagna sheets over the sauce.',
        'Add a layer of vegetable sauce, then drizzle some béchamel, and sprinkle mozzarella.',
        'Repeat the layers until all ingredients are used, finishing with béchamel and cheese on top.',
        'Cover with foil and bake for 25 minutes.',
        'Remove foil and bake for an additional 15 minutes until the top is golden and bubbly.',
        'Allow the lasagna to rest for 10 minutes before slicing and serving.',
      ],
      [
        new Ingredient('Lasagna Sheets', 250, 'grams'),
        new Ingredient('Tomato Sauce', 400, 'grams'),
        new Ingredient('Onion (chopped)', 100, 'grams'),
        new Ingredient('Garlic (minced)', 3, 'cloves'),
        new Ingredient('Bell Peppers (chopped)', 100, 'grams'),
        new Ingredient('Zucchini (sliced)', 120, 'grams'),
        new Ingredient('Spinach', 80, 'grams'),
        new Ingredient('Carrots (grated)', 80, 'grams'),
        new Ingredient('Olive Oil', 2, 'tablespoons'),
        new Ingredient('Oregano', 1, 'teaspoon'),
        new Ingredient('Basil', 1, 'teaspoon'),
        new Ingredient('Salt', 1.5, 'teaspoons'),
        new Ingredient('Black Pepper', 1, 'teaspoon'),
        new Ingredient('Butter', 2, 'tablespoons'),
        new Ingredient('Flour', 2, 'tablespoons'),
        new Ingredient('Milk', 300, 'ml'),
        new Ingredient('Mozzarella Cheese (shredded)', 200, 'grams'),
      ],
      'Italian Cuisine',
      'Vegetarian',
      14
    ),
  ]);

  setRecipes(recipes: Recipe[]) {
    // Normalize all incoming recipes from firebase
    const fetchedRecipes = recipes.map((recipe, index) => ({
      ...recipe,
      id: Number(recipe.id ?? index),
      ingredients: recipe.ingredients ?? [],
    }));

    const existing = this.recipes();

    // Keep only the existing recipes whose IDs are NOT in the remote list
    const DataBaseIds = new Set(fetchedRecipes.map((r) => r.id)); //stores Ids from firebase and set wraps the extracted ids in a set
    const localOnly = existing.filter((r) => !DataBaseIds.has(Number(r.id))); // keeps only the local recipes whose IDs are not present in the Firebase recipe IDs.

    // Combine local-only recipes with normalized remote recipes
    this.recipes.set([...localOnly, ...fetchedRecipes]);
  }

  getRecipesSignal() {
    return this.recipes; // returns signal
  }

  getRecipes() {
    return this.recipes();
  }

  getRecipeById(id: any) {
    const numericId = Number(id);
    return this.recipes().find((r) => Number(r.id) === numericId);
  }

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addNewIngredients(ingredient);
  }

  addRecipe(recipe: Recipe) {
    const numericId =
      typeof recipe.id === 'number'
        ? recipe.id
        : Number(recipe.id) || Date.now();
    recipe.id = numericId;

    this.recipes.update((list) => [...list, recipe]);
  }

  updateRecipe(id: number, newRecipe: Recipe) {
    this.recipes.update((list) => {
      const updatedList = list.map((r) =>
        r.id === id ? { ...newRecipe, id } : r
      );
      return updatedList;
    });
  }

  deleteRecipe(id: number) {
    this.recipes.update((list) => list.filter((r) => r.id !== id));
  }
}

function uuidv4(): number | String | undefined {
  throw new Error('Function not implemented.');
}
