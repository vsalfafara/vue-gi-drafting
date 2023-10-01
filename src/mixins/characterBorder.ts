import { Character } from "@/data";

export function getCharacterBorder(character: Character) {
  let frameStyle = "";
  if (character?.vision === "Anemo")
    frameStyle =
      "border-green-300 bg-gradient-to-r from-green-200 to-transparent";
  else if (character?.vision === "Geo")
    frameStyle =
      "border-yellow-600 bg-gradient-to-tr from-yellow-800 to-transparent";
  else if (character?.vision === "Electro")
    frameStyle =
      "border-purple-600 bg-gradient-to-b from-purple-700 to-transparent";
  else if (character?.vision === "Dendro")
    frameStyle =
      "border-green-800 bg-gradient-to-tl from-green-700 to-transparent";
  else if (character?.vision === "Hydro")
    frameStyle =
      "border-blue-700 bg-gradient-to-l from-blue-500 to-transparent";
  else if (character?.vision === "Pyro")
    frameStyle = "border-red-400 bg-gradient-to-t from-red-600 to-transparent";
  else if (character?.vision === "Cryo")
    frameStyle =
      "border-blue-200 bg-gradient-to-bl from-blue-200 to-transparent";
  else
    frameStyle =
      "border-gray-500 bg-gradient-to-br from-gray-800 to-transparent";
  return frameStyle;
}
