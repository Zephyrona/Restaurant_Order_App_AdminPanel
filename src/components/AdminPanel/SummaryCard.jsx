import { Typography } from "@material-tailwind/react";
import { Icon } from "@iconify/react";

export default function CardWithLink() {
  return (
    <div className="w-[100%] flex flex-col gap-[10px] px-[30px] py-[20px] bg-white rounded-[10px] shadow-md">
      <div className="flex flex-row items-center gap-[20px]">
        <Icon
          icon="clarity:dollar-solid"
          className="text-white text-[40px] bg-primary rounded-[10px] p-[5px]"
        />
        <div className="flex flex-row gap-[10px] items-center">
          <Typography className="text-primary">+32.40%</Typography>
          <Icon
            icon="ph:arrow-up"
            className="text-primary text-xl bg-primary-light rounded-full p-[2px]"
          />
        </div>
      </div>
      <Typography className="text-xl font-bold">
        $1.000.000
      </Typography>
      <Typography className="text-sm">
        Today Sell
      </Typography>
    </div>
  );
}
