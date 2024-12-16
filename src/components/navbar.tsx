import Image from "next/image";
import Link from "next/link";
import Logo from "../../img/logo.png";

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="bg-slate-800 dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
      <Link href={"/"}>
        <Image src={Logo} alt="bankLogo" width={48} />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          {" "}
          <Avatar>
            <AvatarImage
              //  src="https://github.com/shadcn.png"

              width={40}
              alt="workerLogo"
            />
            <AvatarFallback className="text-black">M.C </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger >
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Setting</DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={'/auth'}> Log out </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
