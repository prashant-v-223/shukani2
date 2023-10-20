import React, { useEffect, useMemo, useState } from 'react'
import data from "../data/index.json";
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import useStore from "../store";

function Productdetails() {
    const params = useParams();
    const navigation = useNavigate();
    const { setItem } = useStore();
    console.log(params.id);
    let data1 = data;
    const initialTime = 900; // 10 minutes in seconds
    const [time, setTime] = useState(initialTime);
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

    const [currentIndex, setCurrentIndex] = useState(0);
    let item = useMemo(
        () =>
            data1?.data?.find((item) => {
                return item.md5_id === params.id;
            }),
        [params.id]
    );
    const uniqueColorsObject = new Set();
    item?.verients.forEach((item) => {
        const { id, color, img1, storage } = item;
        if (!uniqueColorsObject[color]) {
            uniqueColorsObject[color] = { id, images: [img1], storage: [storage] };
        } else {
            uniqueColorsObject[color].images.push(img1);
            uniqueColorsObject[color].storage.push(storage);
        }
    });

    const uniqueColorsArray = Object.values(uniqueColorsObject);
    const [activeid, setactiveid] = useState(
        uniqueColorsArray && uniqueColorsArray[0]?.id
    );
    let img = uniqueColorsArray.find((e) => {
        return e.id == activeid;
    });
    let data123 = new Set(img?.storage);
    const uniqueStorageArray = [...data123]; //
    console.log(uniqueStorageArray);
    console.log(data123);

    const [activetorage, setactivetorage] = useState(
        uniqueColorsArray[0].storage[0]
    );
    const handleBuy = () => {
        setItem(item);
        navigation("/address");
        // router.push("/purchase");
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const percentageOff = ((item.mrp - item.selling_price) / item.mrp) * 100;
    return (
        <div id="container" style={{ overflow: "hidden" }}>
            <div style={{ height: "100%" }} data-reactroot="">
                <div
                    className="container-fluid py-2 header-container"
                    style={{ backgroundColor: "#2874f0" }}
                >
                    <div className="row header">
                        <div className="col-1">
                            <div className="menu-icon" id="back_btn" onClick={() => {
                                navigation("/");
                            }}>
                                <svg
                                    width={19}
                                    height={16}
                                    viewBox="0 0 19 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817"
                                        stroke="#FFF"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                    />
                                </svg>{" "}
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="menu-logo">
                                <img
                                    alt="menu"
                                    src="https://festive99.shop/assets/website/img/Q18Ifxk.png"
                                    height="30px"
                                />
                            </div>
                        </div>
                        <div className="col-6"></div>
                        <div className="col-1">
                            <div className="menu-icon">
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g fill="#FFF" fillRule="evenodd">
                                        <path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203" />
                                        <path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467" />
                                    </g>
                                </svg>{" "}
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="menu-icon">
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_1fhgRH mb-5">
                    <div className="container p-1 card">
                        <div className="container-fluid px-0 product-slider">
                            <div className="love-icon" />
                            <div className="share-icon" />
                            <div id="sliderX" className="carousel slide" data-ride="carousel">
                                {/* <ol className="carousel-indicators">
                                    <li
                                        data-bs-target="#sliderX"
                                        data-bs-slide-to={0}
                                        className="active"
                                    />
                                </ol> */}
                                <div className="carousel-inner">
                                    <Slider {...settings}>

                                        {img.images.map((e, i) => {
                                            return (
                                                <div className="embla__slide">
                                                    <img
                                                        alt="hero"
                                                        src={e}
                                                        loading="lazy"
                                                        style={{ maxWidth: 700, margin: "auto" }}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </Slider>
                                    {/* <div className="carousel-item active">
                                        <img
                                            className="d-block img-fluid m-auto"
                                            style={{ height: 400 }}
                                            src="https://cdn.shopify.com/s/files/1/0805/0475/0393/products/71yzJoE7WlL._SL1500.jpg?v=1690578986"
                                        />
                                    </div> */}
                                </div>
                            </div>
                            <div className="color-div">
                                <h4>Select Color</h4>
                                <div className="color-list p-2">
                                    {uniqueColorsArray?.map((e, i) => {
                                        return (
                                            <div
                                                className={`color-item p-2 me-2 Deep_Purple   ${activeid === e.id && "active"
                                                    }`}
                                                onClick={() => {
                                                    setactiveid(e.id);
                                                }}
                                            >
                                                <img
                                                    src={e.images[0]}
                                                    alt="img0"
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="storage-div mt-3">
                                <h4>Select Storage</h4>
                                {uniqueStorageArray[0] !== "" && (
                                    <div className="">
                                        <div className="color-list py-2">
                                            <div className="storage-list py-2">
                                                {uniqueStorageArray?.map((e, i) => {
                                                    console.log(uniqueStorageArray);
                                                    console.log(e);

                                                    if (e !== "") {
                                                        return (
                                                            <div
                                                                className={`storage-item p-3 me-2  ${activetorage === e && "active"
                                                                    }`}
                                                                onClick={() => {
                                                                    setactivetorage(e);
                                                                }}
                                                            >
                                                                <span className="storage-name">
                                                                    {e}
                                                                </span>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="size-div mt-3" style={{ display: "none" }}>
                                <h4>Select Size</h4>
                                <div className="size-list p-2">
                                    {/*<span class="size-name">M</span>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                                <div className="container-fluid p-3 mt-1 card">
                        <div className="product-title">
                            {item?.name}
                        </div>
  <div className="product-price d-flex my-2">
                            <span className="discount">{percentageOff.toFixed(2)}% off</span>
                            <span className="mrp">₹{item?.mrp}</span>
                            <span className="price"> ₹{item?.selling_price}</span>
  </div>
  {/*<img style="width: 100px" class="my-2" src="https://festive99.shop/assets/website/images/plue-fassured.png" alt="plue-fassured">*/}
  {/*<br>*/}
  <div className="aMaAEs">
    <div className="_3Zuayz">
      <div className="_3_L3jD">
        <div className="gUuXy- _16VRIQ _1eJXd3">
          <span
            id="productRating_LSTETHFZZUWAC8X2PGQZ7T8VQ_ETHFZZUWAC8X2PGQ_"
            className="_1lRcqv"
          >
            <div className="_3LWZlK _3uSWvT">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                className="_1wB99o _19cuvx"
              />
            </div>
          </span>
          <span className="_2_R_DZ">
            <span>120 ratings and 5 reviews</span>
          </span>
        </div>
      </div>
      <span className="b7864- _2Z07dN">
        <img
          height={21}
          src="//static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
          className="jMnjzX pZkvcx"
        />
      </span>
    </div>
  </div>
</div>

                    <div className="container-fluid p-3 offerend-container  my-1 card">
                        <h4 className="m-0">
                            {" "}
                            Offer ends in{" "}
                            <span className="offer-timer" id="offerend-time">
                                {Math.floor(time / 60)}min {time % 60}sec
                            </span>
                        </h4>
                    </div>
                    <div className="container-fluid p-3 mb-1 card">
                        <img
                            className="my-2"
                            src="https://festive99.shop/assets/website/images/pay-latter.png"
                            alt="pay-latter"
                        />
                    </div>
                <div className="container-fluid px-2 py-3 d-flex feature-container product-extra card">
  <div className="col-4 featured-item d-flex align-items-center flex-column bd-highlight px-1">
    <img
      className="featured-img mb-3"
      src="https://festive99.shop/assets/website/images/replacement.png"
    />
    <span className="feature-title"> 7 days Replacement </span>
  </div>
  <div className="col-4 featured-item d-flex align-items-center flex-column bd-highlight px-1">
    <img
      className="featured-img mb-3"
      src="https://festive99.shop/assets/website/images/non-cod.png"
    />
    <span className="feature-title"> No Cash On Delivery </span>
  </div>
  <div className="col-4 featured-item d-flex align-items-center flex-column bd-highlight px-1">
    <img
      className="featured-img mb-3 mt-1"
      src="https://festive99.shop/assets/website/images/plue-fassured.png"
    />
    <span className="feature-title"> Plus (F-Assured) </span>
  </div>
</div>


                    <div className="container-fluid product-detail px-0 py-3 mb-4 card">
                        <h3 className="txt-product-detail">Product Detail</h3>
                        <div className="product-details">
                            {item && (
                                <div dangerouslySetInnerHTML={{ __html: item.features }} />
                            )}
                        </div>
                    </div>
                </div>
                <div className="button-container flex">
                    <button
                        className="buynow-button buynow-button-white product-page-buy"
                        onclick="buyNow();"
                    >
                        Add to Cart
                    </button>
                    <button className="buynow-button product-page-buy" onClick={handleBuy} >
                        Buy Now
                    </button>
                </div>
            </div>
            <footer className="seofooter" id="seofooter"></footer>
        </div>
    )
}

export default Productdetails
