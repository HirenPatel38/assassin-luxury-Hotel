export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    items: [
      {
        name: "Truffle Eggs Benedict",
        description: "Poached eggs, black truffle hollandaise, brioche, micro herbs",
        price: "$48",
      },
      {
        name: "Assassin Granola Bowl",
        description: "House-made granola, Greek yogurt, seasonal berries, honeycomb",
        price: "$32",
      },
      {
        name: "Japanese Breakfast Set",
        description: "Miso soup, grilled fish, pickled vegetables, steamed rice, matcha",
        price: "$56",
      },
      {
        name: "Avocado Royale",
        description: "Smashed avocado, poached eggs, salmon caviar, sourdough",
        price: "$44",
      },
    ],
  },
  {
    id: "lunch",
    title: "Lunch",
    items: [
      {
        name: "Wagyu Tartare",
        description: "A5 Wagyu, quail egg, capers, shallots, truffle oil",
        price: "$72",
      },
      {
        name: "Lobster Caesar",
        description: "Maine lobster, baby gem, aged Parmesan, white anchovy dressing",
        price: "$64",
      },
      {
        name: "Mediterranean Sea Bass",
        description: "Pan-seared sea bass, saffron risotto, broccolini, lemon beurre blanc",
        price: "$86",
      },
      {
        name: "Black Cod Miso",
        description: "48-hour marinated black cod, edamame purée, pickled ginger",
        price: "$78",
      },
    ],
  },
  {
    id: "dinner",
    title: "Dinner",
    items: [
      {
        name: "Tomahawk Ribeye",
        description: "2kg dry-aged ribeye, bone marrow butter, truffle fries, béarnaise",
        price: "$185",
      },
      {
        name: "Lobster Thermidor",
        description: "Whole Maine lobster, cognac cream, gruyère gratin, asparagus",
        price: "$165",
      },
      {
        name: "Duck Confit",
        description: "Slow-cooked duck leg, foie gras jus, pommes sarladaises, fig compote",
        price: "$98",
      },
      {
        name: "Omakase Experience",
        description: "Chef's selection of 12 courses, premium nigiri and sashimi",
        price: "$280",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      {
        name: "The Assassin",
        description: "Grey Goose, elderflower liqueur, champagne, edible gold",
        price: "$38",
      },
      {
        name: "Midnight Elixir",
        description: "Japanese whisky, yuzu, activated charcoal, silver leaf",
        price: "$42",
      },
      {
        name: "Velvet Shadow",
        description: "Belvedere vodka, blackberry, lavender, prosecco foam",
        price: "$36",
      },
      {
        name: "Rare Reserve Selection",
        description: "Curated selection from our private wine cellar, sommelier's choice",
        price: "$85+",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        name: "Dark Chocolate Sphere",
        description: "Valrhona chocolate, salted caramel, gold leaf, tableside pour",
        price: "$42",
      },
      {
        name: "Crème Brûlée Noir",
        description: "Black vanilla bean, caramelized sugar, charcoal tuile",
        price: "$36",
      },
      {
        name: "Assassin Tiramisu",
        description: "Espresso-soaked ladyfingers, mascarpone, dark cocoa, Amaretto",
        price: "$38",
      },
      {
        name: "Seasonal Tart",
        description: "Chef's seasonal selection, house-made sorbet, tuile",
        price: "$34",
      },
    ],
  },
];
