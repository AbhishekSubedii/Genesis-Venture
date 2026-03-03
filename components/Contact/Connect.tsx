"use client";
import Image from "next/image";
import { useState } from "react";

const Question = () => {
  return (
    <>
      <form
        className="flex flex-col gap-5 px-4 py-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col ">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="flex-1 px-3 py-2 border-b border-blue-900 text-xl appearance-none bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="flex-1 px-3 py-2 border-b border-blue-900 text-xl appearance-none bg-transparent focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="company">Email</label>
          <input
            type="email"
            placeholder="johndoe@company.com"
            className="px-3 py-2 border-b border-blue-900 text-xl appearance-none bg-transparent focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-5">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Message..."
            className="px-3 py-2 border-b border-blue-900 text-xl appearance-none bg-transparent focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className=" py-5 bg-blue-900 text-white font-[GT50] text-xl max-w-[150px] hover:bg-white hover:text-blue-900 border border-blue-900 transition-colors duration-300"
        >
          Send
        </button>
      </form>
    </>
  );
};

const Proposal = () => {
  return (
    <>
      <form className="flex flex-col gap-5 px-4 py-2 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="px-3 py-2 border-b border-blue-900 text-xl appearance-none bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="px-3 py-2 border-b border-blue-900 text-xl appearance-none bg-transparent focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="company">Email</label>
          <input
            type="email"
            placeholder="johndoe@company.com"
            className="px-3 py-2 border-b border-blue-900 text-xl appearance-none bg-transparent focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-5">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="1-212-732-0050"
            className="px-3 py-2 border-b border-blue-900 text-xl appearance-none bg-transparent focus:outline-none"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="productDetails">Product Details</label>
          <input
            type="text"
            id="productDetails"
            placeholder="Product description..."
            className="flex-1 px-3 py-2 border-b border-blue-900 text-xl appearance-none bg-transparent focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className=" py-5 bg-blue-900 text-white font-[GT50] text-xl max-w-[150px] hover:bg-white hover:text-blue-900 border border-blue-900 transition-colors duration-300"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default function Connect() {
  const [showQuestion, setShowQuestion] = useState(true);

  return (
    <div className="w-full min-h-screen pt-7 bg-[#e9e7e0] px-5 ">
      <div className="text-blue-900 border-b border-blue-900">
        <div className="grid grid-cols-[2fr_6fr]">
          <div className="flex flex-col h-full">
            <p className=" uppercase font-[GT50] text-sm">Contact us</p>
            <p className="text-2xl font-[PPFONT] mr-10 my-18">
              Let&apos;s connect on your next building project.
            </p>
            <div className="flex flex-col gap-5 text-sm md:text-lg lg:text-lg">
              <p>
                237 West 35th Street, Suite 12A <br />
                New York, New York 10001
              </p>
              <p>
                10001 1-212-732-0555 <br />
                contact@outsourceconsultants.com
              </p>
            </div>
          </div>
          <div className="flex flex-col h-full justify-between border-l border-blue-900 text-blue-900 pl-10 pb-10">
            <p className="flex w-full font-[GT50] justify-end p-5 text-sm">
              [OCI.1]
            </p>

            <div className="flex flex-col">
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setShowQuestion(true)}
                  className={`px-4 py-2 font-[GT50] text-xl md:text-4xl lg:text-4xl ${
                    showQuestion ? "text-blue-900 border-b border-blue-900" : ""
                  }`}
                >
                  Question
                </button>
                <button
                  onClick={() => setShowQuestion(false)}
                  className={`px-4 py-2 font-[GT50] text-xl md:text-4xl lg:text-4xl ${
                    !showQuestion
                      ? "text-blue-900 border-b border-blue-900"
                      : ""
                  }`}
                >
                  Proposal
                </button>
              </div>
              <div className="max-w-[700px]">
                {showQuestion ? <Question /> : <Proposal />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
