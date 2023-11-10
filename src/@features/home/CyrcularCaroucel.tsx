import React, { useCallback, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface ICarouselItemData {
  id: number;
  image1: string;
  image2: string;
  name: string;
  price: string;
  description: string;
}

function CyrcularCaroucel() {
  const [data, setData] = useState<ICarouselItemData[]>([
    {
      id: 1,
      image1: "//monarq.ch/cdn/shop/products/beluga_bas_900x.png?v=1610059553",
      image2: "//monarq.ch/cdn/shop/products/beluga_top_900x.png?v=1610059553",
      name: "Beluga",
      price: "From 700.00",
      description:
        "Beluga caviar is the most iconic of all caviars. Its smooth taste and rich flavour make it an exceptional delicacy – notes of butter, hazelnut and fresh egg linger in the mouth.",
    },
    {
      id: 2,
      image1:
        "//monarq.ch/cdn/shop/products/oscietre_bas_900x.png?v=1610059630",
      image2:
        "//monarq.ch/cdn/shop/products/oscietre_top_900x.png?v=1610059630",
      name: "Ossetra",
      price: "From 220.00",
      description:
        "Ossetra caviar can be recognised by its regular structure, its finesse and its golden tones. This caviar has unquestionable credentials. It has a salty taste with a wonderful finesse on the palate and presents flavours of the sea and perfectly balanced notes of green walnut.",
    },
    {
      id: 3,
      image1: "//monarq.ch/cdn/shop/products/sevruga_bas_900x.png?v=1610059688",
      image2: "//monarq.ch/cdn/shop/products/sevruga_top_900x.png?v=1610059688",
      name: "Sevruga",
      price: "From 220.00",
      description:
        "Sevruga caviar is a distinctive caviar that will surprise you with its unrivalled melt-in-the-mouth texture. The royal stamp of approval for your table. Thanks to its creamy texture and a process ensuring it reaches perfect maturity, this caviar coats the palate with powerful tastes of the sea and a wonderful long-lasting flavour.",
    },
    {
      id: 4,
      image1: "//monarq.ch/cdn/shop/products/baeri_bas_900x.png?v=1607588979",
      image2: "//monarq.ch/cdn/shop/products/baeri_top_900x.png?v=1607588979",
      name: "Baeri",
      price: "From 180.00",
      description:
        "Baeri caviar has small, delicate grains with a brown colour and a pure, strong initial taste, dominated by salty and mineral notes. Once on the palate, the small grains release delicate woody notes that are combined with a subtle hazelnut flavour.",
    },
  ]);

  const [selectedCard, setSelectedCard] = useState(0);

  // const hideMenuBtnHandler = useCallback(() => {
  //   var x = document.getElementsByClassName("s-header");
  //   var i;
  //   for (i = 0; i < x.length; i++) {
  //     x[i].className += " is-scrolled is-hidden"; // WITH space added
  //   }
  // }, []);

  var scrollpos = window.scrollY;
  var x = document.getElementsByClassName("s-header");

  function add_class_on_scroll() {
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].className += " is-scrolled is-hidden"; // WITH space added
    }
  }

  function remove_class_on_scroll() {
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("is-scrolled"); // WITH space added
      x[i].classList.remove("is-hidden"); // WITH space added
    }
  }

  window.addEventListener("scroll", function () {
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if (scrollpos > 50) {
      add_class_on_scroll();
    } else {
      remove_class_on_scroll();
    }
  });

  return (
    <div
      id="shopify-section-1601904538995"
      className="shopify-section"
      // onPointerOver={hideMenuBtnHandler}
    >
      <section className="section section--full roulette relative" js-roulette>
        <div
          className="h-0 lazy lazyload"
          data-bg="//monarq.ch/cdn/shop/t/8/assets/background.jpg?v=157063644335536742791670342491"
          data-instant
        ></div>

        <div className="roulette__inner">
          <div className="circle"></div>

          <div className="roulette__slideshow" data-slideshow>
            {data.map((item, index) => (
              <article
                key={item.id}
                className={
                  index === selectedCard
                    ? "roulette__slide is-active"
                    : index === selectedCard - 1
                    ? "roulette__slide is-prev"
                    : index === selectedCard + 1
                    ? "roulette__slide is-next"
                    : index < selectedCard - 1
                    ? "roulette__slide is-far-prev"
                    : index > selectedCard + 1
                    ? "roulette__slide is-far-next"
                    : ""
                }
                data-roulette-slide
                data-index="0"
              >
                <figure className="roulette__figure" data-hero-in>
                  <img src={item.image1} />
                  <img src={item.image2} />
                </figure>

                <div className="roulette__nav is-mobile">
                  <button
                    data-prev
                    onClick={() => setSelectedCard(selectedCard - 1)}
                    style={{ display: selectedCard === 0 ? "none" : "block" }}
                  >
                    <div className="icon icon--arrow">
                      <FaArrowCircleRight />
                    </div>
                  </button>
                  <button
                    data-next
                    onClick={() => setSelectedCard(selectedCard + 1)}
                    style={{
                      display:
                        selectedCard === data.length - 1 ? "none" : "block",
                    }}
                  >
                    <div className="icon icon--arrow">
                      <FaArrowCircleRight />
                    </div>
                  </button>
                </div>
                <div className="roulette__productTag">
                  <div className="product-tag">
                    <div className="product-tag__head">
                      <span className="product-tag__name">{item.name}</span>
                      <span className="product-tag__price">{item.price}</span>
                    </div>
                    <div className="product-tag__description">
                      <p>
                        <span data-mce-fragment="1">{item.description}</span>
                      </p>
                    </div>
                    <div className="product-tag__btn">
                      <a
                        href="/product/1"
                        className="btn btn--alt btn--fixed btn--large js-roulette-product-btn"
                        data-index="0"
                      >
                        <span>
                          <span>Discover</span>
                          <span aria-hidden>Discover</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            <div className="roulette__nav">
              <div>
                <button
                  data-prev
                  data-prev-desktop
                  onClick={() => setSelectedCard(selectedCard - 1)}
                  style={{ display: selectedCard === 0 ? "none" : "block" }}
                >
                  <div className="icon icon--arrow">
                    <FaArrowCircleRight />
                  </div>
                </button>
              </div>
              <div>
                <button
                  data-next
                  data-next-desktop
                  onClick={() => setSelectedCard(selectedCard + 1)}
                  style={{
                    display:
                      selectedCard === data.length - 1 ? "none" : "block",
                  }}
                >
                  <div className="icon icon--arrow">
                    <FaArrowCircleRight />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CyrcularCaroucel;
