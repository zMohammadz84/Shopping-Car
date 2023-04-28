import FilterPage from "@/components/templates/FilterPage";
import { getCars } from "@/services/apiCars";
import discountCalculation from "@/utils/discountCalculation";
import Head from "next/head";

const Filter = (data) => {
  return (
    <>
      <Head>
        <title>Filter Page</title>
      </Head>
      <FilterPage data={data} />
    </>
  );
};

export default Filter;

// Get Server Side Props

export async function getServerSideProps({ query }) {
  let { type, capacity, price } = query;

  const data = await getCars();

  if (!Object.keys(query).length) {
    return {
      props: {
        cars: data,
      },
    };
  }

  const cars = data.filter((car) => {
    let carCapacity = car.capacity.split(" ")[0];
    let carPrice = car.discount
      ? discountCalculation(car.price, car.discount)
      : car.price;

    let typeCheck = false;
    if (type?.includes(car.typeCar)) {
      typeCheck = true;
    }

    let capacityCheck = false;
    if (capacity?.includes(carCapacity)) {
      capacityCheck = true;
    }

    let PriceCheck = false;
    if (carPrice && carPrice < price) {
      PriceCheck = true;
    }

    return typeCheck || capacityCheck || PriceCheck;
  });

  return {
    props: {
      cars,
    },
  };
}
