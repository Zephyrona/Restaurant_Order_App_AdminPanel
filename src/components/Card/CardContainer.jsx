/* eslint-disable react/prop-types */
import Cards from "../../components/Card/Card";

export default function CardContainer({products }) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
      {products?.map(({ id, name, imageUrl, price, description }) => (
        <Cards
          key={id}
          label={name}
          img={imageUrl}
          price={price}
          description={description}
        />
      ))}
    </div>
  );
}
