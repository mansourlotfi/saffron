import { useEffect } from "react";

function ProductPage() {
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

  useEffect(() => {
    document.body.classList.remove("has-overlay");
  }, []);

  return (
    <>
      <div className="page p-product theme-sevruga" data-page-product>
        <div id="shopify-section-product-hero" className="shopify-section">
          <div
            className="section s-product-hero s-product-hero--sevruga"
            webgl-target
            js-product-hero='{"index": 2}'
          >
            <div className="section__inner s-product-hero__inner">
              <div
                className="s-product-hero__picture lazy lazyload js-transition-bg"
                data-bg="//monarq.ch/cdn/shop/t/8/assets/background.jpg?v=157063644335536742791670342491"
                data-instant
              >
                <figure
                  className="s-product-hero__figure is-active"
                  data-hero
                  data-product-index={2}
                >
                  <div className="inner">
                    <img src="//monarq.ch/cdn/shop/products/sevruga_bas_900x.png?v=1610059688" />
                    <img src="//monarq.ch/cdn/shop/products/sevruga_top_900x.png?v=1610059688" />
                  </div>
                </figure>
              </div>
              <div className="s-product-hero__side-placeholder js-product-hero-placeholder">
                <div className="s-product-hero__side-wrapper js-app-extract js-app-sidebar">
                  <div className="s-product-hero__side trigger js-transition-sidebar">
                    <div
                      className="s-product-hero__side-inner s-product-hero__product-bar trigger trigger--static js-app-addtocart"
                      style={{ opacity: 1 }}
                      js-product-bar
                    >
                      <div className="s-product-hero__head">
                        <div className="s-product-hero__title uppercase">
                          Sevruga
                        </div>
                        <p className="s-product-hero__price">
                          <span className="js-product-bar-money btn-transition">
                            <span>SFr. 220.00</span>
                          </span>
                        </p>
                        <div
                          className="s-product-hero__rate js-page-scrollto-product"
                          data-to="#reviews"
                        >
                          <div
                            className="rate rate--is_link"
                            js-rate='{"count": 5, "out_of": 5}'
                          >
                            <div className="rate__wrapper">
                              <div className="rate__base">
                                <div className="icon icon--star-out">
                                  <svg>
                                    <use
                                      xlinkHref="#icon-star-out"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                    />
                                  </svg>
                                </div>
                                <div className="icon icon--star-out">
                                  <svg>
                                    <use
                                      xlinkHref="#icon-star-out"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                    />
                                  </svg>
                                </div>
                                <div className="icon icon--star-out">
                                  <svg>
                                    <use
                                      xlinkHref="#icon-star-out"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                    />
                                  </svg>
                                </div>
                                <div className="icon icon--star-out">
                                  <svg>
                                    <use
                                      xlinkHref="#icon-star-out"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                    />
                                  </svg>
                                </div>
                                <div className="icon icon--star-out">
                                  <svg>
                                    <use
                                      xlinkHref="#icon-star-out"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="rate__value js-rate-value">
                                <div className="icon icon--star">
                                  <svg>
                                    <use
                                      xlinkHref="#icon-star"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                    />
                                  </svg>
                                </div>
                                <div className="icon icon--star">
                                  <svg>
                                    <use
                                      xlinkHref="#icon-star"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                    />
                                  </svg>
                                </div>
                                <div className="icon icon--star">
                                  <svg>
                                    <use
                                      xlinkHref="#icon-star"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                    />
                                  </svg>
                                </div>
                                <div className="icon icon--star">
                                  <svg>
                                    <use
                                      xlinkHref="#icon-star"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                    />
                                  </svg>
                                </div>
                                <div className="icon icon--star">
                                  <svg>
                                    <use
                                      xlinkHref="#icon-star"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <span> rated 5/5</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="s-product-hero__description accordion"
                        js-accordion
                      >
                        <p>
                          <span data-mce-fragment={1}>
                            Sevruga caviar is a distinctive caviar that will
                            surprise you with its unrivalled melt-in-the-mouth
                            texture. The royal stamp of approval for your table.
                            Thanks to its creamy texture and a process ensuring
                            it reaches perfect maturity, this caviar coats the
                            palate with powerful tastes of the sea and a
                            wonderful long-lasting flavour.
                          </span>
                        </p>
                        <hr />
                        <table width="100%">
                          <tbody>
                            <tr>
                              <td>
                                <p>Ingredients</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>
                                  <strong>
                                    Sturgeon roe, salt, E285 preservative.
                                  </strong>
                                </p>
                                <p>Average nutritional values per 100 g</p>
                                <p>Fat: 12.6 g (of which saturates: 3.5 g)</p>
                                <p>Energy: 221 kcal – 925 kJ</p>
                                <p>
                                  Carbohydrates: 1 g (of which sugars: 0.41 g)
                                </p>
                                <p>Protein: 28.1 g</p>
                                <p>Sodium: 3.2 g</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>
                                  Details
                                  <br />
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>Species: Acipenser Stellatus</p>
                                <p>Origin: Bulgaria</p>
                                <p>Allergens: Fish</p>
                                <p>Grain diameter: 2.7–3.1 mm</p>
                                <p>Store at -2 to 4 degrees</p>
                                <p>
                                  Store for 2–3 months (after opening max. 4–5
                                  days)
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* DESKTOP FORM */}
                      <div className="block" js-add-to-cart>
                        <form
                          method="post"
                          action="/en/cart/add"
                          id="product_form_5796395843734"
                          acceptCharset="UTF-8"
                          className="shopify-product-form"
                          encType="multipart/form-data"
                        >
                          <input
                            type="hidden"
                            name="form_type"
                            defaultValue="product"
                          />
                          <input type="hidden" name="utf8" defaultValue="✓" />
                          <div
                            className="product-radios js-product-bar-select"
                            js-product-radios
                          >
                            <div className="radios">
                              <div className="radios__item">
                                <input
                                  type="radio"
                                  id="radio-36605522149526"
                                  name="id"
                                  defaultValue={36605522149526}
                                  defaultChecked
                                  data-price="SFr. 220.00"
                                  data-available="true"
                                  data-quote="false"
                                />
                                <label htmlFor="radio-36605522149526">
                                  <span>125gr</span>
                                </label>
                              </div>
                              <div className="radios__item">
                                <input
                                  type="radio"
                                  id="radio-36605522182294"
                                  name="id"
                                  defaultValue={36605522182294}
                                  data-price="SFr. 440.00"
                                  data-available="true"
                                  data-quote="false"
                                />
                                <label htmlFor="radio-36605522182294">
                                  <span>250gr</span>
                                </label>
                              </div>
                              <div className="radios__item">
                                <input
                                  type="radio"
                                  id="radio-36605522215062"
                                  name="id"
                                  defaultValue={36605522215062}
                                  data-price="SFr. 880.00"
                                  data-available="true"
                                  data-quote="false"
                                />
                                <label htmlFor="radio-36605522215062">
                                  <span>500gr</span>
                                </label>
                              </div>
                              <div className="radios__item">
                                <input
                                  type="radio"
                                  id="radio-36605522247830"
                                  name="id"
                                  defaultValue={36605522247830}
                                  data-price="SFr. 1,720.00"
                                  data-available="true"
                                  data-quote="false"
                                />
                                <label htmlFor="radio-36605522247830">
                                  <span>1kg</span>
                                </label>
                              </div>
                              <div className="radios__item">
                                <input
                                  type="radio"
                                  id="radio-36605522280598"
                                  name="id"
                                  defaultValue={36605522280598}
                                  data-price="SFr. 5,555.00"
                                  data-available="false"
                                  data-quote="true"
                                />
                                <label htmlFor="radio-36605522280598">
                                  <span>1.8kg</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div
                            className="s-product-hero__sizeguide-btn link link--silver anchor js-page-scrollto-product"
                            data-to="#s-product-ideal-quantity"
                          >
                            Choose ideal size
                          </div>
                          <div
                            className="s-product-hero__actions"
                            js-delivery-date
                          >
                            <div className="s-product-hero__add-to-cart">
                              <div className="add-to-cart-delivery-date line-item-property__field">
                                <div className="calendar">
                                  <svg
                                    width={19}
                                    height={18}
                                    viewBox="0 0 19 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M17.0004 1.6875H14.5625V0.5625C14.5625 0.251438 14.3111 0 14 0C13.6889 0 13.4375 0.251438 13.4375 0.5625V1.6875H10.0625V0.5625C10.0625 0.251438 9.8105 0 9.5 0C9.1895 0 8.9375 0.251438 8.9375 0.5625V1.6875H5.5625V0.5625C5.5625 0.251438 5.3105 0 5 0C4.6895 0 4.4375 0.251438 4.4375 0.5625V1.6875H2.00019C1.17163 1.6875 0.5 2.35856 0.5 3.18712V16.4998C0.5 17.3284 1.17163 18 2.00019 18H17.0004C17.8289 18 18.5 17.3284 18.5 16.4998V3.18712C18.5 2.35856 17.8289 1.6875 17.0004 1.6875ZM17.375 16.4998C17.375 16.7068 17.2068 16.875 17.0004 16.875H2.00019C1.79319 16.875 1.625 16.7068 1.625 16.4998V3.18712C1.625 2.98069 1.79319 2.8125 2.00019 2.8125H4.4375V3.9375C4.4375 4.24856 4.6895 4.5 5 4.5C5.3105 4.5 5.5625 4.24856 5.5625 3.9375V2.8125H8.9375V3.9375C8.9375 4.24856 9.1895 4.5 9.5 4.5C9.8105 4.5 10.0625 4.24856 10.0625 3.9375V2.8125H13.4375V3.9375C13.4375 4.24856 13.6889 4.5 14 4.5C14.3111 4.5 14.5625 4.24856 14.5625 3.9375V2.8125H17.0004C17.2068 2.8125 17.375 2.98069 17.375 3.18712V16.4998Z"
                                      fill="#13110C"
                                    />
                                    <path
                                      d="M6.6875 6.75H4.4375V8.4375H6.6875V6.75Z"
                                      fill="#13110C"
                                    />
                                    <path
                                      d="M6.6875 9.5625H4.4375V11.25H6.6875V9.5625Z"
                                      fill="#13110C"
                                    />
                                    <path
                                      d="M6.6875 12.375H4.4375V14.0625H6.6875V12.375Z"
                                      fill="#13110C"
                                    />
                                    <path
                                      d="M10.625 12.375H8.375V14.0625H10.625V12.375Z"
                                      fill="#13110C"
                                    />
                                    <path
                                      d="M10.625 9.5625H8.375V11.25H10.625V9.5625Z"
                                      fill="#13110C"
                                    />
                                    <path
                                      d="M10.625 6.75H8.375V8.4375H10.625V6.75Z"
                                      fill="#13110C"
                                    />
                                    <path
                                      d="M14.5625 12.375H12.3125V14.0625H14.5625V12.375Z"
                                      fill="#13110C"
                                    />
                                    <path
                                      d="M14.5625 9.5625H12.3125V11.25H14.5625V9.5625Z"
                                      fill="#13110C"
                                    />
                                    <path
                                      d="M14.5625 6.75H12.3125V8.4375H14.5625V6.75Z"
                                      fill="#13110C"
                                    />
                                  </svg>
                                </div>
                                <label
                                  htmlFor="delivery_date"
                                  className="hidden"
                                >
                                  Delivery Date
                                </label>
                                <input
                                  required
                                  className="required"
                                  type="text"
                                  autoComplete="off"
                                  name="Delivery Date"
                                  id="delivery_date"
                                  placeholder="Choose delivery date"
                                  js-delivery-date-input
                                />
                                <div className="chevron">
                                  <svg
                                    width={14}
                                    height={8}
                                    viewBox="0 0 14 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M1 1L7 7L13 1" stroke="black" />
                                  </svg>
                                </div>
                              </div>
                              <button
                                type="submit"
                                className="btn btn--alt btn--cart btn--theme w-full"
                              >
                                <span>
                                  <span aria-hidden>Add to cart </span>
                                  <span>Add to cart </span>
                                </span>
                              </button>
                              {/* <div class="s-product-hero__dyn-checkout">
                      <div data-shopify="payment-button" data-has-selling-plan="false" data-has-fixed-selling-plan="false" class="shopify-payment-button"><button class="shopify-payment-button__button shopify-payment-button__button--unbranded shopify-payment-button__button--hidden" disabled="disabled" aria-hidden="true"> </button><button class="shopify-payment-button__more-options shopify-payment-button__button--hidden" disabled="disabled" aria-hidden="true"> </button></div>
                      </div> */}
                            </div>
                          </div>
                        </form>
                        <div className="s-product-hero__actions-bis">
                          <div className="s-product-hero__waitlist js-product-bar-waitlist">
                            <form
                              className="form-input"
                              js-form
                              js-form-ajax='{"endpoint": Monarq.endpoints.notify, "confirmation": "We will send you an email as soon as possible."}'
                            >
                              <div className="form-input__inner">
                                <label
                                  className="form-input__label js-form-ajax-label"
                                  htmlFor="input-notify"
                                >
                                  Out of stock. Register to receive an email
                                  when back in stock
                                </label>
                                <div className="form-input__content">
                                  <div className="relative flex-grow" js-field>
                                    <input
                                      type="hidden"
                                      name="variant"
                                      className="js-product-bar-value-input"
                                    />
                                    <input
                                      type="email"
                                      name="email"
                                      id="input-notify"
                                      className="js-form-input js-field-input"
                                      aria-label="Email"
                                      autoCorrect="off"
                                      autoCapitalize="off"
                                      required
                                    />
                                    <label
                                      className="js-field-label"
                                      htmlFor="input-notify"
                                    >
                                      Email
                                    </label>
                                  </div>
                                  <button type="submit" className="js-form-btn">
                                    <div className="icon icon--arrow">
                                      <svg>
                                        <use
                                          xlinkHref="#icon-arrow"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                        />
                                      </svg>
                                    </div>
                                    <div className="icon icon--check">
                                      <svg>
                                        <use
                                          xlinkHref="#icon-check"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                        />
                                      </svg>
                                    </div>
                                  </button>
                                </div>
                              </div>
                              <p className="form-input__error">
                                Email address not valid, try again
                              </p>
                            </form>
                          </div>
                          <div className="s-product-hero__quote js-product-bar-quote">
                            <form
                              className="form-input"
                              js-form
                              js-form-ajax='{"endpoint": Monarq.endpoints.subscribe, "confirmation": "You are now registered."}'
                            >
                              <div className="form-input__inner">
                                <label
                                  className="form-input__label js-form-ajax-label"
                                  htmlFor="input-quote"
                                >
                                  Price upon request
                                </label>
                                <div className="form-input__content">
                                  <div className="relative flex-grow" js-field>
                                    <input
                                      type="hidden"
                                      name="list_id"
                                      defaultValue="WqBxRT"
                                    />
                                    <input
                                      type="hidden"
                                      name="product_name"
                                      defaultValue="Sevruga"
                                    />
                                    <input
                                      type="hidden"
                                      name="tag"
                                      defaultValue="infoprix"
                                    />
                                    <input
                                      type="email"
                                      name="email"
                                      id="input-quote"
                                      className="js-form-input js-field-input"
                                      aria-label="Email"
                                      autoCorrect="off"
                                      autoCapitalize="off"
                                      required
                                    />
                                    <label
                                      className="js-field-label"
                                      htmlFor="input-quote"
                                    >
                                      Email
                                    </label>
                                  </div>
                                  <button type="submit" className="js-form-btn">
                                    <div className="icon icon--arrow">
                                      <svg>
                                        <use
                                          xlinkHref="#icon-arrow"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                        />
                                      </svg>
                                    </div>
                                    <div className="icon icon--check">
                                      <svg>
                                        <use
                                          xlinkHref="#icon-check"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                        />
                                      </svg>
                                    </div>
                                  </button>
                                </div>
                              </div>
                              <p className="form-input__error">
                                Email address not valid, try again
                              </p>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="s-product-hero__reassure">
                        Express refrigerated delivery. <br />
                        <div className="icon icon--check">
                          <svg>
                            <use
                              xlinkHref="#icon-check"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            />
                          </svg>
                        </div>
                        guaranteed in 24/48 hrs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* MOBILE FORM */}
              {/* <div class="product-bar js-app-extract" js-product-bar js-add-to-cart>
      <div class="product-bar__head">
          <span class="product-bar__name">Sevruga</span>
          <span class="product-bar__price js-product-bar-money">
              <span>SFr. 220.00</span>
          </span>
      </div>
  
      <form action="/cart/add.js" method="post">
          <div class="product-bar__form">
              <div class="product-select js-product-bar-select" js-product-select>
      <div class="select">
          <select name="id">
              
                  
                  
                  <option  selected="selected"   value="36605522149526" data-price="SFr. 220.00" data-available="true" data-quote="false">125gr</option>
              
                  
                  
                  <option   value="36605522182294" data-price="SFr. 440.00" data-available="true" data-quote="false">250gr</option>
              
                  
                  
                  <option   value="36605522215062" data-price="SFr. 880.00" data-available="true" data-quote="false">500gr</option>
              
                  
                  
                  <option   value="36605522247830" data-price="SFr. 1,720.00" data-available="true" data-quote="false">1kg</option>
              
                  
                  
                  <option   value="36605522280598" data-price="SFr. 5,555.00" data-available="false" data-quote="true">1.8kg</option>
              
          </select>
      </div>
  </div>
  
              <button type="submit" class="btn btn--alt btn--cart btn--cart-simple flex-grow justify-center product-bar__add-to-cart"><span>Ajouter au panier</span></button>
          </div>
      </form>
  
      <div class="product-bar__forms">
          <div class="product-bar__waitlist js-product-bar-waitlist">
              <form class="form-input" js-form js-form-ajax='{"endpoint": Monarq.endpoints.notify, "confirmation": "We will send you an email as soon as possible."}'>
      <div class="form-input__inner">
          <label class="form-input__label js-form-ajax-label" for="input-notify">Out of stock. Register to receive an email when back in stock</label>
          <div class="form-input__content">
              <div class="relative flex-grow" js-field>
                  <input type="hidden" name="variant" value="" class="js-product-bar-value-input">
                  <input type="email" name="email" id="input-notify" class="js-form-input js-field-input" aria-label="Email" autocorrect="off" autocapitalize="off" required>
                  <label class="js-field-label" for="input-notify">Email</label>
              </div>
              <button type="submit" class="js-form-btn">
                  <div class="icon icon--arrow">
      <svg>
          <use xlink:href="#icon-arrow" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
      </svg>
  </div>
                  <div class="icon icon--check">
      <svg>
          <use xlink:href="#icon-check" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
      </svg>
  </div>
              </button>
          </div>
      </div>
      <p class="form-input__error">
          Email address not valid, try again
      </p>
  </form>
  
          </div>
  
          <div class="product-bar__quote js-product-bar-quote">
              <form class="form-input" js-form js-form-ajax='{"endpoint": Monarq.endpoints.subscribe, "confirmation": "You are now registered."}'>
      <div class="form-input__inner">
          <label class="form-input__label js-form-ajax-label" for="input-quote">Price upon request</label>
          <div class="form-input__content">
              <div class="relative flex-grow" js-field>
                  <input type="hidden" name="list_id" value="WqBxRT">
                  <input type="hidden" name="product_name" value="Sevruga">
                  <input type="hidden" name="tag" value="infoprix">
                  <input type="email" name="email" id="input-quote" class="js-form-input js-field-input" aria-label="Email" autocorrect="off" autocapitalize="off" required>
                  <label class="js-field-label" for="input-quote">Email</label>
              </div>
              <button type="submit" class="js-form-btn">
                  <div class="icon icon--arrow">
      <svg>
          <use xlink:href="#icon-arrow" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
      </svg>
  </div>
                  <div class="icon icon--check">
      <svg>
          <use xlink:href="#icon-check" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
      </svg>
  </div>
              </button>
          </div>
      </div>
      <p class="form-input__error">
          Email address not valid, try again
      </p>
  </form>
  
          </div>
      </div>
  </div> */}
            </div>
          </div>
        </div>
        <div id="shopify-section-product-top" className="shopify-section">
          <div className="product-top">
            <section className="section section--screen s-product-large-description">
              <div className="section__inner s-product-large-description__inner">
                <div
                  className="section__main wrapper bg-theme-primary"
                  style={{ backgroundColor: "#ea3e3b" }}
                >
                  <div className="s-product-large-description__content">
                    <img
                      className="s-product-large-description__icon"
                      src="//monarq.ch/cdn/shop/files/gE_edYfg_200x.png?v=1614336724"
                      alt=""
                    />
                    <h2 className="s-product-large-description__title">
                      The prince
                    </h2>
                    <p>
                      This small sturgeon creates caviar that melts in your
                      mouth, with shades of pearl grey and anthracite. Sevruga
                      is also known as the starry sturgeon due to its
                      star-shaped scales. This sturgeon can reach 1.5 metres and
                      produces its first eggs between the ages of 8 and 10.
                    </p>
                    <div className="s-product-large-description__latin">
                      <img
                        src="//monarq.ch/cdn/shop/files/gE_edYfg_88x.png?v=1614336724"
                        alt=""
                      />
                      <span>Acipenser Stellatus</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="s-product-ideal-quantity"
              className="section section--screen s-product-ideal-quantity"
            >
              <div className="section__inner s-product-ideal-quantity__inner">
                <div className="section__main wrapper bg-wild-sand">
                  <div className="s-product-ideal-quantity__content">
                    <h2 className="text-24 mb-xs">Choose the right size</h2>
                    <p className="text-18">
                      Based on the number of guests and your tasting
                      preferences.
                    </p>
                    <div
                      className="ideal-quantity__form mt-m md:mt-l"
                      js-ideal-quantity
                      data-minval={125}
                    >
                      <div className="field field--stepper" js-stepper>
                        <label className="text-18">Guests</label>
                        <div className="field__input h-20">
                          <button
                            type="button"
                            className="field__btn js-stepper-btn"
                            spinner-button="down"
                            title="Remove 1"
                          >
                            –
                          </button>
                          <input
                            type="text"
                            step={1}
                            min={2}
                            max={2000}
                            name="updates[]"
                            defaultValue={2}
                            size={4}
                            pattern="[0-9]*"
                            inputMode="numeric"
                            className="js-stepper-input h-full"
                            js-ideal-quantity-input
                          />
                          <button
                            type="button"
                            className="field__btn js-stepper-btn"
                            spinner-button="up"
                            title="Add 1"
                          >
                            +
                          </button>
                          <div className="field__border" />
                        </div>
                      </div>
                      <div className="field mt-xs">
                        <p className="text-18">Type of tasting</p>
                        <div className="radios">
                          <div className="radios__item">
                            <input
                              type="radio"
                              id="ideal_quantity_type1"
                              name="ideal_quantity_type"
                              defaultValue={45}
                              js-ideal_quantity_type
                              defaultChecked
                            />
                            <label htmlFor="ideal_quantity_type1">
                              <span>Starter or light dish</span>
                            </label>
                          </div>
                          <div className="radios__item">
                            <input
                              type="radio"
                              id="ideal_quantity_type2"
                              name="ideal_quantity_type"
                              defaultValue={60}
                              js-ideal_quantity_type
                            />
                            <label htmlFor="ideal_quantity_type2">
                              <span>Main or generous dish</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="ideal-quantity__end flex-wrap pt-m mt-m md:pt-l md:mt-l flex items-center justify-between">
                        <p className="text-24 pr-4 max-w-lg">
                          We recommend that you order the following quantity:
                        </p>
                        <div className="text-64 font-serif">
                          <span js-ideal-quantity-total>125</span>
                          <span js-ideal-quantity-unit>gr</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div
          id="shopify-section-product-information"
          className="shopify-section"
        >
          <section className="section section--screen s-product-information trigger js-app-sidebar-end">
            <div className="section__inner s-product-information__inner">
              <div className="s-product-information__content wrapper section-scale">
                <div className="section-animate">
                  <img
                    className="s-product-information__top-left"
                    src="//monarq.ch/cdn/shop/t/8/assets/icon-info.png?v=144484105018811363311670342497"
                    alt=""
                  />
                  <img
                    className="s-product-information__bottom-right"
                    src="//monarq.ch/cdn/shop/t/8/assets/icon-info.png?v=144484105018811363311670342497"
                    alt=""
                  />
                  <h3 className="s-product-information__title">
                    Key information
                  </h3>
                  <dl>
                    <div className="s-product-information__definition">
                      <dt>Delivery</dt>
                      <dd>
                        <p>
                          Our products are shipped throughout Switzerland with
                          DHL Express delivery in order to ensure the caviar
                          remains fresh. You can also enjoy specialised same day
                          delivery to receive your parcel on the same day. For
                          orders to other countries in Europe, please contact
                          <a
                            href="mailto:service@monarq.ch"
                            title="service@monarq.ch"
                          >
                            service@monarq.ch
                          </a>
                          and we will prepare a tailored offer for your enquiry.
                        </p>
                      </dd>
                    </div>
                    <div className="s-product-information__definition">
                      <dt>Size</dt>
                      <dd>
                        <p>
                          According to the occasion and the number of guests,
                          you can receive personal advice on the ideal size of
                          tin for your needs. You can contact us now using our
                          online chat or via email at
                          <a
                            href="mailto:service@monarq.ch"
                            title="service@monarq.ch"
                          >
                            service@monarq.ch
                          </a>
                          .
                        </p>
                      </dd>
                    </div>
                    <div className="s-product-information__definition">
                      <dt>Help</dt>
                      <dd>
                        <p>
                          Our
                          <a
                            href="http://support.monarq.ch/"
                            title="http://support.monarq.ch/"
                          >
                            FAQs page
                          </a>
                          has been designed to help respond to any questions you
                          may have about our products. Of course, we are also
                          available to provide any extra information via our
                          online chat or by email at
                          <a
                            href="mailto:service@monarq.ch"
                            title="service@monarq.ch"
                          >
                            service@monarq.ch
                          </a>
                          .
                        </p>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="shopify-section-reviews" className="shopify-section">
          <section
            id="reviews"
            className="section section--full s-reviews lazyload"
            js-reviews='{"productId": "5796395843734"}'
          >
            <div className="section__inner s-reviews__inner">
              <div className="section-head section-scale">
                <div className="section-head__inner section-animate">
                  <div>
                    <h3 className="section-head__title">Reviews</h3>
                    <p className="section-head__text">Based on 2 reviews</p>
                  </div>
                  <div className="s-reviews__rate">
                    <span>
                      <em>5</em>/5
                    </span>
                  </div>
                </div>
              </div>
              <div className="section-scale">
                <div className="js-reviews-wrapper section-animate">
                  {/* will hold template */}
                </div>
              </div>
              <div className="section-foot section-scale">
                <div className="section-foot__inner section-animate">
                  <a
                    href="https://monarq.ch/a/review/write?product=5796395843734"
                    className="btn btn--alt btn--large btn--transparent border-dove-light md:hidden"
                  >
                    <span>
                      <span>Write a review</span>
                      <span aria-hidden>Write a review</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="shopify-section-recipes" className="shopify-section">
          <section className="section section--full s-recipes">
            <div className="section__inner s-recipes__inner">
              <div className="section-head section-scale">
                <div className="section-head__inner section-animate">
                  <div>
                    <h3 className="section-head__title">
                      Discover our recipes
                    </h3>
                    <p className="section-head__text">
                      Discover our exceptional range of caviars for your
                      recipes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="section-scale">
                <div className="section-filters section-animate">
                  <div className="section-filters__track overflow-x-auto" />
                  <div className="hidden md:block">
                    <a
                      href="/en/blogs/articles"
                      className="btn btn--alt btn--large"
                    >
                      <span>
                        <span>Explore more</span>
                        <span aria-hidden>Explore more</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="section-scale">
                <div className="section-animate">
                  <div className="s-recipes__content-lines lg:hidden">
                    <div className="w-full trigger js-app-horizontal" js-drag>
                      <div className="s-recipes__content js-drag-track">
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/pain-perdu-truffe-caviar-monarq-oscietre"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                French toast, truffle and Monarq Ossetra caviar
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 23 January 2022
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/tartare-de-boeuf-avec-espuma-de-pomme-de-terre"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                Tartare de boeuf avec Espuma de pomme de terre
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 15 December 2021
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/filet-de-boeuf-sur-brioche-francaise"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                Filet de boeuf sur brioche française
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 15 December 2021
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/tartare-de-saumon-sur-blini"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                Tartare de saumon sur blini
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 15 December 2021
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/betteraves-vinaigrette-caviar-monarq-beluga"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                Beetroot vinaigrette, Monarq Beluga caviar
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 22 November 2021
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/monarq-caviar-oscietre-citron-caviar"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                Monarq Ossetra caviar and caviar lime
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 4 November 2021
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/fera-du-lac-leman-et-caviar-monarq-sevruga"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                Lake Geneva fera and Monarq Sevruga caviar
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 1 November 2021
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/galce-au-sarrasin-et-caviar-monarq-sevruga"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                Buckwheat ice cream and Monarq Sevruga caviar
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 1 November 2021
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/test"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                Crispy calf sweetbread, goat milk yoghurt and
                                Monarq Sevruga caviar
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 20 October 2021
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="s-recipes__content-lines hidden lg:block">
                    <div className="w-full trigger js-app-horizontal" js-drag>
                      <div className="s-recipes__content s-recipes__content--tabbed js-drag-track">
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/pain-perdu-truffe-caviar-monarq-oscietre"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                French toast, truffle and Monarq Ossetra caviar
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 23 January 2022
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/filet-de-boeuf-sur-brioche-francaise"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                Filet de boeuf sur brioche française
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 15 December 2021
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/betteraves-vinaigrette-caviar-monarq-beluga"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                Beetroot vinaigrette, Monarq Beluga caviar
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 22 November 2021
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/fera-du-lac-leman-et-caviar-monarq-sevruga"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                Lake Geneva fera and Monarq Sevruga caviar
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 1 November 2021
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/test"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                Crispy calf sweetbread, goat milk yoghurt and
                                Monarq Sevruga caviar
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 20 October 2021
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-full trigger js-app-horizontal hidden lg:flex"
                      js-drag='{"reverse": true}'
                    >
                      <div className="s-recipes__content s-recipes__content--reversed s-recipes__content--tabbed js-drag-track">
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/tartare-de-boeuf-avec-espuma-de-pomme-de-terre"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                Tartare de boeuf avec Espuma de pomme de terre
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 15 December 2021
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/tartare-de-saumon-sur-blini"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                Tartare de saumon sur blini
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 15 December 2021
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/monarq-caviar-oscietre-citron-caviar"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                Monarq Ossetra caviar and caviar lime
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 4 November 2021
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="s-recipes__item">
                          <a
                            href="/en/blogs/articles/galce-au-sarrasin-et-caviar-monarq-sevruga"
                            className="card-recipe"
                          >
                            <div className="card-recipe__inner">
                              <h4 className="card-recipe__title">
                                Buckwheat ice cream and Monarq Sevruga caviar
                              </h4>
                              <span className="card-recipe__date">
                                Posted on 1 November 2021
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section-foot">
                    <div className="section-foot__inner">
                      <a
                        href="#"
                        className="btn btn--alt btn--large btn--transparent border-dove-light md:hidden"
                      >
                        <span>
                          <span>Explore more</span>
                          <span aria-hidden>Explore more</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="shopify-section-cross-sell" className="shopify-section">
          <section className="section section--full s-cross-sell">
            <div className="section__inner s-cross-sell__inner section-scale">
              <div className="section-animate">
                <div className="s-cross-sell__title">
                  <h2>Our other Caviars</h2>
                </div>
                <div className="s-cross-sell__articles">
                  <div className="w-full" js-drag>
                    <div className="s-cross-sell__content js-drag-track">
                      <div className="s-cross-sell__item">
                        <a href="/en/products/beluga" className="card-product">
                          <div className="card-product__inner">
                            <div className="card-product__picture">
                              <div
                                className="card-product__bg cover lazy transition lazyloaded"
                                data-bg="//monarq.ch/cdn/shop/t/8/assets/background_700x.jpg?v=157063644335536742791670342491"
                                style={{
                                  backgroundImage:
                                    "url(//monarq.ch/cdn/shop/t/8/assets/background_700x.jpg?v=157063644335536742791670342491)",
                                }}
                              ></div>

                              <div className="card-product__picture-inner">
                                <div className="card-product__back">
                                  <div className="translate">
                                    <div
                                      className="lazy transition lazyloaded"
                                      data-bg="//monarq.ch/cdn/shop/products/beluga_bas_900x.png?v=1610059553"
                                      style={{
                                        backgroundImage:
                                          "url(//monarq.ch/cdn/shop/products/beluga_bas_900x.png?v=1610059553",
                                      }}
                                    ></div>
                                  </div>
                                </div>

                                <div className="card-product__front">
                                  <div className="translate">
                                    <div className="scale">
                                      <div
                                        className="lazy transition lazyloaded"
                                        data-instant=""
                                        data-bg="//monarq.ch/cdn/shop/products/beluga_top_900x.png?v=1610059553"
                                        style={{
                                          backgroundImage:
                                            "url(//monarq.ch/cdn/shop/products/beluga_top_900x.png?v=1610059553",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-product__foot">
                              <div className="card-product__price">
                                From SFr. 700.00
                              </div>
                              <span className="card-product__title">
                                Beluga
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="s-cross-sell__item">
                        <a
                          href="/en/products/oscietre"
                          className="card-product"
                        >
                          <div className="card-product__inner">
                            <div className="card-product__picture">
                              <div
                                className="card-product__bg cover lazy transition lazyloaded"
                                data-bg="//monarq.ch/cdn/shop/t/8/assets/background_700x.jpg?v=157063644335536742791670342491"
                                style={{
                                  backgroundImage:
                                    "url(//monarq.ch/cdn/shop/t/8/assets/background_700x.jpg?v=157063644335536742791670342491)",
                                }}
                              ></div>

                              <div className="card-product__picture-inner">
                                <div className="card-product__back">
                                  <div className="translate">
                                    <div
                                      className="lazy transition lazyloaded"
                                      data-bg="//monarq.ch/cdn/shop/products/beluga_bas_900x.png?v=1610059553"
                                      style={{
                                        backgroundImage:
                                          "url(//monarq.ch/cdn/shop/products/beluga_bas_900x.png?v=1610059553",
                                      }}
                                    ></div>
                                  </div>
                                </div>

                                <div className="card-product__front">
                                  <div className="translate">
                                    <div className="scale">
                                      <div
                                        className="lazy transition lazyloaded"
                                        data-instant=""
                                        data-bg="//monarq.ch/cdn/shop/products/beluga_top_900x.png?v=1610059553"
                                        style={{
                                          backgroundImage:
                                            "url(//monarq.ch/cdn/shop/products/beluga_top_900x.png?v=1610059553",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-product__foot">
                              <div className="card-product__price">
                                From SFr. 220.00
                              </div>
                              <span className="card-product__title">
                                Ossetra
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="s-cross-sell__item">
                        <a href="/en/products/baeri" className="card-product">
                          <div className="card-product__inner">
                            <div className="card-product__picture">
                              <div
                                className="card-product__bg cover lazy transition lazyloaded"
                                data-bg="//monarq.ch/cdn/shop/t/8/assets/background_700x.jpg?v=157063644335536742791670342491"
                                style={{
                                  backgroundImage:
                                    "url(//monarq.ch/cdn/shop/t/8/assets/background_700x.jpg?v=157063644335536742791670342491)",
                                }}
                              ></div>

                              <div className="card-product__picture-inner">
                                <div className="card-product__back">
                                  <div className="translate">
                                    <div
                                      className="lazy transition lazyloaded"
                                      data-bg="//monarq.ch/cdn/shop/products/beluga_bas_900x.png?v=1610059553"
                                      style={{
                                        backgroundImage:
                                          "url(//monarq.ch/cdn/shop/products/beluga_bas_900x.png?v=1610059553",
                                      }}
                                    ></div>
                                  </div>
                                </div>

                                <div className="card-product__front">
                                  <div className="translate">
                                    <div className="scale">
                                      <div
                                        className="lazy transition lazyloaded"
                                        data-instant=""
                                        data-bg="//monarq.ch/cdn/shop/products/beluga_top_900x.png?v=1610059553"
                                        style={{
                                          backgroundImage:
                                            "url(//monarq.ch/cdn/shop/products/beluga_top_900x.png?v=1610059553",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-product__foot">
                              <div className="card-product__price">
                                From SFr. 180.00
                              </div>
                              <span className="card-product__title">Baeri</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
