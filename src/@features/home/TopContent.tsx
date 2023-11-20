import React from "react";
import { useTranslation } from "react-i18next";

function TopContent() {
  const { t, i18n } = useTranslation();

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
                      {t("title1_1")}
                      <em> {t("title1_2")}</em> {t("title1_3")} <br />
                      {t("title1_4")}
                      <em>{t("title1_5")}</em> <br />
                      {t("title1_6")}
                      <em></em>
                    </p>
                  </div>

                  <div
                    className="intro__icons"
                    style={{
                      animationName: "smoothIntroAnimation",
                      animationDuration: "4s",
                    }}
                  >
                    <div
                      className="intro__icon intro__icon--first"
                      style={{
                        animationName: "smoothIntroAnimation",
                        animationDuration: "4s",
                      }}
                    >
                      <img
                        src="//monarq.ch/cdn/shop/files/home-1_280x.png?v=1614315099"
                        alt=""
                      />
                    </div>
                    <div
                      className="intro__icon intro__icon--second"
                      style={{
                        animationName: "smoothIntroAnimation",
                        animationDuration: "4s",
                      }}
                    >
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
