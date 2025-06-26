import { Button } from "@/components/ui/button";
import React from "react";
import UsdSvg from "@/public/icons/usd.svg";
import UserMenuSvg from "@/public/icons/user_menu_icon.svg";
import BellSvg from "@/public/icons/bell.svg";
const AppHeader = () => {
  return (
    <div className="bg-foreground text-white w-full h-16 flex items-center">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Button className="bg-background h-auto my-2 text-background">
            Click
          </Button>
          <div className="flex flex-row p-2 gap-2">
            <div className="flex flex-row">
              <div className="bg-dark-blue flex flex-row items-center gap-2 border-dark-blue rounded-md p-2 border-r-0 rounded-r-none">
                <UsdSvg />
                <span>10,155.2</span>
              </div>
              <Button className="h-full rounded-sm rounded-l-none bg-light-blue">
                DEPOSIT
              </Button>
            </div>
            <Button className="h-full bg-background cursor-pointer">
              <BellSvg />
            </Button>
            <Button className="h-full bg-background cursor-pointer">
              <UserMenuSvg />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
