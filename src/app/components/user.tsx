import Image from "next/image";
import React from "react";

type UserProps = {
  avatar: string;
  name: string;
};

export const User = ({avatar, name}: UserProps) => {
  return (
    <div className="flex col-span-3 items-center py-4">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <Image src={avatar} width={32} height={32} alt="user avatar" />
      </div>
      <p className="ml-2 text-sm">{name}</p>
    </div>
  );
};
