import Slider from 'react-slick';
import data from "../data/index.json";
import Card from '../componets/Card';
import { useEffect, useState } from 'react';
function Home() {
  const initialTime = 307; // 10 minutes in seconds
  const [time, setTime] = useState(initialTime);
  // // Uncomment the useEffect block to use it
  useEffect(() => {
    const timer = setInterval(() => {
      if (time <= 0) {
        clearInterval(timer);
      } else {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {/* Google tag (gtag.js) */}
      <iframe
        allow="join-ad-interest-group"
        data-tagging-id="AW-11378647989"
        data-load-time={1697554563484}
        height={0}
        width={0}
        style={{ display: "none", visibility: "hidden" }}
        src="https://td.doubleclick.net/td/rul/11378647989?random=1697554563466&cv=11&fst=1697554563466&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45be3ab0&u_w=1920&u_h=1080&url=https%3A%2F%2Felectriceranet.store%2F&hn=www.googleadservices.com&frm=0&tiba=We%20are%20Here%20to%20help%20you%2C%20Electronics%2C%20Furniture%2C%20Grocery%2C%20Lifestyle%2C%20Books%20%26%20More.%20Exclusive%20Offers!&auid=1133349081.1697388098&fledge=1&uaa=x86&uab=64&uafvl=Chromium%3B118.0.5993.71%7CGoogle%2520Chrome%3B118.0.5993.71%7CNot%253DA%253FBrand%3B99.0.0.0&uamb=0&uap=Windows&uapv=10.0.0&uaw=0&data=event%3Dgtag.config"
      />
      <iframe
        allow="join-ad-interest-group"
        data-tagging-id="AW-11000953775"
        data-load-time={1697554563530}
        height={0}
        width={0}
        style={{ display: "none", visibility: "hidden" }}
        src="https://td.doubleclick.net/td/rul/11000953775?random=1697554563513&cv=11&fst=1697554563513&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45be3ab0&u_w=1920&u_h=1080&url=https%3A%2F%2Felectriceranet.store%2F&hn=www.googleadservices.com&frm=0&tiba=We%20are%20Here%20to%20help%20you%2C%20Electronics%2C%20Furniture%2C%20Grocery%2C%20Lifestyle%2C%20Books%20%26%20More.%20Exclusive%20Offers!&auid=1133349081.1697388098&fledge=1&uaa=x86&uab=64&uafvl=Chromium%3B118.0.5993.71%7CGoogle%2520Chrome%3B118.0.5993.71%7CNot%253DA%253FBrand%3B99.0.0.0&uamb=0&uap=Windows&uapv=10.0.0&uaw=0&data=event%3Dgtag.config"
      />
      <div id="container" style={{ overflow: "hidden" }}>
        <div style={{ height: "100%" }} data-reactroot="">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    div {\n        font-size: 20px;\n        text-align: center;\n    }\n"
            }}
          />
          <div>
            <div className="_2dxSCm">
              <div className="_3CzzrP" style={{ background: "#2874f0" }}>
                <div className="_38U37R">
                  <div>
                    <div className="_1FWdmb" style={{ backgroundColor: "#2874f0" }}>
             <a className="_3NH1qf" id="showmenu">
                            <img alt="menu" src="https://festive99.shop/assets/website/images/theme/bars.svg" height="21px" width="21px" />
                        </a>
                      <a className="Z4_K_h" style={{ width: 85 }}>
                        <img
                          src="https://festive99.shop/assets/website/img/Q18Ifxk.png"
                          className="_31Y9yB"
                          style={{ width: 85 }}
                        />
                      </a>
                      <div className="_2WBW6z" />
                      <a href="#/mobile.html#" className="_3NH1qf">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 15 15"
                          xmlns="external452e452e452e452e.html?link=http://www.w3.org/2000/svg"
                        >
                          <g fill="#fff" fillRule="evenodd">
                            <path d="m5.189 13.04c0 .996-.791 1.804-1.767 1.804-.976 0-1.767-.808-1.767-1.804 0-.996.791-1.804 1.767-1.804.976 0 1.767.808 1.767 1.804" />
                            <path d="m14.912 2.259h-14.298l2.247 6.917c.042.129.16.216.293.216h8.06c-.064.69-.629 1.841-1.702 1.841h-6.04l1.072 1.991h5.611c1.881 0 2.938-2.278 3.657-4.719.888-3.01 1.219-6.245 1.106-6.245" />
                            <path d="m.615 2.259l-.592-1.828c-.08-.207.069-.431.287-.431h1.482c.126 0 .24.079.287.198l.682 2.061c0 0-.63 1.642-1.942.066" />
                            <path d="m2.262.756c0 0 .498 1.503 2.234 1.503l-1.736.749-1.104-.749.607-1.503" />
                            <path d="m13.424 13.325c0 .837-.664 1.516-1.484 1.516-.82 0-1.484-.679-1.484-1.516 0-.837.664-1.516 1.484-1.516.82 0 1.484.679 1.484 1.516" />
                          </g>
                        </svg>{" "}
                        <span className="_2tVMo0">1</span>
                      </a>
                    </div>
                    <div>
                      <div className="_3QNhdh" id="guidSearch">
                        <div className="ORogdv">
                          <div className="_1k9EoO">
                            <div className="_2d36Hu">
                              <a href="#/mobile.html#search" className="search-div">
                                <input
                                  type=""
                                  className="_1eMB9R"
                                  placeholder="Search for Products, Brands and More"
                                  defaultValue=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/svdxv-xcv.appspot.com/o/bcff07b5-1d28-4957-8532-2b03e9e41120.jpg?alt=media&token=d9d937b5-7343-4094-a881-376958659331&_gl=1*1gv607*_ga*MTAxMTM0NjExNy4xNjc3OTI0MjQy*_ga_CW55HF8NVT*MTY5NzgzNDM5OS41Mi4xLjE2OTc4MzQ0NjkuNjAuMC4w"
                  style={{ width: "100%" }}
                />
                <div className="_3lqN6b">
                  <div className="WhKF32">
                    <div className="IF3BzC">
                      <div className="_1fhgRH">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-sm-12 p-0">
                              <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-ride="carousel">
                                <Slider {...settings}>
                                  <div className="">
                                    <img
                                      className="d-block w-100"
                                      src="https://festive99.shop/upload/categories/7068230901104221.png"
                                      alt="First slide"
                                    />
                                  </div>
                                  <div className="">
                                    <img
                                      className="d-block w-100"
                                      src="https://festive99.shop/upload/categories/6996230905113457.png"
                                      alt="Second slide"
                                    />
                                  </div>
                                  <div className="">
                                    <img
                                      className="d-block w-100"
                                      src="https://festive99.shop/upload/categories/5651230901104221.png"
                                      alt="Third slide"
                                    />
                                  </div> 
                                </Slider>
                              </div>
                              {/* <div
                                id="carouselExampleIndicators"
                                className="carousel carousel-dark slide"
                                data-ride="carousel"
                              >
                                <ol className="carousel-indicators">
                                  <li
                                    data-target="#carouselExampleIndicators"
                                    data-slide-to={0}
                                    className=""
                                  />
                                  <li
                                    data-target="#carouselExampleIndicators"
                                    data-slide-to={1}
                                    className="active"
                                  />
                                  <li
                                    data-target="#carouselExampleIndicators"
                                    data-slide-to={2}
                                    className=""
                                  />
                                </ol>
                                <div className="carousel-inner">
                                  <div className="carousel-item active carousel-item-left">
                                    <img
                                      className="d-block w-100"
                                      src="https://electriceranet.store/assets/images/B-1.jpg"
                                      alt="First slide"
                                    />
                                  </div>
                                  <div className="carousel-item carousel-item-next carousel-item-left">
                                    <img
                                      className="d-block w-100"
                                      src="https://electriceranet.store/assets/images/B-2.jpg"
                                      alt="Second slide"
                                    />
                                  </div>
                                  <div className="carousel-item">
                                    <img
                                      className="d-block w-100"
                                      src="https://electriceranet.store/assets/images/back.png"
                                      alt="Third slide"
                                    />
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                        <div
                          className="_1QM2o6 _1isCBQ"
                          style={{ margin: "0 0 16px" }}
                        >
                          <div className="_2rW-uM _3sgvr0 _1cVt6K _1CXxjX">
                            <div className="_3LrtWH">
                              <div className="_3QuZpZ dod-div">
                                <div className="dod-label"> Deals of the Day </div>
                                <div className="_1oETR8">
                                  <div className="_1dZamR _2mmD4F">
                                    <img
                                      className="_29lYyb"
                                      src="https://festive99.shop/assets/website/images/theme/clock.svg"
                                    />
                                    <div id="test">
                                      {Math.floor(time / 60)}:{time % 60}</div>
                                  </div>
                                </div>
                              </div>
                              <div className="_3Nxu4r">
                                <button className="_1s54Jm btn-sale-is-live">SALE IS LIVE</button>
                              </div>
                            </div>
                          </div>

                          <div className='row'>
                            {data?.data?.length > 0 &&
                              data?.data?.map((item, index) => {
                                return <Card key={item.id} item={item} index={index} />;
                              })}
                            {/* <table className="-LqSIK _3xlpeR">
                            <tbody id="home_page_product">
                              <tr>
                                <td className="Cs7ycL TcKeCe">
                                  <a href="product-details/eccbc87e4b5ce2fe28308fd9f2a7baf3">
                                    <div className="_2enssu">
                                      <div
                                        style={{
                                          position: "relative",
                                          minHeight: 170,
                                          minWidth: 150
                                        }}
                                      >
                                        <div className="_3LXIRu">
                                          <div
                                            className="_2GaeWJ"
                                            style={{ width: 170, height: 170 }}
                                          >
                                            <img
                                              className="_2puWtW _3a3qyb"
                                              src="https://cdn.shopify.com/s/files/1/0805/0475/0393/products/71yzJoE7WlL._SL1500.jpg?v=1690578986"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="_24B_AU _3SexMn">
                                        Apple iPhone 14 Pro Max (256 GB) - Deep
                                        Purple
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        -98% Off
                                        <span className="mrp">₹104000</span>
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        <b className="selling-price">₹1592</b>
                                        <img
                                          src="https://electriceranet.store/img/SwOvZ3r.png"
                                          width="77px"
                                        />
                                      </div>
                                      <div className="_3Nxu4r delivery-txt">
                                        Free Delivery in Two Days
                                      </div>
                                    </div>
                                  </a>
                                </td>
                                <td className="Cs7ycL TcKeCe">
                                  <a href="product-details/a87ff679a2f3e71d9181a67b7542122c">
                                    <div className="_2enssu">
                                      <div
                                        style={{
                                          position: "relative",
                                          minHeight: 170,
                                          minWidth: 150
                                        }}
                                      >
                                        <div className="_3LXIRu">
                                          <div
                                            className="_2GaeWJ"
                                            style={{ width: 170, height: 170 }}
                                          >
                                            <img
                                              className="_2puWtW _3a3qyb"
                                              src="https://cdn.shopify.com/s/files/1/0805/0475/0393/products/61BGE6iu4AL._SL1500.jpg?v=1690578957"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="_24B_AU _3SexMn">
                                        Apple iPhone 14 Plus (128 GB) - Blue
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        -98% Off
                                        <span className="mrp">₹69000</span>
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        <b className="selling-price">₹1592</b>
                                        <img
                                          src="https://electriceranet.store/img/SwOvZ3r.png"
                                          width="77px"
                                        />
                                      </div>
                                      <div className="_3Nxu4r delivery-txt">
                                        Free Delivery in Two Days
                                      </div>
                                    </div>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="Cs7ycL TcKeCe">
                                  <a href="product-details/e4da3b7fbbce2345d7772b0674a318d5">
                                    <div className="_2enssu">
                                      <div
                                        style={{
                                          position: "relative",
                                          minHeight: 170,
                                          minWidth: 150
                                        }}
                                      >
                                        <div className="_3LXIRu">
                                          <div
                                            className="_2GaeWJ"
                                            style={{ width: 170, height: 170 }}
                                          >
                                            <img
                                              className="_2puWtW _3a3qyb"
                                              src="https://cdn.shopify.com/s/files/1/0805/0475/0393/products/71PvHfU_pwL._SL1500.jpg?v=1690578929"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="_24B_AU _3SexMn">
                                        Samsung Galaxy S22 Ultra 5G (Green, 12GB,
                                        256GB Storage)
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        -98% Off
                                        <span className="mrp">₹82000</span>
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        <b className="selling-price">₹1592</b>
                                        <img
                                          src="https://electriceranet.store/img/SwOvZ3r.png"
                                          width="77px"
                                        />
                                      </div>
                                      <div className="_3Nxu4r delivery-txt">
                                        Free Delivery in Two Days
                                      </div>
                                    </div>
                                  </a>
                                </td>
                                <td className="Cs7ycL TcKeCe">
                                  <a href="product-details/1679091c5a880faf6fb5e6087eb1b2dc">
                                    <div className="_2enssu">
                                      <div
                                        style={{
                                          position: "relative",
                                          minHeight: 170,
                                          minWidth: 150
                                        }}
                                      >
                                        <div className="_3LXIRu">
                                          <div
                                            className="_2GaeWJ"
                                            style={{ width: 170, height: 170 }}
                                          >
                                            <img
                                              className="_2puWtW _3a3qyb"
                                              src="https://cdn.shopify.com/s/files/1/0805/0475/0393/products/71BoiXkrEmL._SL1500.jpg?v=1690578902"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="_24B_AU _3SexMn">
                                        OnePlus 10R 5G (Sierra Black, 12GB RAM,
                                        256GB Storage, 80W SuperVOOC)
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        -95% Off
                                        <span className="mrp">₹31000</span>
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        <b className="selling-price">₹1592</b>
                                        <img
                                          src="https://electriceranet.store/img/SwOvZ3r.png"
                                          width="77px"
                                        />
                                      </div>
                                      <div className="_3Nxu4r delivery-txt">
                                        Free Delivery in Two Days
                                      </div>
                                    </div>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="Cs7ycL TcKeCe">
                                  <a href="product-details/1f0e3dad99908345f7439f8ffabdffc4">
                                    <div className="_2enssu">
                                      <div
                                        style={{
                                          position: "relative",
                                          minHeight: 170,
                                          minWidth: 150
                                        }}
                                      >
                                        <div className="_3LXIRu">
                                          <div
                                            className="_2GaeWJ"
                                            style={{ width: 170, height: 170 }}
                                          >
                                            <img
                                              className="_2puWtW _3a3qyb"
                                              src="https://cdn.shopify.com/s/files/1/0805/0475/0393/products/619DjCmDNPL._SL1446.jpg?v=1690578620"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="_24B_AU _3SexMn">
                                        Samsung Galaxy S23 5G (Lavender, 8GB, 128GB
                                        Storage)
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        -97% Off
                                        <span className="mrp">₹62000</span>
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        <b className="selling-price">₹1592</b>
                                        <img
                                          src="https://electriceranet.store/img/SwOvZ3r.png"
                                          width="77px"
                                        />
                                      </div>
                                      <div className="_3Nxu4r delivery-txt">
                                        Free Delivery in Two Days
                                      </div>
                                    </div>
                                  </a>
                                </td>
                                <td className="Cs7ycL TcKeCe">
                                  <a href="product-details/8e296a067a37563370ded05f5a3bf3ec">
                                    <div className="_2enssu">
                                      <div
                                        style={{
                                          position: "relative",
                                          minHeight: 170,
                                          minWidth: 150
                                        }}
                                      >
                                        <div className="_3LXIRu">
                                          <div
                                            className="_2GaeWJ"
                                            style={{ width: 170, height: 170 }}
                                          >
                                            <img
                                              className="_2puWtW _3a3qyb"
                                              src="https://images.samsung.com/in/smartphones/galaxy-z-fold5/buy/product_color_icyBlue.png?imwidth=480"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="_24B_AU _3SexMn">
                                        Galaxy Z Fold5
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        -99% Off
                                        <span className="mrp">₹154000</span>
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        <b className="selling-price">₹1499</b>
                                        <img
                                          src="https://electriceranet.store/img/SwOvZ3r.png"
                                          width="77px"
                                        />
                                      </div>
                                      <div className="_3Nxu4r delivery-txt">
                                        Free Delivery in Two Days
                                      </div>
                                    </div>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="Cs7ycL TcKeCe">
                                  <a href="product-details/33e75ff09dd601bbe69f351039152189">
                                    <div className="_2enssu">
                                      <div
                                        style={{
                                          position: "relative",
                                          minHeight: 170,
                                          minWidth: 150
                                        }}
                                      >
                                        <div className="_3LXIRu">
                                          <div
                                            className="_2GaeWJ"
                                            style={{ width: 170, height: 170 }}
                                          >
                                            <img
                                              className="_2puWtW _3a3qyb"
                                              src="https://images.samsung.com/in/smartphones/galaxy-z-flip5/buy/product_color_mint.png?imwidth=480"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="_24B_AU _3SexMn">
                                        SGalaxy Z Flip5
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        -99% Off
                                        <span className="mrp">₹109999</span>
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        <b className="selling-price">₹1299</b>
                                        <img
                                          src="https://electriceranet.store/img/SwOvZ3r.png"
                                          width="77px"
                                        />
                                      </div>
                                      <div className="_3Nxu4r delivery-txt">
                                        Free Delivery in Two Days
                                      </div>
                                    </div>
                                  </a>
                                </td>
                                <td className="Cs7ycL TcKeCe">
                                  <a href="product-details/c74d97b01eae257e44aa9d5bade97baf">
                                    <div className="_2enssu">
                                      <div
                                        style={{
                                          position: "relative",
                                          minHeight: 170,
                                          minWidth: 150
                                        }}
                                      >
                                        <div className="_3LXIRu">
                                          <div
                                            className="_2GaeWJ"
                                            style={{ width: 170, height: 170 }}
                                          >
                                            <img
                                              className="_2puWtW _3a3qyb"
                                              src="https://cdn.shopify.com/s/files/1/0805/0475/0393/products/71f5Eu5lJSL._SL1500.jpg?v=1690578663"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="_24B_AU _3SexMn">
                                        Apple 2022 MacBook Air Laptop with M2 chip
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        -99% Off
                                        <span className="mrp">₹99000</span>
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        <b className="selling-price">₹599</b>
                                        <img
                                          src="https://electriceranet.store/img/SwOvZ3r.png"
                                          width="77px"
                                        />
                                      </div>
                                      <div className="_3Nxu4r delivery-txt">
                                        Free Delivery in Two Days
                                      </div>
                                    </div>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="Cs7ycL TcKeCe">
                                  <a href="product-details/c4ca4238a0b923820dcc509a6f75849b">
                                    <div className="_2enssu">
                                      <div
                                        style={{
                                          position: "relative",
                                          minHeight: 170,
                                          minWidth: 150
                                        }}
                                      >
                                        <div className="_3LXIRu">
                                          <div
                                            className="_2GaeWJ"
                                            style={{ width: 170, height: 170 }}
                                          >
                                            <img
                                              className="_2puWtW _3a3qyb"
                                              src="https://cdn.shopify.com/s/files/1/0805/0475/0393/products/main_b82b6b37-325e-4706-aec2-3b8159d1d994.png?v=1690578991"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="_24B_AU _3SexMn">
                                        boAt Aavante 3150D | Powerful 260W Home
                                        Theatre
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        -98% Off
                                        <span className="mrp">₹24990</span>
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        <b className="selling-price">₹399</b>
                                        <img
                                          src="https://electriceranet.store/img/SwOvZ3r.png"
                                          width="77px"
                                        />
                                      </div>
                                      <div className="_3Nxu4r delivery-txt">
                                        Free Delivery in Two Days
                                      </div>
                                    </div>
                                  </a>
                                </td>
                                <td className="Cs7ycL TcKeCe">
                                  <a href="product-details/c81e728d9d4c2f636f067f89cc14862c">
                                    <div className="_2enssu">
                                      <div
                                        style={{
                                          position: "relative",
                                          minHeight: 170,
                                          minWidth: 150
                                        }}
                                      >
                                        <div className="_3LXIRu">
                                          <div
                                            className="_2GaeWJ"
                                            style={{ width: 170, height: 170 }}
                                          >
                                            <img
                                              className="_2puWtW _3a3qyb"
                                              src="https://cdn.shopify.com/s/files/1/0805/0475/0393/products/2_af44472c-0a30-43dd-aad0-bbd2b90eb93e.png?v=1690578989"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="_24B_AU _3SexMn">
                                        boAt Aavante Bar 3200D | 5.1 Channel
                                        Soundbar
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        -99% Off
                                        <span className="mrp">₹39990</span>
                                      </div>
                                      <div className="_24B_AU _1AQnZC">
                                        <b className="selling-price">₹399</b>
                                        <img
                                          src="https://electriceranet.store/img/SwOvZ3r.png"
                                          width="77px"
                                        />
                                      </div>
                                      <div className="_3Nxu4r delivery-txt">
                                        Free Delivery in Two Days
                                      </div>
                                    </div>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="seofooter" id="seofooter"></footer>
      </div>
    </>

  );
}

export default Home;
