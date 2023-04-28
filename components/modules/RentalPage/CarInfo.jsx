import Checkbox from "@/components/common/CheckBox";
import Input from "@/components/common/Input";
import Radio from "@/components/common/Radio";
import Select from "@/components/common/Select";
import StarRatingCustomize from "@/components/common/StarRatingCustomize";
import React from "react";

const CarInfo = ({ image, carName, rating, comments, price }) => {
  const times = [
    { time: "Select your time" },
    { time: "07 : 00" },
    { time: "08 : 00" },
    { time: "09 : 00" },
    { time: "10 : 00" },
    { time: "11 : 00" },
    { time: "12 : 00" },
  ];

  const dates = [
    { date: "Select your date" },
    { date: "15 February 2022" },
    { date: "20 August 2023" },
    { date: "8 March 2022" },
    { date: "5 July 2021" },
    { date: "01 January 2020" },
    { date: "10 April 2019" },
  ];

  const locations = [
    { location: "Select your city" },
    { location: "Isfahan" },
    { location: "Tehran" },
    { location: "Yazd" },
    { location: "MashHad" },
    { location: "Qom" },
    { location: "Ardebil" },
  ];

  return (
    <main className="m-5 mb-14 lg:mx-0 flex flex-col gap-5 lg:flex-row-reverse">
      <div className="bg-white p-5 rounded-10 lg:w-1/3 max-h-[480.8px] lg:sticky lg:top-24">
        <section>
          <div className="mb-5">
            <h4 className="text-lg mb-2">Rental Summary</h4>
            <p className="text-secondary-300 text-sm">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-primary-500 rounded-10 flex justify-center items-center h-24 w-28">
              <img src={image} alt="" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">{carName}</h2>
              <StarRatingCustomize rating={+rating} size="15px" />
              <span className="ml-1.5 text-secondary-300 text-xs">
                {comments?.length}+Reviewer
              </span>
            </div>
          </div>
        </section>
        <hr className="my-7" />
        <section>
          <div className="flex justify-between items-center mb-5">
            <span className="text-secondary-300">Subtotal</span>
            <span>${price}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-secondary-300">Tax</span>
            <span>$0</span>
          </div>
          <div className="my-5 relative">
            <Input
              type="number"
              placeholder="Apply promo code"
              style={["px-3.5", "py-2", "bg-secondary-300/10"]}
            />
            <button className="absolute right-0 top-0 bottom-0 px-5 text-sm">
              Apply now
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h4>Total Rental Price</h4>
              <p className="text-secondary-300 text-xs mt-1">
                Overall price and includes rental discount
              </p>
            </div>
            <span className="text-3xl">${price}</span>
          </div>
        </section>
      </div>
      <div className="lg:w-2/3 space-y-5 ">
        <section className=" bg-white rounded-10 p-5">
          <Title
            title="Billing Info"
            subTitle="Please enter your billing info"
            num="1"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
            <Input
              label="Name"
              name="name"
              placeholder="Your name"
              style={["p-4", "bg-secondary-300/10"]}
            />
            <Input
              label="Address"
              name="address"
              placeholder="Address"
              style={["p-4", "bg-secondary-300/10"]}
            />
            <Input
              label="Phone Number"
              name="phoneNumber"
              placeholder="Phone Number"
              style={["p-4", "bg-secondary-300/10"]}
            />
            <Input
              label="Town / City"
              name="townOrCity"
              placeholder="Town or city"
              style={["p-4", "bg-secondary-300/10"]}
            />
          </div>
        </section>
        <section className=" bg-white rounded-10  p-5">
          <Title
            title="Rental Info"
            subTitle="Please select your rental date"
            num="2"
          />
          <div className="flex items-center gap-2 mt-7">
            <Radio label="Pick - Up" name="radio" id="pickUp" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
            <div className="mt-5">
              <Select label="Locations" options={locations} />
            </div>
            <div className="mt-5">
              <Select label="Date" options={dates} />
            </div>
            <div className="mt-5">
              <Select label="Time" options={times} />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-7">
            <Radio label="Drop - Up" name="radio" id="dropUp" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
            <div className="mt-5">
              <Select label="Locations" options={locations} />
            </div>
            <div className="mt-5">
              <Select label="Date" options={dates} />
            </div>
            <div className="mt-5">
              <Select label="Time" options={times} />
            </div>
          </div>
        </section>
        <section className=" bg-white rounded-10  p-5">
          <Title
            title="Payment Method"
            subTitle="Please enter your payment method"
            num="3"
          />
          <div className="bg-secondary-300/10 p-5 mt-7 rounded-10">
            <div className="flex flex-row-reverse justify-between items-center">
              <img src="/image/visa.png" alt="" />
              <div className="flex items-center gap-2">
                <Radio label="Credit Card" name="Payment" id="creditCard" />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
              <Input
                label="Card Number"
                name="cardNumber"
                placeholder="Card number"
                style={["p-4"]}
                type="number"
              />
              <Input
                label="Expration Date"
                name="exprationDate"
                placeholder="DD / MM / YY"
                style={["p-4" , "bg-white"]}
                type="time"
              />
              <Input
                label="Card Holder"
                name="cardHolder"
                placeholder="Card holder"
                style={["p-4"]}
              />
              <Input
                label="CVC"
                name="CVC"
                placeholder="CVC"
                type="number"
                style={["p-4"]}
              />
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between items-center p-4 mt-7 bg-secondary-300/10 rounded-10">
            <img src="/image/PayPal.png" alt="" />
            <div className="flex items-center gap-2">
              <Radio label="PayPal" name="Payment" id="PayPal" />
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between items-center p-4 mt-7 bg-secondary-300/10 rounded-10">
            <img src="/image/Bitcoin.png" alt="" />
            <div className="flex items-center gap-2">
              <Radio label="Bitcoin" name="Payment" id="Bitcoin" />
            </div>
          </div>
        </section>
        <section className=" bg-white rounded-10  p-5">
          <Title
            title="Confirmations"
            subTitle="We are getting to the end. Just few clicks and your rental is ready!"
            num="4"
          />
          <div className="flex items-center gap-2 p-4 mt-7 text-xs lg:text-base bg-secondary-300/10 rounded-10">
            <Checkbox />
            <p>
              I agree with sending an Marketing and newsletter emails. No spam,
              promissed!
            </p>
          </div>
          <div className="flex items-center gap-2 p-4 mt-7 text-xs lg:text-base  bg-secondary-300/10 rounded-10">
            <Checkbox />
            <p>I agree with our terms and conditions and privacy policy!</p>
          </div>
          <button className="btn my-7 ">Rent Now</button>
          <img src="/image/ic-security-safety.png" alt="" className="mb-3" />
          <h3 className="mb-3 font-bold">All your data are safe</h3>
          <p className="text-secondary-300 text-xs lg:text-base">
            We are using the most advanced security to provide you the best
            experience ever.
          </p>
        </section>
      </div>
    </main>
  );
};

export default CarInfo;

function Title({ title, num, subTitle }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <h3 className="font-bold">{title}</h3>
        <span className="text-xs text-secondary-300">Step {num} of 4</span>
      </div>
      <p className="text-xs text-secondary-300">{subTitle}</p>
    </div>
  );
}
