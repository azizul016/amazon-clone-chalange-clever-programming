import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
          id="1854283"
          title="Lenovo IdeaPad Flex 5 14Convertible Laptop FHD  Touch Display Intel Core i5-1035G1 Processor 8GB DDR4 Onboard RAM 128GB SSD Intel UHD Graphics, Win 10"
          price={669.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71lO1q9ItFL._AC_UY218_.jpg"
        />
        <Product
          id="18542832"
          title="HP Pavilion X360 2-IN-1 11.6 HD Touch-Screen WLED-backlit Laptop, Intel Pentium N5000 up to 2.7GHz, 4GB DDR4, 128GB SSD, Bluetooth, Wireless-AC, HDMI, Webcam, USB 3.1-C"
          price={456.79}
          rating={3}
          image="https://m.media-amazon.com/images/I/61bf4QPQ0hL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="490385330"
          title="Samsung Galaxy Watch 3 (41mm, GPS, Bluetooth) Smart Watch with Advanced Health monitoring, Fitness Tracking , and Long lasting Battery"
          price={399.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81Iu41zFPwL._AC_SL1500_.jpg"
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
        <Product
          id="62037848"
          title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)"
          price={114.99}
          image="https://images-na.ssl-images-amazon.com/images/I/91JA5-hAnoL._AC_SL1500_.jpg"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="4903865330"
          title="Samsung Galaxy Watch 3 (41mm, GPS, Bluetooth) Smart Watch with Advanced Health monitoring, Fitness Tracking , and Long lasting Battery"
          price={399.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81Iu41zFPwL._AC_SL1500_.jpg"
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="32543543458"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="62038484"
          title="Hisense 32-Inch 32H5500F Class H55 Series Android Smart TV with Voice Remote (2020 Model)"
          price={120.99}
          image="https://images-na.ssl-images-amazon.com/images/I/8161gQWMnNL._AC_SX425_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
};

export default Home;
