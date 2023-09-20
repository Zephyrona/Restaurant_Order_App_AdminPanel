/* eslint-disable react/prop-types */
import Cards from "../../components/Card/Card";
import menudata from "../../db/menudata";

export default function CardContainer({ activeTab }) {
  const filteredData = menudata.filter((item) => item.value === activeTab);

  return (
    <div className="flex flex-row flex-wrap gap-[20px] items-center justify-start">
      {filteredData.map(({ label, img, price, description }) => (
        <Cards
          key={label}
          label={label}
          img={img}
          price={price}
          description={description}
        />
      ))}
    </div>
  );
}
