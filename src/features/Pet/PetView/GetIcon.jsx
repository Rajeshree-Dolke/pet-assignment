import React from "react";
import { Icon } from "@chakra-ui/react";
import { GiCat, GiPig, GiSittingDog } from "react-icons/gi";

export default function GetIcon({ type }) {
  switch (type) {
    case "dog":
      return <Icon as={GiSittingDog} w={6} h={5} color="#964B00" />;
    case "cat":
      return <Icon as={GiCat} w={6} h={5} />;
    case "pig":
      return <Icon as={GiPig} w={6} h={6} color="pink.300"/>;
    default:
      return <></>;
  }
}
