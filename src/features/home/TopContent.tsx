import React from "react";

function TopContent() {
  return (
    <div id="shopify-section-1601901483148" className="shopify-section">
      <div className="section intro">
        <div className="scale">
          <div className="translate">
            <div className="intro__inner">
              <div className="intro__content trigger">
                <div
                  className="trigger js-app-style"
                  data-style="opacity: <%= it.ratio(it.s, 0, 450, 1, .3) %>;"
                >
                  <div className="intro__title js-page-title">
                    <p>
                      A festive dish<em> &</em> artisanal <br />
                      discover the universe<em>from</em> <br />
                      Monarq caviar.<em></em>
                    </p>
                  </div>

                  <div className="intro__icons">
                    <div className="intro__icon intro__icon--first">
                      <img
                        src="//monarq.ch/cdn/shop/files/home-1_280x.png?v=1614315099"
                        alt=""
                      />
                    </div>
                    <div className="intro__icon intro__icon--second">
                      <img
                        src="//monarq.ch/cdn/shop/files/home-2_600x.png?v=1614315099"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopContent;
