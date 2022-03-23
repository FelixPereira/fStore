const PRODUCTS = {
  'Em destaque': {
    categoryId: 0,
    categoryName: "Em destaque",
    categoryUrl: "/loja/destaque",
    items: [
      {
        id: 33,
        name: "Blue beanie",
        price: 7000,
        productImage: "/images/shop-img/hats/blue-beanie.png"
      },

      {
        id: 34,
        name: "Black shearling",
        price: 3000,
        productImage: "/images/shop-img/jackets/black-shearling.png"
      },

      {
        id: 35,
        name: "Nikes red",
        price: 9000,
        productImage: "/images/shop-img/sneakers/nikes-red.png"
      },

      {
        id: 36,
        name: "Grey jean jacket",
        price: 3000,
        productImage: "/images/shop-img/jackets/grey-jean-jacket.png"
      },

      {
        id: 37,
        name: "Brown brim",
        price: 12000,
        productImage: "/images/shop-img/hats/brown-brim.png"
      },

      {
        id: 38,
        name: "Calção1",
        price: 14000,
        productImage: "/images/shop-img/mens/polka-dot-shirt.png"
      },
    ]
  },

  "Homens": {
    categoryId: 1,
    categoryName: "Homens",
    categoryUrl: "/loja/homens",
    items: [
      {
        id: 1,
        name: "Jean shirt",
        price: 23000,
        productImage: "/images/shop-img/mens/roll-up-jean-shirt.png"
      },

      {
        id: 2,
        name: "Floral shirt",
        price: 2000,
        productImage: "/images/shop-img/mens/floral-shirt.png"
      },

      {
        id: 3,
        name: "Long sleeveis",
        price: 15000,
        productImage: "/images/shop-img/mens/long-sleeve.png"
      },

      {
        id: 4,
        name: "Pink shirt",
        price: 23000,
        productImage: "/images/shop-img/mens/pink-shirt.png"
      },

      {
        id: 5,
        name: "Polka dot shirt",
        price: 19000,
        productImage: "/images/shop-img/mens/polka-dot-shirt.png"
      },
      {
        id: 6,
        name: "Jean shirt",
        price: 12000,
        productImage: "/images/shop-img/mens/roll-up-jean-shirt.png"
      },

      {
        id: 7,
        name: "Floral shirt",
        price: 14000,
        productImage: "/images/shop-img/mens/floral-shirt.png"
      },

      {
        id: 8,
        name: "Long sleeveis",
        price: 34000,
        productImage: "/images/shop-img/mens/long-sleeve.png"
      },

      {
        id: 9,
        name: "Pink shirt",
        price: 12000,
        productImage: "/images/shop-img/mens/pink-shirt.png"
      },

      {
        id: 10,
        name: "Polka dot shirt",
        price: 65000,
        productImage: "/images/shop-img/mens/polka-dot-shirt.png"
      }
    ]
  },

  
  "Mulheres": {
    categoryId: 2,
    categoryName: "Mulheres",
    categoryUrl: "/loja/mulheres",
    items: [
      {
        id: 11,
        name: "Blue tank",
        price: 40000,
        productImage: "/images/shop-img/womens/blue-tank.png"
      },

      {
        id: 12,
        name: "Floral blouse",
        price: 14000,
        productImage: "/images/shop-img/womens/floral-blouse.png"
      },

      {
        id: 13,
        name: "Floral skirt",
        price: 44000,
        productImage: "/images/shop-img/womens/floral-skirt.png"
      },

      {
        id: 14,
        name: "Red polka dot dress",
        price: 4000,
        productImage: "/images/shop-img/womens/red-polka-dot-dress.png"
      },

      {
        id: 15,
        name: "Striped sweater",
        price: 14000,
        productImage: "/images/shop-img/womens/striped-sweater.png"
      },
      {
        id: 16,
        name: "Blue tank",
        price: 14000,
        productImage: "/images/shop-img/womens/blue-tank.png"
      },

      {
        id: 17,
        name: "Floral blouse",
        price: 24000,
        productImage: "/images/shop-img/womens/floral-blouse.png"
      },

      {
        id: 18,
        name: "Floral skirt",
        price: 4000,
        productImage: "/images/shop-img/womens/floral-skirt.png"
      },

      {
        id: 19,
        name: "Red polka dot dress",
        price: 14000,
        productImage: "/images/shop-img/womens/red-polka-dot-dress.png"
      },

      {
        id: 20,
        name: "Striped sweater",
        price: 28000,
        productImage: "/images/shop-img/womens/striped-sweater.png"
      }
    ]
  },

  
  "Meninos": {
    categoryId: 3,
    categoryName: "Meninos",
    categoryUrl: "/loja/meninos",
    items: [
      {
        id: 21,
        name: "Chapéu 1",
        price: 21000,
        productImage: "/images/shop-img/mens/polka-dot-shirt.png"
      },

      {
        id: 22,
        name: "T-Shirt",
        price: 14000,
        productImage: "/images/shop-img/mens/polka-dot-shirt.png"
      },

      {
        id: 23,
        name: "Ténis",
        price: 14000,
        productImage: "/images/shop-img/mens/polka-dot-shirt.png"
      },

      {
        id: 24,
        name: "Casaco",
        price: 15000,
        productImage: "/images/shop-img/mens/polka-dot-shirt.png"
      },

      {
        id: 25,
        name: "Calção1",
        price: 18000,
        productImage: "/images/shop-img/mens/polka-dot-shirt.png"
      },

      {
        id: 26,
        name: "Calção1",
        price: 13000,
        productImage: "/images/shop-img/mens/polka-dot-shirt.png"
      },
    ]
  },

  "Meninas": {
    categoryId: 4,
    categoryName: "Meninas",
    categoryUrl: "/loja/meninas",
    items: [
      {
        id: 27,
        name: "Chapéu 1",
        price: 418000,
        productImage: "/images/shop-img/mens/polka-dot-shirt.png"
      },

      {
        id: 28,
        name: "T-Shirt",
        price: 20000,
        productImage: "/images/shop-img/mens/polka-dot-shirt.png"
      },

      {
        id: 29,
        name: "Ténis",
        price: 12000,
        productImage: "/images/shop-img/mens/polka-dot-shirt.png"
      },

      {
        id: 30,
        name: "Casaco",
        price: 2000,
        productImage: "/images/shop-img/mens/polka-dot-shirt.png"
      },

      {
        id: 31,
        name: "Calção1",
        price: 4000,
        productImage: "/images/shop-img/mens/polka-dot-shirt.png"
      },

      {
        id: 32,
        name: "Calção1",
        price: 7000,
        productImage: "/images/shop-img/mens/polka-dot-shirt.png"
      },
    ]
  }
};

export default PRODUCTS;