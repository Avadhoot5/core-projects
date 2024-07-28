import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";


function UsernameMenu() {

    const { user } = useAuth0();

  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center font-bold px-3 hover:text-orange-500 gap-3">
            <CircleUserRound className="text-orange-500"/>
            {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <Link to="/user-profile" className="font-bold hover:text-orange-500"/>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu;