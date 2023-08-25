import "../../App.css";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function page() {
  return (
    <div className="flex flex-row w-[100%] h-screen">
      <div className="flex flex-col gap-[100px] px-[100px] py-[30px] w-[50%] h-[100%] bg-bg">
        <div className="w-[180px] h-[60px]">
          <img src="img/logo.svg" alt="" className="w-[100%] h-[100%]" />
        </div>
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-text text-4xl font-bold">Login</h1>
            <p className="text-text text-md">
              İf you want to login you write your e-mail and password
              informationİf you want to login you write your e-mail and password
              information
            </p>
          </div>
          <form className="w-full flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[20px]">
              <Input size="lg" label="Name" />
              <Input type="password" size="lg" label="Password" />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  Remember Me
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="bg-primary" fullWidth>
              <Link to="/menu" className="text-white">
                Login
              </Link>
            </Button>
          </form>
        </div>
      </div>
      <div className="flex flex-col w-[50%] h-[100%] login"></div>
    </div>
  );
}
