type Element = {
  [key: string]: Type;
};

type Type = {
  name: string;
};
export const Elements: Element = {
  Anemo: {
    name: "Anemo",
  },
  Geo: {
    name: "Geo",
  },
  Electro: {
    name: "Electro",
  },
  Dendro: {
    name: "Dendro",
  },
  Hydro: {
    name: "Hydro",
  },
  Pyro: {
    name: "Pyro",
  },
  Cryo: {
    name: "Cryo",
  },
  Unaligned: {
    name: "Unaligned",
  },
};

export type Character = {
  name: string;
  vision:
    | "Anemo"
    | "Geo"
    | "Electro"
    | "Dendro"
    | "Hydro"
    | "Pyro"
    | "Cryo"
    | "Unaligned";
  image: string | null;
  rarity?: "None" | "Rare" | "VeryRare";
  sex?: "Male" | "Female" | "Any";
  bodyType?: "Child" | "Teenager" | "Adult";
  weapon?: "Sword" | "Claymore" | "Polearm" | "Bow" | "Catalyst";
  region?: "Mondstadt" | "Liyue" | "Inazuma" | "Sumeru" | "Fontaine" | "None";
  version?: "1" | "2" | "3" | "4";
  isNew?: boolean;
};

export type Panel = {
  [key: keyof typeof Elements]: Character[];
};

