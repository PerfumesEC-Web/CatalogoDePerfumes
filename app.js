// ===== CONFIG =====
const WHATSAPP_NUMBER = "593981756299"; // Ej: 593991234567 (Ecuador: 593 + tu número)

// PERFUMES (edita esto)
const perfumes = [
  {
    id: 1,
    name: "Mandarin Sky",
    brand: "Armaf",
    price: 60,
    ml: 100,
    gender: "Unisex",
    notes: ["Cítrico", "Dulce", "Amaderado"],
    desc: "Fresco y juvenil, ideal de día. Buena salida cítrica con un fondo cálido.",
    img: "img/Armaf-Odyssey-Mandarin-Sky.png"
  },
  {
    id: 2,
    name: "9PM",
    brand: "Afnan",
    price: 60,
    ml: 100,
    gender: "Hombre",
    notes: ["Vainilla", "Especiado", "Ámbar"],
    desc: "Más nocturno y seductor, con dulzor y especias equilibradas.",
    img: "img/9pm.webp",
    bestseller: true
  },
  {
    id: 3,
    name: "Khamrah Qahwa",
    brand: "Lattafa",
    price: 65,
    ml: 100,
    gender: "Unisex",
    notes: ["Café", "Canela", "Gourmand"],
    desc: "Dulce tipo gourmand, con café y canela. Potente y duradero.",
    img: "img/Lattafa-Khamrah.png"
  },
  {
    id: 4,
    name: "Khamrah Dukhan",
    brand: "Lattafa",
    price: 65,
    ml: 100,
    gender: "Unisex",
    notes: ["Dulce", "Especiado", "Oriental"],
    desc: "Versión intensa de Khamrah con un perfil cálido y especiado.",
    img: "img/khamrah_2-removebg-preview.webp"
  },
  {
    id: 5,
    name: "Khamrah",
    brand: "Lattafa",
    price: 60,
    ml: 100,
    gender: "Unisex",
    notes: ["Canela", "Vainilla", "Dátil"],
    desc: "Fragancia dulce tipo gourmand muy popular.",
    img: "img/be33b404-367a-4363-bb28-c033e8b12c8b.avif"
  },
  {
    id: 6,
    name: "Club de Nuit Intense Man",
    brand: "Armaf",
    price: 60,
    ml: 105,
    gender: "Hombre",
    notes: ["Piña", "Limón", "Ahumado"],
    desc: "Perfume fresco y potente inspirado en Aventus.",
    img: "img/Armaf-Club-De-Nuit-Intense.png"
  },
  {
    id: 7,
    name: "Mandarin Elixir",
    brand: "Armaf",
    price: 65,
    ml: 100,
    gender: "Unisex",
    notes: ["Cítrico", "Dulce", "Amaderado"],
    desc: "Fragancia fresca y juvenil ideal para el día.",
    img: "img/Odyssey-Mandarin-Sky-Elixir.webp"
  },
  {
    id: 8,
    name: "Odyssey Aqua",
    brand: "Armaf",
    price: 60,
    ml: 100,
    gender: "Hombre",
    notes: ["Acuático", "Cítrico", "Fresco"],
    desc: "Perfume refrescante con perfil acuático.",
    img: "img/6803fec995574af35a47b36d_thumbnail.webp"
  },
  {
    id: 9,
    name: "Odyssey Bahamas",
    brand: "Armaf",
    price: 60,
    ml: 100,
    gender: "Unisex",
    notes: ["Tropical", "Fresco", "Cítrico"],
    desc: "Fragancia veraniega con sensación tropical.",
    img: "img/ODYSSEY-BAHAMAS.webp"
  },
  {
    id: 10,
    name: "Odyssey Chocolat",
    brand: "Armaf",
    price: 60,
    ml: 100,
    gender: "Unisex",
    notes: ["Chocolate", "Vainilla", "Dulce"],
    desc: "Perfume gourmand con notas intensas de chocolate.",
    img: "img/bvmbj.webp"
  },
  {
    id: 11,
    name: "The Kingdom",
    brand: "Lattafa",
    price: 60,
    ml: 100,
    gender: "Hombre",
    notes: ["Amaderado", "Ámbar", "Especias"],
    desc: "Fragancia masculina intensa y elegante.",
    img: "img/Screenshot_2024-11-11_at_5.51.04_PM-removebg-preview.webp"
  },
  {
    id: 12,
    name: "Bharara King",
    brand: "Bharara",
    price: 85,
    ml: 100,
    gender: "Hombre",
    notes: ["Cítrico", "Amaderado", "Dulce"],
    desc: "Fragancia fresca con excelente proyección.",
    img: "img/Bharara-King.png"
  },
  {
    id: 13,
    name: "Nitro Red",
    brand: "Dumont",
    price: 65,
    ml: 100,
    gender: "Hombre",
    notes: ["Frutal", "Dulce", "Fresco"],
    desc: "Perfume juvenil muy popular.",
    img: "img/nitrored.png"
  },
  {
    id: 14,
    name: "Hawas Ice",
    brand: "Rasasi",
    price: 65,
    ml: 100,
    gender: "Hombre",
    notes: ["Fresco", "Acuático", "Cítrico"],
    desc: "Versión más fresca de Hawas.",
    img: "img/hawasice.png"
  },
  {
    id: 15,
    name: "Hawas For Him",
    brand: "Rasasi",
    price: 60,
    ml: 100,
    gender: "Hombre",
    notes: ["Acuático", "Dulce", "Ámbar"],
    desc: "Uno de los perfumes más populares de Rasasi.",
    img: "img/hawas for him.png"
  },
  {
    id: 16,
    name: "Yara Candy",
    brand: "Lattafa",
    price: 50,
    ml: 100,
    gender: "Mujer",
    notes: ["Dulce", "Caramelo", "Vainilla"],
    desc: "Perfume femenino dulce y juvenil.",
    img: "img/lattafa-yara-candy-edp-680719.webp"
  },
  {
    id: 17,
    name: "Yara Tous",
    brand: "Lattafa",
    price: 50,
    ml: 100,
    gender: "Mujer",
    notes: ["Frutal", "Tropical", "Dulce"],
    desc: "Fragancia tropical femenina.",
    img: "img/lattafa-yara-tous-eau-de-parfum_1080x.webp.webp"
  },
  {
    id: 18,
    name: "Nautica Voyage",
    brand: "Nautica",
    price: 45,
    ml: 100,
    gender: "Hombre",
    notes: ["Acuático", "Manzana", "Fresco"],
    desc: "Perfume fresco ideal para el día.",
    img: "img/nauticavoyage_1024x1024.webp"
  },
  {
    id: 19,
    name: "CK One",
    brand: "Calvin Klein",
    price: 70,
    ml: 200,
    gender: "Unisex",
    notes: ["Cítrico", "Fresco", "Verde"],
    desc: "Clásico perfume unisex muy versátil.",
    img: "img/calvin-klein-ck-one-eau-de-toilette-spray-100ml.webp"
  },
  {
    id: 20,
    name: "One Million",
    brand: "Paco Rabanne",
    price: 135,
    ml: 100,
    gender: "Hombre",
    notes: ["Canela", "Cuero", "Ámbar"],
    desc: "Fragancia icónica intensa y seductora.",
    img: "img/2265045_1b8438ed-7099-4951-a7a4-89e2edf8d798.webp"
  },
  {
    id: 21,
    name: "9PM Rebel",
    brand: "Afnan",
    price: 70,
    ml: 100,
    gender: "Hombre",
    notes: ["Dulce", "Ámbar", "Especiado"],
    desc: "Perfil nocturno y moderno. Pregunta por stock y precio.",
    img: "img/AFNAN_9PM_Rebel_Eau_de_Parfum_1_d2818ce3-4248-4623-bbd8-5fe9493339fd.webp",
    bestseller: true
  },
  {
    id: 22,
    name: "9PM Elixir",
    brand: "Afnan",
    price: 70,
    ml: 100,
    gender: "Hombre",
    notes: ["Vainilla", "Dulce", "Intenso"],
    desc: "Versión más intensa y dulce. Pregunta por stock y precio.",
    img: "img/6290171075738-01.webp"
  },
  {
    id: 23,
    name: "9AM",
    brand: "Afnan",
    price: 60,
    ml: 100,
    gender: "Hombre",
    notes: ["Fresco", "Cítrico", "Aromático"],
    desc: "Ideal para el día, fresco y versátil.",
    img: "img/9-AM-Dive-Afnan-Perfumes_-12638821.webp"
  },
  {
    id: 24,
    name: "Amber Oud",
    brand: "Al Haramain",
    price: 70,
    ml: 100,
    gender: "Hombre",
    notes: ["Ámbar", "Oud", "Amaderado"],
    desc: "Elegante, ambarado y con presencia. Pregunta por stock y precio.",
    img: "img/al-haramain-amber-oud-gold-edition-edp-perfume-cologne-542775.webp"
    
  },
  {
    id: 25,
    name: "Hawas Fire",
    brand: "Rasasi",
    price: 75,
    ml: 100,
    gender: "Hombre",
    notes: ["Acuático", "Dulce", "Intenso"],
    desc: "Proyección fuerte con ADN Hawas. Pregunta por stock y precio.",
    img: "img/hawas-fire.webp",
    bestseller: true
  },
  {
    id: 26,
    name: "Diesel Plus Plus",
    brand: "Diesel",
    price: 45,
    ml: 75,
    gender: "Hombre",
    notes: ["Dulce", "Aromático", "Cálido"],
    desc: "Clásico diferente y llamativo.",
    img: "img/4085400291001-0.webp"
  },
  {
    id: 27,
    name: "CK Be",
    brand: "Calvin Klein",
    price: 70,
    ml: 200,
    gender: "Unisex",
    notes: ["Fresco", "Almizcle", "Suave"],
    desc: "Unisex, limpio y cómodo para diario.",
    img: "img/665671bd29534e5356371a9b_thumbnail-600x600.webp"
  },
  {
    id: 28,
    name: "Odyssey Homme",
    brand: "Armaf",
    price: 60,
    ml: 100,
    gender: "Hombre",
    notes: ["Fresco", "Aromático", "Amaderado"],
    desc: "Masculino, moderno y versátil.",
    img: "img/armaf-odyssey-homme-edp-perfume-cologne-425887-f60f1ab2-581f-410e-aa63-fe14b510c4f5.webp"
  },
  {
    id: 29,
    name: "Rayhaan Elixir",
    brand: "Rayhaan",
    price: 65,
    ml: 100,
    gender: "Hombre",
    notes: ["Dulce", "Especiado", "Ámbar"],
    desc: "Potente, dulce y con buena duración.",
    img: "img/rayhaan-removebg-preview.png"
  },
  {
  id: 30,
  name: "Asad Bourbon",
  brand: "Lattafa",
  price: 50,
  ml: 100,
  gender: "Hombre",
  notes: ["Lavanda", "Cacao", "Bourbon vainilla"],
  desc: "Especiado y cálido, con cacao y vainilla bourbon. Ideal noche/clima fresco.",
  img: "img/31_770c51d7-c7d9-4a3f-9a09-c8c289fce9e1.webp",
  bestseller: true
}, // ✅ ESTA COMA ES OBLIGATORIA
{
  id: 31,
  name: "Odyssey Mandarin Sky Vintage Edition",
  brand: "Armaf",
  price: 60,
  ml: 100,
  gender: "Unisex",
  notes: ["Cítrico", "Aromático", "Amaderado"],
  desc: "Versión tipo ‘vintage’, fresca y elegante con salida cítrica y fondo amaderado.",
  img: "img/IMG_89562.webp"
},
{
  id: 32,
  name: "Asad",
  brand: "Lattafa",
  price: 50,
  ml: 100,
  gender: "Hombre",
  notes: ["Pimienta negra", "Tabaco", "Piña"],
  desc: "Oriental para hombre: picante y ahumado, con café/iris y fondo vainilla-ámbar.",
  img: "img/lattafa-asad-100ml-hombre-1.png"
},
{
  id: 33,
  name: "Asad Zanzibar",
  brand: "Lattafa",
  price: 50,
  ml: 100,
  gender: "Hombre",
  notes: ["Lavanda", "Pimienta negra", "Agua de coco"],
  desc: "Fresco-salado y moderno: coco acuoso con iris y toque salino; base vainilla e incienso.",
  img: "img/6730e1fd6212290802e2f836_thumbnail-600x600.webp"
},
{
  id: 34,
  name: "Liquid Brun",
  brand: "French Avenue",
  price: 75,
  ml: 100,
  gender: "Hombre",
  notes: ["(pendiente)", "(pendiente)", "(pendiente)"],
  desc: "No pude confirmar esta ficha en Fragrantica con certeza (puede estar con otro nombre).",
  img: "img/french-avenue-liquid-brun-edp-100ml.jpg.webp"
},
{
  id: 35,
  name: "Nitro Intense",
  brand: "Dumont",
  price: 65,
  ml: 100,
  gender: "Hombre",
  notes: ["Piña", "Grosella negra", "Canela", "Abedul", "Vainilla", "Ámbar"],
  desc: "Fragancia oriental amaderada lanzada en 2023. Abre con piña y grosella negra, evoluciona con notas especiadas y maderas ahumadas, y termina con vainilla, tonka y ámbar.",
  img: "img/9ef249ba5aeebf009b8147426e4bc8b810872c2ea300e0440de2aeb3c7cb37e574448.png"
},
{
  id: 36,
  name: "Fakhar Black",
  brand: "Lattafa",
  price: 50,
  ml: 100,
  gender: "Hombre",
  notes: ["Manzana", "Bergamota", "Jengibre"],
  desc: "Aromático y limpio: lavanda/salvia con bayas de enebro; fondo tonka, cedro y vetiver.",
  img: "img/parfum-fakhar-black-silver-lattafa.jpg"
},
{
  id: 37,
  name: "9 PM Night Out",
  brand: "Afnan",
  price: 75,
  ml: 100,
  gender: "Unisex",
  notes: ["Pitahaya", "Lavanda", "Coñac", "Toffee", "Cardamomo", "Tonka", "Pachulí"],
  desc: "Oriental especiado (2026): abre frutal/aromático con pitahaya, lavanda y un toque de coñac; en el corazón destaca toffee con cardamomo y gamuza; cierra con tonka, maderas (Akigalawood) y pachulí.",
  img: "img/dark-375x500.123313.avif"
},
{
  id: 38,
  name: "Lolita Lempicka",
  brand: "Lolita Lempicka",
  price: 99,
  ml: 100,
  gender: "Mujer",
  notes: ["Anís", "Violeta", "Regaliz", "Cereza", "Vainilla", "Praliné"],
  desc: "Fragancia floral frutal gourmand lanzada en 1997. Destaca por su acorde dulce de regaliz, cereza y praliné con fondo de vainilla y almizcle.",
  img: "img/Resizeimageproject_e271dc16-9a41-4530-a9c5-4a32ceecd248.webp"
},
{
  id: 39,
  name: "His Confession",
  brand: "Lattafa",
  price: 65,
  ml: 100,
  gender: "Hombre",
  notes: ["Lavanda", "Canela", "Mandarina"],
  desc: "Oriental amaderado: iris/benzoin/ciprés y fondo vainilla-tonka con incienso y pachulí.",
  img: "img/hgftyfdrt.webp"
},
{
  id: 40,
  name: "B.A.D. Femme",
  brand: "Maison Alhambra",
  price: 50,
  ml: 100,
  gender: "Mujer",
  notes: ["Bergamota", "Almendra", "Café"],
  desc: "Gourmand floral: tuberosa/flores blancas y un fondo dulce (vainilla, praliné, cacao).",
  img: "img/hfctrdyu.webp"
},
{
  id: 41,
  name: "La Vivacité",
  brand: "Maison Alhambra",
  price: 55,
  ml: 100,
  gender: "Mujer",
  notes: ["Grosella negra", "Pera", "Iris"],
  desc: "Frutal-floral con base dulce elegante (vainilla/praliné/tonka/pachulí).",
  img: "img/vivacite-removebg-preview.png"
},
{
  id: 42,
  name: "Haya",
  brand: "Lattafa",
  price: 50,
  ml: 100,
  gender: "Mujer",
  notes: ["Fresa", "Champagne", "Mandarina"],
  desc: "Dulce chispeante: flores (gardenia/jazmín/orquídea) y fondo ámbar-sándalo con castaña.",
  img: "img/Lattafa-Hayar.png"
},
{
  id: 43,
  name: "Eclaire",
  brand: "Lattafa",
  price: 65,
  ml: 100,
  gender: "Mujer",
  notes: ["Caramelo", "Leche", "Azúcar"],
  desc: "Dulce tipo postre: corazón de miel y flores blancas; fondo vainilla, praliné y almizcle.",
  img: "img/lattafa-eclaire-edp-perfume-cologne-704475.webp"
},
{
  id: 44,
  name: "Yara",
  brand: "Lattafa",
  price: 50,
  ml: 100,
  gender: "Mujer",
  notes: ["Orquídea", "Heliotropo", "Mandarina"],
  desc: "Vainilla oriental: corazón gourmand/frutas tropicales y fondo vainilla-almizcle-sándalo.",
  img: "img/Yara-Lattafa_-12707434.webp"
},
{
  id: 45,
  name: "Yum Yum",
  brand: "Armaf",
  price: 70,
  ml: 100,
  gender: "Mujer",
  notes: ["Bayas silvestres", "Cereza", "Naranja"],
  desc: "Frutal dulce: rosa/flores blancas con vainilla; fondo empolvado con almizcle y ámbar.",
  img: "img/599802974.webp"
},
{
  id: 46,
  name: "Club de Nuit Woman",
  brand: "Armaf",
  price: 60,
  ml: 100,
  gender: "Mujer",
  notes: ["Naranja", "Bergamota", "Pomelo"],
  desc: "Floral frutal: rosa/jazmín/geranio/lichi con base de pachulí, vainilla, vetiver y almizcle.",
  img: "img/656b32e1fbc522e4b6246034_thumbnail.webp"
},
{
  id: 47,
  name: "Hugo Boss Man",
  brand: "Hugo Boss",
  price: 75,
  ml: 125,
  gender: "Hombre",
  notes: ["Naranja", "Bergamota", "Pomelo"],
  desc: "Floral frutal: rosa/jazmín/geranio/lichi con base de pachulí, vainilla, vetiver y almizcle.",
  img: "img/dark-375x500.64606.avif"
},
{
  id: 48,
  name: "Haramain Amber Oud Violet",
  brand: "Al Haramain",
  price: 85,
  ml: 200,
  gender: "Mujer",
  notes: ["Rosa", "Bergamota", "Jengibre", "Jazmín", "Nardos", "Almizcle", "Pachulí"],
  desc: "Perfume floral elegante con un inicio fresco de rosa, bergamota y jengibre. En el corazón aparecen jazmín, nardos y flores blancas, mientras que el fondo combina almizcle y pachulí para un aroma sofisticado y femenino.",
  img: "img/dark-375x500.82035.avif"
},
{
  id: 49,
  name: "Vulcan Feu",
  brand: "French Avenue",
  price: 75,
  ml: 100,
  gender: "Unisex",
  notes: ["Mango", "Limón", "Jengibre", "Ruibarbo", "Jazmín", "Violeta", "Praliné", "Haba tonka"],
  desc: "Fragancia moderna frutal y especiada. Comienza con mango, limón y jengibre que aportan frescura, seguido por un corazón floral con jazmín y violeta. El fondo dulce de praliné, haba tonka y ámbar gris crea un aroma cálido y adictivo.",
  img: "img/dark-375x500.105520.avif"
},
{
  id: 50,
  name: "Jean Paul Gaultier Le Male Elixir",
  brand: "Jean Paul Gaultier",
  price: 170,
  ml: 125,
  gender: "Hombre",
  notes: ["Menta", "Lavanda", "Vainilla", "Tonka", "Ámbar", "Sándalo"],
  desc: "Fragancia oriental fougère intensa y seductora. Combina notas aromáticas como lavanda y menta con un corazón especiado y un fondo cálido de vainilla, ámbar y tonka que crea un aroma dulce y masculino.",
  img: "img/dark-375x500.81642.avif"
}
];

