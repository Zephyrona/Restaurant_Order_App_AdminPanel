/* eslint-disable react/prop-types */
import Cards from "../../components/Card/Card";
import menudata from "../../db/menudata";

export default function CardContainer({ activeTab }) {
  const filteredData = menudata.filter((item) => item.value === activeTab);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
      {filteredData.map(({ id, label, img, price, description }) => (
        <Cards
          key={id}
          label={label}
          img={img}
          price={price}
          description={description}
        />
      ))}
    </div>
  );
}
