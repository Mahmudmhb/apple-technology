import React from "react";

const Section = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://www.apple.com/v/home/bk/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_large.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">iPhone 15 Pro</h1>
            <p className="mb-5">Titanium. So strong. So light. So Pro.</p>
            <button className="text-[#06c] text-2xl">Learn more</button>
          </div>
        </div>
      </div>

      <div className="md:flex md:gap-3 my-5 md:justify-between">
        <div
          className=" w-full bg-center max-h-none bg-cover"
          style={{
            backgroundImage:
              "url(https://www.apple.com/v/home/bk/images/promos/apple-watch-series-9/promo_apple_watch_series_9_order__b3u85rm9zf6u_large.jpg)",
          }}
        >
          {/* <div className="hero-overlay"></div> */}
          <div className=" top-20">
            <div className=" text-center">
              <h1 className="mb-5  ">
                <img
                  src="https://www.apple.com/v/home/bk/images/logos/apple-watch-series-9/promo_logo_apple_watch_series_9__ckz0hbex0yeu_large.png"
                  alt=""
                  className="inline mt-5"
                />
              </h1>
              <p className="mb-5  text-white text-center">
                Smarter. Brighter. Mightier.
              </p>
              <button className="text-[#06c] text-2xl">Learn more</button>
            </div>
          </div>
        </div>
        <div
          className="w-full bg-center min-h-screen bg-cover"
          style={{
            backgroundImage:
              "url(https://www.apple.com/v/home/bk/images/promos/macbook-pro-14-and-16/promo_mbp__ek7p477bkp6q_large.jpg)",
          }}
        >
          {/* <div className="hero-overlay"></div> */}
          <div className="">
            <div className=" text-center text-black">
              <h1 className="mb-5 text-5xl font-bold mt-5 ">MacBook Pro</h1>
              <p className="mb-5  text-black text-center">
                Mind-blowing. Head-turning.{" "}
              </p>
              <button className="text-[#06c] text-2xl">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