// ===== APP =====
const $grid = document.getElementById("grid");
const $empty = document.getElementById("empty");
const $search = document.getElementById("search");
const $filterBrand = document.getElementById("filterBrand");
const $sort = document.getElementById("sort");

// Footer year
const $year = document.getElementById("year");
if ($year) $year.textContent = new Date().getFullYear();

// 💡 Contador total (para que NO quede en 0)
const $count = document.getElementById("countPerfumes");
if ($count) $count.textContent = String(perfumes.length);

function moneyUSD(v){
  return new Intl.NumberFormat("es-EC", { style:"currency", currency:"USD" }).format(v ?? 0);
}

function whatsappLink(p){
  const text =
`Hola, estoy interesado en este perfume:
- ${p.name} (${p.brand})
- ${p.ml} ml
- Precio: ${moneyUSD(p.price)}

¿Está disponible?`;

  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

function uniqueBrands(items){
  return [...new Set(items.map(p => p.brand))].sort((a,b)=>a.localeCompare(b));
}

function populateBrands(){
  const brands = uniqueBrands(perfumes);
  for (const b of brands){
    const opt = document.createElement("option");
    opt.value = b;
    opt.textContent = b;
    $filterBrand.appendChild(opt);
  }
}

function render(items){
  // Si quieres que el contador cambie con filtros, descomenta:
  // if ($count) $count.textContent = String(items.length);

  $grid.innerHTML = "";

  if (!items.length){
    $empty.classList.remove("hidden");
    return;
  }
  $empty.classList.add("hidden");

  for (const p of items){
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <div class="thumb">
        <img src="${p.img}" alt="${p.name} - ${p.brand}" loading="lazy"
             onerror="this.src='https://via.placeholder.com/600x600.png?text=Sin+imagen'">
      </div>

      <div class="card-body">
        <div class="title-row">
          <div>
            <div class="name">${p.name}</div>
            <div class="brand">${p.brand}</div>
          </div>
          <div class="price">${moneyUSD(p.price)}</div>
        </div>

        <div class="meta">
          <span class="tag">${p.ml} ml</span>
          <span class="tag">${p.gender}</span>
          ${(p.notes || []).slice(0,3).map(n=>`<span class="tag">${n}</span>`).join("")}
        </div>

        <div class="desc">${p.desc}</div>

        <div class="actions">
          <a class="btn primary" href="${whatsappLink(p)}" target="_blank" rel="noopener">
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    `;

    $grid.appendChild(card);
  }
}

function applyFilters(){
  const q = ($search.value || "").trim().toLowerCase();
  const brand = $filterBrand.value;
  const sort = $sort.value;

  let items = perfumes.slice();

  if (brand){
    items = items.filter(p => p.brand === brand);
  }

  if (q){
    items = items.filter(p => {
      const hay = [
        p.name, p.brand, p.gender, p.desc, ...(p.notes || [])
      ].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }

  if (sort === "priceAsc") items.sort((a,b)=>(a.price||0)-(b.price||0));
  if (sort === "priceDesc") items.sort((a,b)=>(b.price||0)-(a.price||0));
  if (sort === "nameAsc") items.sort((a,b)=>(a.name||"").localeCompare(b.name||""));

  render(items);
}

// Init
populateBrands();
render(perfumes);

// Events

[$search, $filterBrand, $sort].forEach(el => el.addEventListener("input", applyFilters));
