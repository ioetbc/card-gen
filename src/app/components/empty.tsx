import React from "react";
import {User} from "./user";
import {TUser} from "../types";

type EmptyProps = {
  user: TUser;
};

export const Empty = ({user}: EmptyProps) => {
  return (
    <div>
      <div className="p-4  border-l border-r border-t border-black flex items-center pr-4">
        <h3 className="text-xl">No cards generated yet</h3>
      </div>
      <div className="border border-black px-4 flex items-center">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center col-span-2 border-r border-black pr-4">
            <p>Count: 0</p>
          </div>
          {user && <User name={user.name} avatar={user.avatar} />}
        </div>
      </div>
      <div className="border-l border-r border-b border-black px-4 py-4 flex flex-col gap-2">
        <p className="text-sm">
          To generate your first card use the input at the bottom of the screen.
          Upload images to customise your card.
        </p>
      </div>
    </div>
  );
};
