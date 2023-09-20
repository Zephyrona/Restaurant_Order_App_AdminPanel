import OrderStatus from "../../components/Stepper/OrderStatus";

export default function waiter() {
  return (
    <div className="flex flex-col gap-[30px] px-[30px]">
      <OrderStatus />
      <OrderStatus />
      <OrderStatus />
      <OrderStatus />
      <OrderStatus />
    </div>
  );
}
