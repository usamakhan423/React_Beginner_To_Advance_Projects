import React from "react";

const Card = ({ cardData }) => {
  return (
    <>
      <section>
        <div class="mx-auto max-w-7xl px-2 lg:px-0">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              {cardData.title}
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
              {cardData.para}
            </p>
          </div>
          <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
            <div>
              <img
                class="h-[300px] w-full rounded-md object-cover"
                src={cardData.image.image01}
                alt=""
              />
            </div>
            <div>
              <img
                class="h-[300px] w-full rounded-md object-cover"
                src={cardData.image.image02}
                alt=""
              />
            </div>
            <div>
              <img
                class="h-[300px] w-full rounded-md object-cover"
                src={cardData.image.image03}
                alt=""
              />
            </div>
          </div>
          <div class="mt-8 text-center md:mt-16">
            <button
              type="button"
              class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {cardData.btnText}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
