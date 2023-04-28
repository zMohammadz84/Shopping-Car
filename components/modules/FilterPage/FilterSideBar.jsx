import Checkbox from "@/components/common/CheckBox";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const FilterSideBar = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  let { price, type, capacity } = router.query;
  type = Array.isArray(type) ? type : type === undefined ? null : [type];
  const [priceAmount, setPriceAmount] = useState(price || "50");
  const [priceFilter, setPriceFilter] = useState("50");
  const [typeFilter, setTypeFilter] = useState(type || []);
  const [capacityFilter, setCapacityFilter] = useState(capacity || []);

  const conditionalStyle = isOpen && " !translate-y-0";

  useEffect(() => {
    router.push(
      {
        pathname: "/filter",
        query: {
          type: typeFilter,
          capacity: capacityFilter,
          price: priceFilter <= 50 ? [] : priceFilter,
        },
      },
      undefined,
      { scroll: false }
    );
  }, [priceFilter, typeFilter, capacityFilter]);

  const typeFilterHandler = ({ target }) => {
    const clone = [...typeFilter];

    if (typeFilter.includes(target.value)) {
      const filteredTypes = clone.filter((type) => type !== target.value);
      setTypeFilter(filteredTypes);
      return;
    }

    setTypeFilter((prev) => [...prev, target.value]);
  };

  const capacityFilterHandler = ({ target }) => {
    const clone = [...capacityFilter];
    const index = capacityFilter.includes(target.value);

    if (index) {
      const capacity = clone.filter((type) => type !== target.value);
      setCapacityFilter(capacity);
      return;
    }

    setCapacityFilter((prev) => [...prev, target.value]);
  };

  return (
    <>
      <div
        className={`fixed z-50 h-1/2 inset-0 bg-slate-950/30 -translate-y-full transition-all lg:hidden ${conditionalStyle}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`bg-white flex fixed z-50 bottom-0  left-0 right-0 h-1/2 translate-y-full transition-all duration-200 overflow-auto lg:flex p-5 2xl:w-1/5 xl:w-1/4 lg:static lg:mt-5 lg:translate-y-0 lg:rounded-lg flex-col lg:z-0 lg:bottom-[97.4rem]  ${conditionalStyle}  scrollbar-thin scrollbar-track-primary-40 scrollbar-thumb-secondary-300/40 `}
      >
        <div className="flex lg:flex-col">
          <ul className="flex flex-col gap-2 flex-1">
            <li className="mb-3 text-xs text-secondary-300 tracking-[5px]">
              TYPE
            </li>
            <li>
              <Checkbox
                value="Sport"
                label="Sport"
                name="sport"
                onchange={typeFilterHandler}
                checked={typeFilter?.includes("Sport")}
              />
            </li>
            <li>
              <Checkbox
                value="SUV"
                label="SUV"
                name="suv"
                onchange={typeFilterHandler}
                checked={typeFilter?.includes("SUV")}
              />
            </li>
            <li>
              <Checkbox
                value="Sedan"
                label="Sedan"
                name="sedan"
                onchange={typeFilterHandler}
                checked={typeFilter?.includes("Sedan")}
              />
            </li>
            <li>
              <Checkbox
                value="Coupe"
                label="Coupe"
                name="coupe"
                onchange={typeFilterHandler}
                checked={typeFilter?.includes("Coupe")}
              />
            </li>
            <li>
              <Checkbox
                value="Hatchback"
                label="Hatchback"
                name="hatchback"
                onchange={typeFilterHandler}
                checked={typeFilter?.includes("Hatchback")}
              />
            </li>
          </ul>
          <ul className="flex flex-col gap-2 flex-1 lg:mt-10">
            <li className="mb-3 text-xs text-secondary-300 tracking-[5px]">
              CAPACITY
            </li>
            <li>
              <Checkbox
                label="2 Person"
                value="2"
                name="2Person"
                onchange={capacityFilterHandler}
                checked={capacityFilter?.includes("2")}
              />
            </li>
            <li>
              <Checkbox
                label="4 Person"
                value="4"
                name="4Person"
                onchange={capacityFilterHandler}
                checked={capacityFilter?.includes("4")}
              />
            </li>
            <li>
              <Checkbox
                label="6 Person"
                value="6"
                name="6Person"
                onchange={capacityFilterHandler}
                checked={capacityFilter?.includes("6")}
              />
            </li>
            <li>
              <Checkbox
                label="8 Person"
                value="8"
                name="8Person"
                onchange={capacityFilterHandler}
                checked={capacityFilter?.includes("8")}
              />
            </li>
          </ul>
        </div>
        <div className="mt-5 lg:mt-10 ">
          <p className="mb-3 text-xs text-secondary-300 tracking-[5px]">
            PRICE
          </p>
          <div className="flex justify-between lg:flex-col">
            <div>
              <input
                type="range"
                value={priceAmount}
                onChange={(e) => setPriceAmount(e.target.value)}
                name="price"
                min={50}
                max={100}
              />
              <p>Max : {priceAmount}$</p>
            </div>
            <button
              className="btn lg:mt-5"
              onClick={() => setPriceFilter(priceAmount)}
            >
              Set Price
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSideBar;
