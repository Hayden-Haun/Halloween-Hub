const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    // { name: 'Food' },
    // { name: 'Household Supplies' },
    // { name: 'Electronics' },
    // { name: 'Books' },
    // { name: 'Toys' },
    { name: "Apparel" },
    { name: "Outdoors" },
    { name: "Indoors" },
    { name: "Accessories" },
    { name: "Lights" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Adult King Shark Inflatable Costume",
      description:
        "You'll fit right in with the rest of the Suicide Squad this Halloween when you show up wearing this King Shark Inflatable Costume. This hilarious costume is the perfect way to let everyone know exactly who your favorite member of the Suicide Squad is. With this costume, you can easily make your shark transformation in minutes and on the-go with the included battery operated fan and battery pack with belt clip.",
      image: "apparel-mens-shark.png",
      category: categories[0]._id,
      price: 69.99,
      quantity: 100,
    },
    {
      name: "Adult Flamin' Hot Cheetos Bag Costume",
      description:
        "You'll be bringing the heat this Halloween when you wear this officially licensed Adult Flamin' Hot Cheetos Costume! This epic costume is made of foam and is designed to look exactly like a bag of your favorite snack. Put on the included sunglasses and you'll have the hottest costume on the block!",
      image: "apparel-mens-cheetos.png",
      category: categories[0]._id,
      price: 39.99,
      quantity: 96,
    },
    {
      name: "Alien Dress",
      description:
        "Your outer space attire is super important when trying to fit in with all the other aliens! In this alien dress you’ll have everyone jealous of your adorable look.",
      category: categories[0]._id,
      price: 34.99,
      quantity: 95,
    },
    {
      name: "Kids Ghost Costume",
      description:
        "Sometimes the best Halloween costumes are the classic ones! This classic ghost costume will cause a spook and keep your little one comfortable. Let your child decide whether or not this ghost is friendly or not! The sewn in arm holes and attached elastic head strap on this poncho will hold this costume in place leaving them to feel comfortable all night long.",
      image: "apparel-kids-ghost.png",
      category: categories[0]._id,
      price: 19.99,
      quantity: 55,
    },
    {
      name: "Adult Binx Union Suit - Hocus Pocus",
      description:
        "Is there anything better than partying in your pajamas? Show up to your next Halloween party in this officially licensed Binx one piece costume, and you'll be comfortable all night long!",
      image: "apparel-womens-cat.png",
      category: categories[0]._id,
      price: 39.99,
      quantity: 31,
    },
    {
      name: "Kids Star Sorceress Costume",
      description:
        "Your little one will become a master of magic and witchcraft when they put on this Star Sorceress Costume! This beautiful costume includes a hooded velvet dress, a choker that shines bright, and a wand so they can cast spells all Halloween long.",
      image: "apparel-kids-witch.png",
      category: categories[0]._id,
      price: 39.99,
      quantity: 10,
    },
    {
      name: "5.8 Ft Wacky Mole Clown Animatronic",
      description:
        "The carnival is finally back in town! The main street is full of the smell of funnel cake, hot dogs, the sound of kiddie rides, and the screams of terrified children running for their lives. Wacky Mole is rolling back into town with his hammer and a wicked game after an extended stay at the Big Top Rest Home for Nervous Clowns. Be warned, it’s free to play, but the prize is escaping with your life. Wacky Mole will turn your home into the ultimate creepy funhouse and have everyone shook this Halloween with his rotating waist, light-up LED eyes, and sinister smile. Wacky Mole even features blacklight responsive details that will have him glowing in any black-lit setting!",
      image: "outdoor-scary-clown.png",
      category: categories[1]._id,
      price: 219.99,
      quantity: 178,
    },
    {
      name: "9 Ft Light-Up Jack-O'-Lantern Inflatable Archway - Decorations",
      description:
        "Create a stunning display with this light-up Jack-o-lantern inflatable archway! This 9-foot-tall archway features 7 giant Jack-o-lanterns, each with a uniquely frightening expression. A thick, green vine is twisted among the stack of petrifying pumpkins. Bright light illuminates the archway, giving it a dreamlike glow. Transform your entryway with this Jack-o-lantern archway!",
      image: "Outdoor-pumpkin-decoration.png",
      category: categories[1]._id,
      price: 149.99,
      quantity: 52,
    },
    {
      name: "14 Ft Hearse Inflatable - Decorations",
      description:
        "Everyone in the neighborhood will be amazed with how awesome your home looks this Halloween once you decorate your yard with this 14 Ft. Hearse Inflatable. With this huge inflatable in your yard everyone will know that you don't mess around when it comes to decorating for Halloween. Featuring tethers and stakes for suppport this Hearse inflatable is sure to blow you away!",
      image: "outdoor-hearse-decoration.png",
      category: categories[1]._id,
      price: 139.99,
      quantity: 22,
    },
    //ADD IMAGES
    {
      name: "12ft Skeleton",
      description:
        "Home Accents 12 ft. Giant-Sized Skeleton with LifeEyes! Over 95lb package! Will make your house or farm the talk of the town!",
      image: "Outdoor_GiantSkeleton_1000.jpg",
      category: categories[1]._id,
      price: 1000.0,
      quantity: 33,
    },
    {
      name: "6ft Spider",
      description:
        "Get ready for some creepy crawly fun! This massive spider is the perfect addition to any spooky spider web display. With its long hairy legs and piercing red eyes, its a recipe for scares. Let it set up shop in your home and you're sure to have the most haunted house on the block!",
      image: "Outdoor_6ftSpider.png",
      category: categories[1]._id,
      price: 24.99,
      quantity: 115,
    },
    {
      name: "9ft Spider Web",
      description:
        "Up the fear factor of your haunted house with this creepy black Spider Web! This Halloween accessory is 9 feet long and incredibly life-like, sure to scare every guest who dares to enter.",
      image: "Outdoor_SpiderWeb.png",
      category: categories[1]._id,
      price: 15.99,
      quantity: 164,
    },
    {
      name: "Black and White Mystical Tablecloth",
      description:
        "Add some mystical style to your home this Halloween when you get this beautiful tablecloth! The Black and White Mystical Tablecloth features an incredible design that will bring a spiritual vibe to your dinner table.",
      image: "indoor-tablecloth.png",
      category: categories[2]._id,
      price: 14.99,
      quantity: 420,
    },
    {
      name: "Sam Animated Sidestepper Decoration - Trick 'r Trea",
      description:
        "Make sure to follow the rules of Halloween this year or you'll find yourself being chased by this officially licensed Sam Animated Sidestepper Decoration. This decoration will bring one of your favorite horror movie characters to life once you turn him on and let him cause some trouble all over the house. Be sure you don't make him angry or you may end up witnessing his supernatural powers and becoming his next victim! ",
      image: "indoor-toy1.png",
      category: categories[2]._id,
      price: 29.99,
      quantity: 67,
    },
    {
      name: "Deluxe Tarot Cards - Prism Edition",
      description:
        "Take a journey into the world of tarot with this exclusive prism edition deck of deluxe tarot cards. This 78-card deck of holographic paper tarot cards features 22 Major Arcana and 56 Minor Arcana cards. Stunning artwork adorns each card, making this deck ideal for your next social gathering!",
      image: "indoor-tarot.png",
      category: categories[2]._id,
      price: 12.99,
      quantity: 638,
    },
    {
      name: "Deluxe Ouija Board Game - Hasbro",
      description:
        "Maybe you're trying to contact spirits this Halloween, or maybe you're not--either way, you can add an eerie tone to your haunted home when you set up this deluxe Ouija board. This exclusive deluxe game is made with heavy duty board and features special, eye-catching graphics, and includes a planchette made of real wood.",
      image: "indoor-ouija.png",
      category: categories[2]._id,
      price: 34.99,
      quantity: 489,
    },
    {
      name: "4 Ft Light-Up Hanging Pumpkin Man",
      description:
        "Give your home that creepy cornfield look this Halloween when add this 4 Ft Light-Up Hanging Pumpkin Man to your home decor. This hanging pumpkin man features light-up eyes so you know that he's always watching you and your guests. This pumpkin man is perfect for any old barn setting, haunted house, or to put in any room in your home to give it those creepy Halloween vibes.",
      image: "indoor-pumpkin-man.png",
      category: categories[2]._id,
      price: 39.99,
      quantity: 102,
    },
    {
      name: "Fogging Skull Pile - Decorations",
      description:
        "Give your Halloween display the ultimate scary haunted look with this Fogging Skull Pile! Just connect a standard fog machine (sold separately) and you'll be prepared to terrify all your friends and neighbors. This skull pile seeps fog and lights up red, plus emits haunting sounds to make the perfect graveyard. There'll be no bones about it: you'll be the scariest house on the block!",
      image: "indoor-fog-machine.png",
      category: categories[2]._id,
      price: 79.99,
      quantity: 44,
    },
    {
      name: "Octopus Skeleton",
      description:
        "Give your Halloween display the ultimate scary haunted look with this Fogging Skull Pile! Just connect a standard fog machine (sold separately) and you'll be prepared to terrify all your friends and neighbors. This skull pile seeps fog and lights up red, plus emits haunting sounds to make the perfect graveyard. There'll be no bones about it: you'll be the scariest house on the block!",
      image: "indoor-octopus-skeleton.png",
      category: categories[2]._id,
      price: 16.99,
      quantity: 365,
    },
    // {
    //   name: "Tin of Cookies",
    //   description:
    //     "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    //   image: "cookie-tin.jpg",
    //   category: categories[0]._id,
    //   price: 2.99,
    //   quantity: 500,
    // },
    // {
    //   name: "Canned Coffee",
    //   description:
    //     "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
    //   image: "canned-coffee.jpg",
    //   category: categories[0]._id,
    //   price: 1.99,
    //   quantity: 500,
    // },
    // {
    //   name: "Toilet Paper",
    //   category: categories[1]._id,
    //   description:
    //     "Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.",
    //   image: "toilet-paper.jpg",
    //   price: 7.99,
    //   quantity: 20,
    // },
    // {
    //   name: "Handmade Soap",
    //   category: categories[1]._id,
    //   description:
    //     "Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
    //   image: "soap.jpg",
    //   price: 3.99,
    //   quantity: 50,
    // },
    // {
    //   name: "Set of Wooden Spoons",
    //   category: categories[1]._id,
    //   description:
    //     "Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.",
    //   image: "wooden-spoons.jpg",
    //   price: 14.99,
    //   quantity: 100,
    // },
    // {
    //   name: "Camera",
    //   category: categories[2]._id,
    //   description:
    //     "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
    //   image: "camera.jpg",
    //   price: 399.99,
    //   quantity: 30,
    // },
    // {
    //   name: "Tablet",
    //   category: categories[2]._id,
    //   description:
    //     "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
    //   image: "tablet.jpg",
    //   price: 199.99,
    //   quantity: 30,
    // },
    // {
    //   name: "Tales at Bedtime",
    //   category: categories[3]._id,
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.",
    //   image: "bedtime-book.jpg",
    //   price: 9.99,
    //   quantity: 100,
    // },
    // {
    //   name: "Spinning Top",
    //   category: categories[4]._id,
    //   description:
    //     "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
    //   image: "spinning-top.jpg",
    //   price: 1.99,
    //   quantity: 1000,
    // },
    // {
    //   name: "Set of Plastic Horses",
    //   category: categories[4]._id,
    //   description:
    //     "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
    //   image: "plastic-horses.jpg",
    //   price: 2.99,
    //   quantity: 1000,
    // },
    // {
    //   name: "Teddy Bear",
    //   category: categories[4]._id,
    //   description:
    //     "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
    //   image: "teddy-bear.jpg",
    //   price: 7.99,
    //   quantity: 100,
    // },
    // {
    //   name: "Alphabet Blocks",
    //   category: categories[4]._id,
    //   description:
    //     "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
    //   image: "alphabet-blocks.jpg",
    //   price: 9.99,
    //   quantity: 600,
    // },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
