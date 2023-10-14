import "../../App.css";
import { Button, Switch, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function page() {
  return (
    <div className="flex flex-row w-[100%] h-screen">
      <div className="flex flex-col gap-[30px] md:gap-[100px] px-[30px] md:px-[100px] py-[30px] w-full md:w-[50%] h-[100%] bg-bg">
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
          <form className="w-full flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[20px]">
              <Input size="lg" label="Name" />
              <Input type="password" size="lg" label="Password" />
            </div>
            <div className="flex flex-row gap-[10px] items-center">
              <Switch color="primary" />
              <Typography color="text">Remember me</Typography>
            </div>
            <Button className="bg-primary" fullWidth>
              <Link to="/">Login</Link>
            </Button>
          </form>
        </div>
      </div>
      <div className=" flex-col w-[50%] h-[100%] login hidden md:flex"></div>
    </div>
  );
}
