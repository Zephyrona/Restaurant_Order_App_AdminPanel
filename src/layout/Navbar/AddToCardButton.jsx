import {
  Menu,
  IconButton,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function AddToCardButton() {
  return (
    <Menu>
      <MenuHandler>
        <IconButton variant="text">
          <ShoppingCartIcon className="h-[24px] w-[24px] text-text" />
        </IconButton>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}