export const Characters: Character[] = [
  {
    name: "Albedo",
    vision: "Geo",
    image: "Albedo.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Teenager",
    weapon: "Sword",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Aloy",
    vision: "Cryo",
    image: "Aloy.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Bow",
    region: "None",
    version: "2",
  },
  {
    name: "Alhaitham",
    vision: "Dendro",
    image: "Alhaitham.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Adult",
    weapon: "Sword",
    region: "Sumeru",
    version: "3",
  },
  {
    name: "Amber",
    vision: "Pyro",
    image: "Amber.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Bow",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Arataki Itto",
    vision: "Geo",
    image: "Arataki Itto.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Adult",
    weapon: "Claymore",
    region: "Inazuma",
    version: "2",
  },
  {
    name: "Baizhu",
    vision: "Dendro",
    image: "Baizhu.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Adult",
    weapon: "Catalyst",
    region: "Liyue",
    version: "3",
  },
  {
    name: "Barbara",
    vision: "Hydro",
    image: "Barbara.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Catalyst",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Beidou",
    vision: "Electro",
    image: "Beidou.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Adult",
    weapon: "Claymore",
    region: "Liyue",
    version: "1",
  },
  {
    name: "Bennett",
    vision: "Pyro",
    image: "Bennett.webp",
    rarity: "Rare",
    sex: "Male",
    bodyType: "Teenager",
    weapon: "Sword",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Candace",
    vision: "Hydro",
    image: "Candace.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Adult",
    weapon: "Polearm",
    region: "Sumeru",
    version: "3",
  },
  {
    name: "Charlotte",
    vision: "Cryo",
    image: "Charlotte.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Catalyst",
    region: "Fontaine",
    version: "4",
    isNew: true,
  },
  {
    name: "Chongyun",
    vision: "Cryo",
    image: "Chongyun.webp",
    rarity: "Rare",
    sex: "Male",
    bodyType: "Teenager",
    weapon: "Claymore",
    region: "Liyue",
    version: "1",
  },
  {
    name: "Collei",
    vision: "Dendro",
    image: "Collei.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Bow",
    region: "Sumeru",
    version: "3",
  },
  {
    name: "Cyno",
    vision: "Electro",
    image: "Cyno.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Teenager",
    weapon: "Polearm",
    region: "Sumeru",
    version: "3",
  },
  {
    name: "Dehya",
    vision: "Pyro",
    image: "Dehya.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Adult",
    weapon: "Claymore",
    region: "Sumeru",
    version: "3",
  },
  {
    name: "Diluc",
    vision: "Pyro",
    image: "Diluc.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Adult",
    weapon: "Claymore",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Diona",
    vision: "Cryo",
    image: "Diona.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Child",
    weapon: "Bow",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Dori",
    vision: "Electro",
    image: "Dori.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Child",
    weapon: "Claymore",
    region: "Sumeru",
    version: "3",
  },
  {
    name: "Eula",
    vision: "Cryo",
    image: "Eula.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Adult",
    weapon: "Claymore",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Faruzan",
    vision: "Anemo",
    image: "Faruzan.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Bow",
    region: "Sumeru",
    version: "3",
  },
  {
    name: "Fischl",
    vision: "Electro",
    image: "Fischl.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Bow",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Freminet",
    vision: "Cryo",
    image: "Freminet.webp",
    rarity: "Rare",
    sex: "Male",
    bodyType: "Teenager",
    weapon: "Claymore",
    region: "Fontaine",
    version: "4",
  },
  {
    name: "Furina",
    vision: "Hydro",
    image: "Furina.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Sword",
    region: "Fontaine",
    version: "4",
    isNew: true,
  },
  {
    name: "Ganyu",
    vision: "Cryo",
    image: "Ganyu.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Bow",
    region: "Liyue",
    version: "1",
  },
  {
    name: "Gorou",
    vision: "Geo",
    image: "Gorou.webp",
    rarity: "Rare",
    sex: "Male",
    bodyType: "Teenager",
    weapon: "Bow",
    region: "Inazuma",
    version: "2",
  },
  {
    name: "Hu Tao",
    vision: "Pyro",
    image: "Hu Tao.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Polearm",
    region: "Liyue",
    version: "1",
  },
  {
    name: "Jean",
    vision: "Anemo",
    image: "Jean.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Adult",
    weapon: "Sword",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Kaedahara Kazuha",
    vision: "Anemo",
    image: "Kaedahara Kazuha.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Teenager",
    weapon: "Sword",
    region: "Inazuma",
    version: "1",
  },
  {
    name: "Kaeya",
    vision: "Cryo",
    image: "Kaeya.webp",
    rarity: "Rare",
    sex: "Male",
    bodyType: "Adult",
    weapon: "Sword",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Kamisato Ayaka",
    vision: "Cryo",
    image: "Kamisato Ayaka.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Sword",
    region: "Inazuma",
    version: "2",
  },
  {
    name: "Kamisato Ayato",
    vision: "Hydro",
    image: "Kamisato Ayato.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Adult",
    weapon: "Sword",
    region: "Inazuma",
    version: "2",
  },
  {
    name: "Kaveh",
    vision: "Dendro",
    image: "Kaveh.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Adult",
    weapon: "Claymore",
    region: "Sumeru",
    version: "3",
  },
  {
    name: "Keqing",
    vision: "Electro",
    image: "Keqing.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Sword",
    region: "Liyue",
    version: "1",
  },
  {
    name: "Kirara",
    vision: "Dendro",
    image: "Kirara.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Sword",
    region: "Inazuma",
    version: "3",
  },
  {
    name: "Klee",
    vision: "Pyro",
    image: "Klee.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Child",
    weapon: "Catalyst",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Kujou Sara",
    vision: "Electro",
    image: "Kujou Sara.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Adult",
    weapon: "Bow",
    region: "Inazuma",
    version: "2",
  },
  {
    name: "Kuki Shinobu",
    vision: "Electro",
    image: "Kuki Shinobu.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Sword",
    region: "Inazuma",
    version: "2",
  },
  {
    name: "Layla",
    vision: "Cryo",
    image: "Layla.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Sword",
    region: "Sumeru",
    version: "3",
  },
  {
    name: "Lisa",
    vision: "Electro",
    image: "Lisa.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Adult",
    weapon: "Catalyst",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Lynette",
    vision: "Anemo",
    image: "Lynette.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Sword",
    region: "Fontaine",
    version: "4",
  },
  {
    name: "Lyney",
    vision: "Pyro",
    image: "Lyney.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Teenager",
    weapon: "Bow",
    region: "Fontaine",
    version: "4",
  },
  {
    name: "Mika",
    vision: "Cryo",
    image: "Mika.webp",
    rarity: "Rare",
    sex: "Male",
    bodyType: "Teenager",
    weapon: "Polearm",
    region: "Mondstadt",
    version: "3",
  },
  {
    name: "Mona",
    vision: "Hydro",
    image: "Mona.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Catalyst",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Nahida",
    vision: "Dendro",
    image: "Nahida.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Child",
    weapon: "Catalyst",
    region: "Sumeru",
    version: "3",
  },
  {
    name: "Nilou",
    vision: "Hydro",
    image: "Nilou.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Sword",
    region: "Sumeru",
    version: "3",
  },
  {
    name: "Ningguang",
    vision: "Geo",
    image: "Ningguang.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Adult",
    weapon: "Catalyst",
    region: "Liyue",
    version: "1",
  },
  {
    name: "Noelle",
    vision: "Geo",
    image: "Noelle.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Claymore",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Neuvillette",
    vision: "Hydro",
    image: "Neuvillette.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Adult",
    weapon: "Catalyst",
    region: "Fontaine",
    version: "4",
  },
  {
    name: "Qiqi",
    vision: "Cryo",
    image: "Qiqi.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Child",
    weapon: "Sword",
    region: "Liyue",
    version: "1",
  },
  {
    name: "Raiden Shogun",
    vision: "Electro",
    image: "Raiden Shogun.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Adult",
    weapon: "Polearm",
    region: "Inazuma",
    version: "2",
  },
  {
    name: "Razor",
    vision: "Electro",
    image: "Razor.webp",
    rarity: "Rare",
    sex: "Male",
    bodyType: "Teenager",
    weapon: "Claymore",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Rosaria",
    vision: "Cryo",
    image: "Rosaria.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Adult",
    weapon: "Polearm",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Sangonomiya Kokomi",
    vision: "Hydro",
    image: "Sangonomiya Kokomi.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Catalyst",
    region: "Inazuma",
    version: "2",
  },
  {
    name: "Sayu",
    vision: "Anemo",
    image: "Sayu.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Child",
    weapon: "Claymore",
    region: "Inazuma",
    version: "2",
  },
  {
    name: "Shenhe",
    vision: "Cryo",
    image: "Shenhe.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Adult",
    weapon: "Polearm",
    region: "Liyue",
    version: "2",
  },
  {
    name: "Shikanoin Heizou",
    vision: "Anemo",
    image: "Shikanoin Heizou.webp",
    rarity: "Rare",
    sex: "Male",
    bodyType: "Teenager",
    weapon: "Catalyst",
    region: "Inazuma",
    version: "2",
  },
  {
    name: "Sucrose",
    vision: "Anemo",
    image: "Sucrose.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Catalyst",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Tartaglia",
    vision: "Hydro",
    image: "Tartaglia.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Adult",
    weapon: "Bow",
    region: "Liyue",
    version: "1",
  },
  {
    name: "Thoma",
    vision: "Pyro",
    image: "Thoma.webp",
    rarity: "Rare",
    sex: "Male",
    bodyType: "Adult",
    weapon: "Polearm",
    region: "Inazuma",
    version: "2",
  },
  {
    name: "Tighnari",
    vision: "Dendro",
    image: "Tighnari.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Teenager",
    weapon: "Bow",
    region: "Sumeru",
    version: "3",
  },
  {
    name: "Traveler",
    vision: "Unaligned",
    image: "Traveler.webp",
    rarity: "VeryRare",
    sex: "Any",
    bodyType: "Teenager",
    weapon: "Sword",
    region: "None",
    version: "1",
  },
  {
    name: "Venti",
    vision: "Anemo",
    image: "Venti.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Teenager",
    weapon: "Bow",
    region: "Mondstadt",
    version: "1",
  },
  {
    name: "Wanderer",
    vision: "Anemo",
    image: "Wanderer.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Teenager",
    weapon: "Catalyst",
    region: "Inazuma",
    version: "3",
  },
  {
    name: "Wriothesley",
    vision: "Cryo",
    image: "Wriothesley.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Adult",
    weapon: "Catalyst",
    region: "Fontaine",
    version: "4",
  },
  {
    name: "Xiangling",
    vision: "Pyro",
    image: "Xiangling.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Polearm",
    region: "Liyue",
    version: "1",
  },
  {
    name: "Xiao",
    vision: "Anemo",
    image: "Xiao.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Teenager",
    weapon: "Polearm",
    region: "Liyue",
    version: "1",
  },
  {
    name: "Xingqiu",
    vision: "Hydro",
    image: "Xingqiu.webp",
    rarity: "Rare",
    sex: "Male",
    bodyType: "Teenager",
    weapon: "Sword",
    region: "Liyue",
    version: "1",
  },
  {
    name: "Xinyan",
    vision: "Pyro",
    image: "Xinyan.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Claymore",
    region: "Liyue",
    version: "1",
  },
  {
    name: "Yae Miko",
    vision: "Electro",
    image: "Yae Miko.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Adult",
    weapon: "Catalyst",
    region: "Inazuma",
    version: "2",
  },
  {
    name: "Yanfei",
    vision: "Pyro",
    image: "Yanfei.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Catalyst",
    region: "Liyue",
    version: "1",
  },
  {
    name: "Yaoyao",
    vision: "Dendro",
    image: "Yaoyao.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Child",
    weapon: "Polearm",
    region: "Liyue",
    version: "3",
  },
  {
    name: "Yelan",
    vision: "Hydro",
    image: "Yelan.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Adult",
    weapon: "Bow",
    region: "Liyue",
    version: "2",
  },
  {
    name: "Yoimiya",
    vision: "Pyro",
    image: "Yoimiya.webp",
    rarity: "VeryRare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Bow",
    region: "Inazuma",
    version: "2",
  },
  {
    name: "Yun Jin",
    vision: "Geo",
    image: "Yun Jin.webp",
    rarity: "Rare",
    sex: "Female",
    bodyType: "Teenager",
    weapon: "Polearm",
    region: "Liyue",
    version: "2",
  },
  {
    name: "Zhongli",
    vision: "Geo",
    image: "Zhongli.webp",
    rarity: "VeryRare",
    sex: "Male",
    bodyType: "Adult",
    weapon: "Polearm",
    region: "Liyue",
    version: "1",
  },
];

