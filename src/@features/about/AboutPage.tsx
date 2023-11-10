import React from "react";

function AboutPage() {
  return (
    <>
      <div id="shopify-section-about" className="shopify-section">
        <div className="s-about">
          <div className="s-about__hero wrapper">
            <h1 className="s-about__title js-page-title">
              Immerse yourself
              <span className="xl:text-right">in where it all began.</span>
            </h1>
            <div className="s-about__intro-text js-transition-text"></div>
            <div className="s-about__bg">
              <div className="cover overflow-hidden js-page-about-illu">
                <div
                  className="cover trigger js-app-style"
                  data-style="transform: scale(<%= it.ratio(it.i, -0.6, 0.6, 1, 1.1) %>)"
                  style={{ transform: "scale(1.1)" }}
                >
                  <div
                    className="bg md:hidden lazy lazyload js-preload"
                    data-instant
                    data-bg="//monarq.ch/cdn/shop/files/bg-small_800x.progressive.jpg?v=1614319825"
                  ></div>

                  <div
                    className="bg hidden md:block xl:hidden lazy lazyload js-preload"
                    data-instant
                    style={{
                      backgroundImage:
                        "url('//monarq.ch/cdn/shop/files/bg-medium_1_2048x.progressive.jpg?v=1614258634')",
                    }}
                  ></div>

                  <div
                    className="bg hidden xl:block lazy lazyload js-preload"
                    data-instant
                    style={{
                      backgroundImage:
                        "url('//monarq.ch/cdn/shop/files/bg-medium_1_2048x.progressive.jpg?v=1614258634')",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="s-about__overlap-illustration">
              <div
                className="relative overflow-hidden trigger js-app-style"
                data-style="transform: translate3d(0, <%= it.ratio(it.i, -0.2, 1.2, -60, 60) %>px, 0);"
              >
                <img
                  className="cover lazy lazyload"
                  src="https://monarq.ch/cdn/shop/files/monarq_1_a873e64d-3487-4f7c-8515-0462412df508_3000x.png?v=1632154175"
                />
              </div>
            </div>
          </div>

          <div className="s-about__first-section wrapper">
            <div className="s-about__section-inner">
              <h2 className="s-about__section-title">History of the brand</h2>
              <div className="s-about__section-text">
                <p>
                  Born in 2017, Monarq Caviar is above all the story of a
                  meeting between an entrepreneur and a producer who are both
                  passionate about it. One connoisseur of caviar based in
                  Switzerland, the other craftsman committed to the history of
                  Bulgarian breeding which is one of the first sturgeon
                  breeding. It is through exchange, openness and listening that
                  a collaboration emerged and that Monarq Caviar was able to
                  come to life. Behind Monarq is a dedicated and mobilized team
                  to support its customers in choosing the most refined dishes.
                </p>
                <p>
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className="s-about__section--left s-about__second-section wrapper">
            <div className="schema">
              <div className="md:hidden">
                <img
                  className="lazy lazyload"
                  src="//monarq.ch/cdn/shop/files/monarq_1_a873e64d-3487-4f7c-8515-0462412df508_900x.png?v=1632154175 750w, //monarq.ch/cdn/shop/files/monarq_1_a873e64d-3487-4f7c-8515-0462412df508_2000x.png?v=1632154175 1000w, //monarq.ch/cdn/shop/files/monarq_1_a873e64d-3487-4f7c-8515-0462412df508_3000x.png?v=1632154175 1500w"
                />
              </div>
              <div className="hidden md:block xl:hidden">
                <img
                  className="lazy lazyload"
                  src="//monarq.ch/cdn/shop/files/map-medium_2000x.jpg?v=1614317377 1000w"
                />
              </div>
              <div className="hidden xl:block">
                <img
                  className="lazy lazyload transition"
                  src="//monarq.ch/cdn/shop/files/map-large_3000x.jpg?v=1614317377 1500w"
                />
              </div>
              <div className="overlay">
                <div>
                  <span></span>
                  <p>Based in switzerland</p>
                </div>
                <div>
                  <span></span>
                  <p>Produced in Bulgaria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="s-about__third-section wrapper">
            <div className="illu1">
              <div
                className="relative overflow-hidden trigger js-app-style"
                data-style="transform: translate3d(0, <%= it.ratio(it.i, .5, 1.5, -40, 40) %>px, 0);"
              >
                <img
                  className="cover lazy lazyload"
                  src="//monarq.ch/cdn/shop/files/esturgeon_900x.png?v=1635786193 750w, //monarq.ch/cdn/shop/files/esturgeon_2000x.png?v=1635786193 1000w, //monarq.ch/cdn/shop/files/esturgeon_3000x.png?v=1635786193 1500w"
                />
              </div>
            </div>

            <div className="s-about__quote">
              <div className="s-about__quote-text">
                <p>
                  “Caviar has been popular since antiquity and still retains its
                  uniqueness and prestige today. The delicacy of its taste
                  deserves to be shared.”
                </p>
              </div>

              <div className="s-about__quote-foot">
                <div className="s-about__quote-signature">
                  <div>
                    <img
                      className="cover lazy lazyload transition"
                      src="//monarq.ch/cdn/shop/files/LogoMonarq_300x.png?v=1614319365 750w"
                    />
                  </div>
                </div>

                <div className="s-about__quote-sep"></div>

                <div className="s-about__quote-portrait">
                  <div className="relative w-m h-m mr-16 rounded-half overflow-hidden">
                    <img
                      className="cover lazy lazyload transition"
                      src="//monarq.ch/cdn/shop/files/C43015DE-4CAA-445E-AC5C-9D08CA2E4279_1_201_a_96x.jpg?v=1636043055 750w"
                    />
                  </div>
                  <div>
                    <div className="s-about__quote-author">David hirsch</div>
                    <div className="s-about__quote-position">CEO, Founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
