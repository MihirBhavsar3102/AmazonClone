import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />

      {/* Product id, title, price, ratings, image */}
      <div className="home__row">
        <Product
          id="123123"
          title="Verilux® USB C Hub Multiport Adapter- 6 in 1 Portable Aluminum Type C Hub with 4K HDMI Output, USB 2.0/3.0 Ports, SD/Micro SD Card Reader Compatible for MacBook Pro 2016-2020, MacBook Air 2018-2020"
          price={1189}
          rating={5}
          image="https://m.media-amazon.com/images/I/61eZe+xIHzL._SL1500_.jpg"
        />
        <Product
          id="123124"
          title="ASIAN Men's WATERPROOF-05 Sports Running,Walking & Gym Shoes with Extra Cushion Lightweight Lace-Up Casual Sneaker Shoes for Men's & Boy's"
          price={624}
          rating={4}
          image="https://m.media-amazon.com/images/I/71G-q545xgL._UL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123125"
          title="Samsung Galaxy S23 5G (Green, 8GB, 256GB Storage)"
          price={79999}
          rating={5}
          image="https://m.media-amazon.com/images/I/61RZDb2mQxL._SL1500_.jpg"
        />
        <Product
          id="123126"
          title="Casio Analog-Digital Black Dial Men's Watch-GM-2100G-1A9DR"
          price={15495}
          rating={4}
          image="https://m.media-amazon.com/images/I/71459fZyLBL._UL1100_.jpg"
        />
        <Product
          id="123127"
          title="JBL Tune Beam Wireless ANC Earbuds (TWS) with Mic, Customized Extra Bass EQ, 48 Hrs Battery and Quick Charge, 4-Mics, IP54, Ambient Aware & Talk-Thru, Headphones App, Bluetooth 5.3 (Black)"
          price={6499}
          rating={4}
          image="https://m.media-amazon.com/images/I/51uFfdAv0ML._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123128"
          title="ASUS Vivobook S15 OLED 2022, 15.6 inch 39.62 cm FHD OLED, Intel Core Evo i5-12500H 12th Gen, Thin and Light Laptop (16GB/512GB SSD/Iris Xe Graphics/Windows 11/Office 2021/Black/1.8 kg) K3502ZA-L502WS"
          price={71990}
          rating={4}
          image="https://m.media-amazon.com/images/I/71DBkrxqBDL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