export const NoPick: Character = {
  name: "No Pick",
  vision: "Unaligned",
  image: "zz.webp",
};

let modifiedCharacters = [...Characters];

let availableCharacters = [...modifiedCharacters];

export function getPanels() {
  return availableCharacters.reduce((result: Panel, character: Character) => {
    result[character.vision] = result[character.vision] || [];
    result[character.vision].push(character);
    return result;
  }, Object.create(null));
}

export function removeCharacter(name?: string) {
  modifiedCharacters = modifiedCharacters.filter(
    (character: Character) => character.name !== name
  );
  availableCharacters = [...modifiedCharacters];
}

export function characterExists(name?: string) {
  return availableCharacters.find(
    (character: Character) => character.name === name
  );
}

export function filterCharacters(name?: string) {
  if (name) {
    availableCharacters = modifiedCharacters.filter((character: Character) =>
      character.name.toLowerCase().includes(name.toLowerCase())
    );
  } else {
    availableCharacters = modifiedCharacters;
  }
}

export function resetCharacters() {
  modifiedCharacters = [...Characters];
  availableCharacters = [...modifiedCharacters];
}

const imageTypes: string[] = ["Thumbnail", "Splash", "Panel", "VS"];

export const imageList: string[] = Characters.map((character: Character) => {
  return imageTypes.map((type: string) => {
    return `assets/Characters/${type}/${character.image}`;
  });
}).flat();

