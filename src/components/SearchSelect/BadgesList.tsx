import React from "react";
import {XMarkIcon} from "@heroicons/react/24/solid";
import {Inputs} from "../PokemonTeamForm/PokemonTeamForm";
import {UseFormSetValue} from "react-hook-form";

interface Props {
  badges: string[];
  setBadges: UseFormSetValue<Inputs>
}
const BadgesList = ({ badges, setBadges }: Props) => {
  const handleDelete = (badge: string) => {
    const newBadges = badges.filter((item) => item !== badge);
    setBadges('chosenTeam', newBadges)
  };
  return (
    <div className=" flex items-center">
      {badges.map((badge, index) => (
        <span
          key={index}
          className="inline-flex whitespace-nowrap justify-center items-center bg-blue-200 text-blue-800 text-sm font-medium py-0.5 px-2.5 rounded-full mr-2"
        >
          {badge}
          <button
              type='button'
            onMouseDown={() => handleDelete(badge)}
            className="ml-2 text-blue-500 hover:text-blue-700"
          >
            <XMarkIcon className="w-5 h-5 text-gray-500"/>
          </button>
        </span>
      ))}
    </div>
  );
};

export default BadgesList;
