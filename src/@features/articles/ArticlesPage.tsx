function ArticlesPage() {
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
    <>
      <div className="page header-padded p-article">
        <div className="p-article__header">
          <div className="p-article__head">
            <div className="p-article__date">
              Posted on 23 January 2022
              <span className="sep" />{" "}
            </div>
            <div className="p-article__title uppercase">
              French toast, truffle and Monarq Ossetra caviar
            </div>
          </div>
          <div className="p-article__image-wrap">
            <div className="p-article__image">
              <div className="cover hidden lg:block xl:hidden">
                <img
                  className="lazy transition lazyloaded"
                  data-srcset="//monarq.ch/cdn/shop/articles/5a4e8d66-01bb-4cb3-ab08-d0c8df15297e_1888x1320_crop_center.progressive.jpg?v=1638181284 1024w"
                  alt=""
                  srcSet="//monarq.ch/cdn/shop/articles/5a4e8d66-01bb-4cb3-ab08-d0c8df15297e_1888x1320_crop_center.progressive.jpg?v=1638181284 1024w"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="shopify-section-article" className="shopify-section">
          <section className="section section--full">
            <div className="p-article__content-wrapper">
              <div className="p-article__content wysiwyg wysiwyg--article">
                <p>Ingredients to serve four</p>{" "}
                <ul>
                  {" "}
                  <li>Brioche – 500 g</li> <li>Butter – 60 g</li> <li>1 egg</li>{" "}
                  <li>Milk – 100 g</li> <li>Brown sugar – 50 g</li>{" "}
                  <li>Cream – 50 ml</li> <li>Seasonal truffle</li>{" "}
                  <li>Monarq Ossetra caviar – 125 g or 250 g</li>{" "}
                </ul>{" "}
                <p> </p> <p>Instructions</p> <p>For the soaked brioche:</p>{" "}
                <ol>
                  {" "}
                  <li>
                    Cut the brioche into even slices of around 125 grams and dry
                    it out for around one to two hours.
                  </li>{" "}
                  <li>
                    In a mixing bowl, mix the milk, cream, egg and 30 grams of
                    sugar.
                  </li>{" "}
                  <li>
                    Soak the brioche pieces in this mixture for 1 minute and
                    then fry them on both sides with 20 grams of butter and the
                    remaining brown sugar.
                  </li>{" "}
                </ol>{" "}
                <p>For the truffle butter:</p>{" "}
                <ol>
                  {" "}
                  <li>
                    Whisk 40 grams of butter with around 40 grams of grated or
                    finely chopped truffle.
                  </li>{" "}
                  <li>Season with sugar and salt.</li>{" "}
                </ol>{" "}
                <p>Assembly:</p>{" "}
                <ol>
                  {" "}
                  <li>
                    {" "}
                    Reheat the brioche in the oven and, once warm, brush it with
                    the truffle butter.{" "}
                  </li>{" "}
                  <li>Grate a few pieces of fresh truffle.</li>{" "}
                  <li>
                    Garnish with a generous amount of Monarq Ossetra caviar.
                  </li>{" "}
                </ol>{" "}
                <meta charSet="utf-8" />{" "}
                <p>
                  <span>Recipe by </span>
                  <a
                    href="https://www.instagram.com/jacoporomagnoli/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jacopo Romagnoli
                  </a>
                  <span>, Chef du restaurant </span>
                  <a
                    href="https://www.instagram.com/cafedelaplage_gtg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Café de la plage
                  </a>
                  <span> au Grande théâtre de Genève</span>
                </p>
              </div>
            </div>
          </section>
        </div>{" "}
        <div className="social-sharing" js-share>
          <p className="social-sharing__title">Partager l’article</p>
          <ul>
            <li>
              <a
                target="_blank"
                href="//www.facebook.com/sharer.php?u=https://monarq.ch/en/blogs/articles/pain-perdu-truffe-caviar-monarq-oscietre"
                title="Share on Facebook"
                data-pop="true"
              >
                <span>FB</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="//twitter.com/share?text=French%20toast,%20truffle%20and%20Monarq%20Ossetra%20caviar&url=https://monarq.ch/en/blogs/articles/pain-perdu-truffe-caviar-monarq-oscietre"
                title="Share on Twitter"
              >
                <span>TW</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://web.whatsapp.com/send?text=https://monarq.ch/en/blogs/articles/pain-perdu-truffe-caviar-monarq-oscietre"
                title="Share on WhatsApp"
              >
                <span>WA</span>
              </a>
            </li>
          </ul>
        </div>{" "}
        <div id="shopify-section-range" className="shopify-section">
          <section className="section section--full s-range">
            <div className="section-scale">
              <div className="section__inner s-range__inner section-animate">
                <div className="s-range__illu">
                  <img
                    src="//monarq.ch/cdn/shop/files/home-1_200x.png?v=1614315099"
                    style={{ width: "150px" }}
                    alt=""
                  />
                </div>
                <h2 className="s-range__title">Les caviars Monarq</h2>
                <div className="s-range__text">
                  <p>
                    Découvrez notre gamme exceptionnelle de Caviar pour vos
                    recettes.{" "}
                  </p>
                </div>
                <div className="s-range__products">
                  <img
                    className="lazy lazyload transition"
                    data-srcset="//monarq.ch/cdn/shop/files/Beluga-92x92-250g_Plan_de_travail_1_1_360x.png?v=1614322828"
                  />
                  <img
                    className="lazy lazyload transition"
                    data-srcset="//monarq.ch/cdn/shop/files/Oscietre-92x92-250g_Plan_de_travail_1_1_360x.png?v=1614322828"
                  />
                  <img
                    className="lazy lazyload transition"
                    data-srcset="//monarq.ch/cdn/shop/files/Sevruga-92x92-250g_Plan_de_travail_1_1_360x.png?v=1614322828"
                  />
                  <img
                    className="lazy lazyload transition"
                    data-srcset="//monarq.ch/cdn/shop/files/Baeri-92x92-250g_Plan_de_travail_1_1_360x.png?v=1614322828"
                  />
                </div>
                <div className="s-range__cta">
                  <a
                    href="#shop"
                    className="btn btn--large js-page-shop no-transition"
                  >
                    <span>
                      <span>Découvrir nos Caviars</span>
                      <span aria-hidden>Découvrir nos Caviars</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>{" "}
        <div id="shopify-section-see-also" className="shopify-section">
          <section className="section section--full s-see-also">
            <div className="section__inner s-see-also__inner">
              <div className="s-see-also__title section-scale">
                <h2 className="section-animate">
                  Autres articles susceptibles de vous intéresser:
                </h2>
              </div>
              <div className="s-see-also__articles">
                <div className="w-full" js-drag>
                  <div className="s-see-also__content js-drag-track">
                    <div className="s-see-also__item">
                      <a
                        href="/en/blogs/articles/pain-perdu-truffe-caviar-monarq-oscietre"
                        className="card-article card-article--tall"
                      >
                        <div className="card-article__inner">
                          <div className="card-article__picture">
                            <div
                              className="cover lazy transition lazyloaded"
                              data-bg="//monarq.ch/cdn/shop/articles/IMG_20211210_182728_158_copy_900x1200_crop_center.progressive.jpg?v=1639566074"
                              style={{
                                backgroundImage:
                                  "url(//monarq.ch/cdn/shop/articles/IMG_20211210_182728_158_copy_900x1200_crop_center.progressive.jpg?v=1639566074",
                              }}
                            ></div>
                          </div>

                          <div className="card-article__foot">
                            <div className="card-article__date">
                              Posted on 23 January 2022
                            </div>
                            <span className="card-article__title">
                              French toast, truffle and Monarq Ossetra caviar
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="s-see-also__item">
                      <a
                        href="/en/blogs/articles/tartare-de-boeuf-avec-espuma-de-pomme-de-terre"
                        className="card-article card-article--tall"
                      >
                        <div className="card-article__inner">
                          <div className="card-article__picture">
                            <div
                              className="cover lazy transition lazyloaded"
                              data-bg="//monarq.ch/cdn/shop/articles/IMG_20211213_191948_707_copy_900x1200_crop_center.progressive.jpg?v=1639563092"
                              style={{
                                backgroundImage:
                                  "url(//monarq.ch/cdn/shop/articles/IMG_20211213_191948_707_copy_900x1200_crop_center.progressive.jpg?v=1639563092",
                              }}
                            ></div>
                          </div>
                          <div className="card-article__foot">
                            <div className="card-article__date">
                              Posted on 15 December 2021
                            </div>
                            <span className="card-article__title">
                              Tartare de boeuf avec Espuma de pomme de terre
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="s-see-also__item">
                      <a
                        href="/en/blogs/articles/filet-de-boeuf-sur-brioche-francaise"
                        className="card-article card-article--tall"
                      >
                        <div className="card-article__inner">
                          <div className="card-article__picture">
                            <div
                              className="cover lazy transition lazyloaded"
                              data-bg="//monarq.ch/cdn/shop/articles/5a4e8d66-01bb-4cb3-ab08-d0c8df15297e_900x1200_crop_center.progressive.jpg?v=1638181284"
                              style={{
                                backgroundImage:
                                  "url(//monarq.ch/cdn/shop/articles/5a4e8d66-01bb-4cb3-ab08-d0c8df15297e_900x1200_crop_center.progressive.jpg?v=1638181284)",
                              }}
                            ></div>
                          </div>
                          <div className="card-article__foot">
                            <div className="card-article__date">
                              Posted on 15 December 2021
                            </div>
                            <span className="card-article__title">
                              Filet de boeuf sur brioche française
                            </span>
                          </div>
                        </div>
                      </a>
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

export default ArticlesPage;
