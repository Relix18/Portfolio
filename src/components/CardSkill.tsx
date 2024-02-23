import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const CardSkill = ({ img: image }: Readonly<{ img: StaticImageData }>) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative hover:shadow-3xl hover:shadow-[0_5px_20px_10px_rgb(62,102,193)]  dark:border-white/[0.2] border-black/[0.1]  rounded-2xl border">
        <CardItem
          translateZ="100"
          className="w-full aspect-square rounded-2xl overflow-hidden shadow-[0_0_20px_0px_rgb(62,102,193)] hover:shadow-none"
        >
          <Image src={image} alt="" className="w-full aspect-square" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default CardSkill;