function preloadImage(src: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.onerror = img.onabort = function () {
      reject(src);
    };
    img.src = src;
  });
}

export function preload() {
  const imagesPromiseList: Promise<any>[] = [];
  for (const i of imageList) {
    imagesPromiseList.push(preloadImage(i));
  }
}

export type Autoban = {
  readonly value: string;
  readonly label: string;
};

export const AutobanOptions: Autoban[] = [
  {
    value: "Male",
    label: "Male Characters",
  },
  {
    value: "Female",
    label: "Female Characters",
  },
  {
    value: "Anemo",
    label: "Anemo Characters",
  },
  {
    value: "Geo",
    label: "Geo Characters",
  },
  {
    value: "Electro",
    label: "Electro Characters",
  },
  {
    value: "Dendro",
    label: "Dendro Characters",
  },
  {
    value: "Hydro",
    label: "Hydro Characters",
  },
  {
    value: "Pyro",
    label: "Pyro Characters",
  },
  {
    value: "Cryo",
    label: "Cryo Characters",
  },
  {
    value: "Mondstadt",
    label: "Mondstadt Characters",
  },
  {
    value: "Liyue",
    label: "Liyue Characters",
  },
  {
    value: "Inazuma",
    label: "Inazuma Characters",
  },
  {
    value: "Sumeru",
    label: "Sumeru Characters",
  },
  {
    value: "Fontaine",
    label: "Fontaine Characters",
  },
  {
    value: "1",
    label: "Version 1 Characters",
  },
  {
    value: "2",
    label: "Version 2 Characters",
  },
  {
    value: "3",
    label: "Version 3 Characters",
  },
  {
    value: "4",
    label: "Version 4 Characters",
  },
  {
    value: "Rare",
    label: "4-Star Characters",
  },
  {
    value: "VeryRare",
    label: "5-Star Characters",
  },
  {
    value: "Child",
    label: "Body Type: Child",
  },
  {
    value: "Teenager",
    label: "Body Type: Teenager",
  },
  {
    value: "Adult",
    label: "Body Type: Adult",
  },
  {
    value: "Sword",
    label: "Sword Users",
  },
  {
    value: "Claymore",
    label: "Claymore Users",
  },
  {
    value: "Polearm",
    label: "Polearm Users",
  },
  {
    value: "Bow",
    label: "Bow Users",
  },
  {
    value: "Catalyst",
    label: "Catalyst Users",
  },
];
