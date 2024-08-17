const { PrismaClient, Decimal } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    const images = [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/85/84/27/estamos-na-entrada-principal.jpg?w=600&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/7e/f5/b2/adega-santiago.jpg?w=600&h=-1&s=1",
      "https://classic.exame.com/wp-content/uploads/2018/10/alex-atala-gastronomia-perfil-icone-vip-4.png?w=1024",
      "https://blog.archtrends.com/wp-content/uploads/2023/02/arquitetura-restaurante-abre.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/85/c9/30/o-melhor-dos-cortes-de.jpg?w=600&h=-1&s=1",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX_N2lrLpiw3N4JZwCPzX95QKNvG2ZIU1WiQ&s",
      "https://s2-g1.glbimg.com/3Xt7PYOFHHesoWEmVkuqNbfK3H0=/0x0:1600x1200/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/5/1/8Np8pVQPaTGT8zFOrxNg/casa-do-porco-2.jpeg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/99/d1/e7/na-av-dom-severino-1631.jpg?w=600&h=400&s=1",
      "https://offloadmedia.feverup.com/saopaulosecreto.com/wp-content/uploads/2023/04/13084536/vicolonostro_297954300_423828246379752_1991947989042728349_n-1024x682.jpg",
      "https://s2-glamour.glbimg.com/gSTfs5JR-pQN-M0ljWhycFCV5CM=/0x0:607x320/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_ba3db981e6d14e54bb84be31c923b00c/internal_photos/bs/2021/o/Y/CKpiMxR4uBbreMJElziQ/2012-08-14-le-jazz.jpg",
    ];

    const creativeNames = [
      "Ryori Restaurant",
      "Adega Santiago",
      "Alex Atala",
      "Blue Mavie",
      "Santa Grelha",
      "Sweet Spout",
      "Taste Journey",
      "Fusion Gourmet",
      "Prato e Comida",
      "Le jazz",
    ];

    const addresses = [
      "Rua Ryori, 123",
      "Avenida dos andes, 456",
      "Praça da Bandeira, 789",
      "Santa esperança, 101",
      "Alameda Soares, 202",
      "Parnarama dos cleus, 303",
      "Avenida Journey, 404",
      "Praça da Aparência, 505",
      "Urbana Saraiva, 606",
      "Avenida Clássica, 707",
    ];

    const services = [
      {
        name: "Salada Ravanello",
        description:
          "Rabanetes, folhas verdes e molho agridoce salpicados com gergelin",
        price: new Decimal(59.97),
        imageUrl: "https://i.imgur.com/3BdZck8.png",
      },
      {
        name: "Torradas De Parma",
        description:
          "Presuntos de parma e rúcula em um pão com fermetação natural",
        price: new Decimal(26.57),
        imageUrl: "https://i.imgur.com/jBUyJXg.png",
      },
      {
        name: "Spaguetti Gambe",
        description: "Massa fresca com camarões e pesto.",
        price: new Decimal(79.87),
        imageUrl: "https://i.imgur.com/Hj7R5pd.png",
      },
      {
        name: "Macarons",
        description: "Farinha de amêndoas, manteiga, claras e açúcar.",
        price: new Decimal(79.97),
        imageUrl: "https://i.imgur.com/JqTS8nZ.png",
      },
      {
        name: "Peachy pastrie",
        description: "Delicioso folheado de pêssego com folhas de hortelã.",
        price: new Decimal(50.0),
        imageUrl: "https://i.imgur.com/27nAz1N.png",
      },
      {
        name: "Suco de maracujá",
        description: "Suco de maracujá gelado, cremoso, docinho.",
        price: new Decimal(13.97),
        imageUrl: "https://i.imgur.com/W0lmybQ.png",
      },
    ];

    const Restaurants = [];
    for (let i = 0; i < 10; i++) {
      const name = creativeNames[i];
      const address = addresses[i];
      const imageUrl = images[i];

      const restaurant = await prisma.restaurant.create({
        data: {
          name,
          address,
          imageUrl: imageUrl,
          phones: ["(11) 99999-9999", "(11) 99999-9999"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac augue ullamcorper, pharetra orci mollis, auctor tellus. Phasellus pharetra erat ac libero efficitur tempus. Donec pretium convallis iaculis. Etiam eu felis sollicitudin, cursus mi vitae, iaculis magna. Nam non erat neque. In hac habitasse platea dictumst. Pellentesque molestie accumsan tellus id laoreet.",
        },
      });

      for (const service of services) {
        await prisma.restaurantService.create({
          data: {
            name: service.name,
            description: service.description,
            price: service.price,
            restaurant: {
              connect: {
                id: restaurant.id,
              },
            },
            imageUrl: service.imageUrl,
          },
        });
      }

      Restaurants.push(restaurant);
    }

    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao criar os restaurantes:", error);
  }
}

seedDatabase();
