import React from "react";
import Image from "next/image";

import ThreeD from "../../../public/artistic-styles/3d-character.webp";
import artDeco from "../../../public/artistic-styles/art-deco.webp";
import artNouveau from "../../../public/artistic-styles/art-nouveau.webp";
import charcoal from "../../../public/artistic-styles/charcoal.webp";
import comic from "../../../public/artistic-styles/comic.webp";
import cubisim from "../../../public/artistic-styles/cubisim.webp";
import johnSargent from "../../../public/artistic-styles/john-sargent.webp";
import photograph from "../../../public/artistic-styles/photograph.webp";
import popArt from "../../../public/artistic-styles/pop-art.webp";
import stoneSculpture from "../../../public/artistic-styles/stone-sculpture.webp";
import vanGogh from "../../../public/artistic-styles/van-gogh.webp";
import {TArtisticStyle} from "../types";

type ArtisticStyleProps = {
  hasArtisticStyle: boolean;
  handleArtisticStyleChange: (value: TArtisticStyle) => void;
};

export const ArtisticStyle = ({
  hasArtisticStyle,
  handleArtisticStyleChange,
}: ArtisticStyleProps) => {
  const handleChange = (value: TArtisticStyle) => {
    handleArtisticStyleChange(value);
  };

  return (
    <div className="grid grid-cols-3 gap-4 max-h-[350px] overflow-y-scroll">
      <div onClick={() => handleChange("3d")} className="cursor-pointer">
        <Image src={ThreeD} alt="3d character" />
        <p>3d</p>
      </div>
      <div onClick={() => handleChange("art-deco")} className="cursor-pointer">
        <Image src={artDeco} alt="Art Deco character" />
        <p>Art deco</p>
      </div>
      <div
        onClick={() => handleChange("art-nouveau")}
        className="cursor-pointer"
      >
        <Image src={artNouveau} alt="Art Nouveau character" />
        <p>Art Nouveau</p>
      </div>
      <div onClick={() => handleChange("charcoal")} className="cursor-pointer">
        <Image src={charcoal} alt="Charcoal character" />
        <p>Charcoal</p>
      </div>
      <div onClick={() => handleChange("comic")} className="cursor-pointer">
        <Image src={comic} alt="Comic character" />
        <p>Comic</p>
      </div>
      <div onClick={() => handleChange("cubisim")} className="cursor-pointer">
        <Image src={cubisim} alt="Cubisim character" />
        <p>Cubisim</p>
      </div>
      <div
        onClick={() => handleChange("john-sargent")}
        className="cursor-pointer"
      >
        <Image src={johnSargent} alt="John Sargent character" />
        <p>John Sargent</p>
      </div>
      <div
        onClick={() => handleChange("photograph")}
        className="cursor-pointer"
      >
        <Image src={photograph} alt="Photograph character" />
        <p>Photograph</p>
      </div>
      <div onClick={() => handleChange("pop-art")} className="cursor-pointer">
        <Image src={popArt} alt="Pop Art character" />
        <p>Pop Art</p>
      </div>
      <div
        onClick={() => handleChange("stone-sculpture")}
        className="cursor-pointer"
      >
        <Image src={stoneSculpture} alt="Stone Sculpture character" />
        <p>Stone Sculpture</p>
      </div>
      <div onClick={() => handleChange("van-gogh")} className="cursor-pointer">
        <Image src={vanGogh} alt="Vincent Van Gogh character" />
        <p>Vincent Van Gogh</p>
      </div>
    </div>
  );
};
