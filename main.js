const menu = [
  {
    id: 1,
    title: "Broccolli & Sun-dried Omelette",
    category: "breakfast",
    price: 120.00,
    img: "./assets/curried-omelette.jpg",
    desc: `Broccoli, sun-dried tomatoes, omelette with a side of homemade fries. `,
    rating: "★★★☆☆",
  },
  {
    id: 2,
    title: "Eggs Florentine Sandwich",
    category: "breakfast",
    price: 110.00,
    img: "./assets/Eggs.jpg",
    desc: `Poached eggs, hollandaise sauce, beef bacon and spinach on a sour dough bun with a side of mix greens and homemade fries.`,
    rating: "★★★★☆",
  },
  {
    id: 3,
    title: "Broccolli Soup",
    category: "soup",
    price: 60.00,
    img: "./assets/broccoli-soup.jpeg",
    desc: `Broccoli, ginger, miso paste, peas and pumpkin seeds.`,
    rating: "★★☆☆☆",
  },
  {
    id: 4,
    title: "Chicken Soup",
    category: "soup",
    price: 70.00,
    img: "./assets/chicken-soup.webp",
    desc: `Diced chicken and cream served with a lemon wedge, croutons, and some chopped Parsely.`,
    rating: "★★★★☆",
  },
  {
    id: 5,
    title: "Chicken Picatta",
    category: "lunch",
    price: 150.00,
    img: "./assets/Chicken-Picatta.jpeg",
    desc: `Chicken cutlet in creamy mushroom and caramelized onion sauce served with fettuccine cream pasta. `,
    rating: "★★★★★",
  },
  {
    id: 6,
    title: "Mongolian Beef",
    category: "lunch",
    price: 190,
    img: "./assets/mongolian-beef.jpg",
    desc: `Thin slices of caramelized beef in a soy ginger sauce tossed with nipped green onion served with white basmati rice.`,
    rating: "★★★☆☆",
  },
  {
    id: 7,
    title: "Grilled Salmon Steak",
    category: "lunch",
    price: 195.00,
    img: "./assets/Grilled-Salmon-Steak.jpeg",
    desc: `Marinated Norwegian grilled salmon with your choice of butter, lemon sauce or teriyaki sauce served with white basmati rice`,
    rating: "★★☆☆☆",
  },
  {
    id: 8,
    title: "Roasted Peaches and Honey Comb",
    category: "desserts",
    price: 85.00,
    img: "./assets/Roasted-Peaches-and-Honey-Comb.jpeg",
    desc: `Roasted peaches with honeycomb crumbles and vanilla ice cream.`,
    rating: "★★★★☆",
  },
  {
    id: 9,
    title: "Lotus French Toast",
    category: "desserts",
    price: 70.00,
    img: "./assets/Lotus-French-Toast.jpeg",
    desc: `Lotus biscuit spread on French toast topped with vanilla ice cream`,
    rating: "★★★☆☆"
  },
  {
    id: 10,
    title: "Moroccan Tea",
    category: "Drinks",
    price: 30.00,
    img: "./assets/Moroccan-Tea.jpeg",
    desc: `Refreshing imported Moroccan Tea with mint leaves, served with sugar to your taste.`,
    rating: "★★★★☆",
  },
  {
    id: 11,
    title: "Spanish Latte",
    category: "Drinks",
    price: 45.00,
    img: "./assets/Spanish-Latte.jpeg",
    desc: `Freshly brewed coffee slowly poured onto a layer of sweetened condensed milk and topped with frothed milk. Flavour added to your taste.`,
    rating: "★★★★★",
  },
  {
    id: 12,
    title: "Water",
    category: "Drinks",
    price: 15.00,
    img: "./assets/water.jpeg",
    desc: `Refreshing coldwater from our elite sources. Tip: ask for a lemon wedge and a mint leaf for extra freshness and a good detox!`,
    rating: "☆☆☆☆☆",
  },
];

const btn_con = document.querySelector('.btn-container');
const sec_center = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  displayMenuButtons();
})

const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `
      <article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}LE</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
          <p class="rating">
            ${item.rating}
          </p>
        </div>
      </article>
    `
  }).join('');
  sec_center.innerHTML = displayMenu;
}


const displayMenuButtons = () => {
  const category = menu.reduce((values, item) => {
    if(!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },['all'])
  const category_btns = category.map((ct) => {
    return `
      <button class="filter-btn" data-id="${ct}">${ct}</button>
    `
  }).join('');
  btn_con.innerHTML = category_btns;
  const filter_btns = document.querySelectorAll('.filter-btn');
  filter_btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id;
      const menu_category = menu.filter((menuItem) => {
        if(menuItem.category == category) {
          return menuItem;
        }
      });
      if(category == 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menu_category);
      }
    })
  })
}