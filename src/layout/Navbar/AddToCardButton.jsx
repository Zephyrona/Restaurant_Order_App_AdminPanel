import {
  Menu,
  IconButton,
  MenuHandler,
  MenuList,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Typography,
  Button,
  Badge,
} from "@material-tailwind/react";
import {
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  DecrementQuantityAction,
  IncrementQuantityAction,
  RemoveFromCartAction,
} from "../../redux/actions/cart.actions";

export default function AddToCardButton() {
  const cart = useSelector((store) => store.cartReducer.cart);
  const dispatch = useDispatch();



  const findTotalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <Menu
      dismiss={{
        itemPress: false,
      }}
    >
      <Badge content="5">
        <MenuHandler>
          <IconButton variant="text">
            <ShoppingCartIcon className="h-[24px] w-[24px] text-text dark:text-white" />
          </IconButton>
        </MenuHandler>
      </Badge>
      <MenuList>
        <List>
          {cart.map((product) => (
            <ListItem
              key={product.id}
              ripple="dark"
              className="flex flex-row justify-between"
            >
              <ListItemPrefix>
                <Avatar
                  draggable="false"
                  variant="circular"
                  alt="candice"
                  className="h-[30px] w-[30px]"
                  src={product.image}
                />
              </ListItemPrefix>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <Typography className="text-md font-bold">
                    {product.name}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="text-sm font-normal"
                  >
                    {product.price}
                  </Typography>
                </div>

                <div className="flex flex-row">
                  <div className="flex flex-row items-center">
                    <IconButton
                      variant="text"
                      onClick={() =>
                        dispatch(IncrementQuantityAction(product.id))
                      }
                    >
                      <PlusIcon className="h-[12px] w-[12px] text-text dark:text-white" />
                    </IconButton>
                    <Typography className="text-sm font-bold">
                      {product.quantity}
                    </Typography>
                    <IconButton
                      variant="text"
                      onClick={() =>
                        dispatch(DecrementQuantityAction(product.id))
                      }
                    >
                      <MinusIcon className="h-[12px] w-[12px] text-text dark:text-white" />
                    </IconButton>
                  </div>
                  <IconButton
                    variant="text"
                    onClick={() => dispatch(RemoveFromCartAction(product.id))}
                  >
                    <TrashIcon className="h-[12px] w-[12px] text-text dark:text-white" />
                  </IconButton>
                </div>
              </div>
            </ListItem>
          ))}
        </List>
        <div>
          <Typography className="text-sm font-bold">
            Total: {findTotalPrice}
          </Typography>
          <Button fullWidth className="bg-primary">
            Checkout
          </Button>
        </div>
      </MenuList>
    </Menu>
  );
}
