import React from "react";

function ContactPage() {
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
    <div id="shopify-section-contact" className="shopify-section">
      <section className="section s-contact">
        <div className="section__inner s-contact__inner section-scale">
          <div className="section-animate">
            <h1 className="s-contact__title">Contact us</h1>

            <div className="s-contact__group s-contact__group--first">
              <h2 className="s-contact__subtitle">Customer support</h2>
              <div className="s-contact__text">
                <p>
                  {" "}
                  Visit our FAQs section or contact our team using the{" "}
                  <a href="#intercom">online chat function</a>. Our team will
                  respond to your questions as soon as possible (GMT+1, Geneva
                  time).{" "}
                </p>
              </div>
            </div>

            <div className="s-contact__group s-contact__group--second">
              <h2 className="s-contact__subtitle">
                Professionals – hospitality
              </h2>
              <div className="s-contact__text">
                <p>
                  For any enquiries concerning starting a professional
                  relationship, please contact our commercial team.{" "}
                </p>
                <p>
                  <a
                    href="mailto:sales@monarq.ch"
                    title="mailto:sales@monarq.ch"
                  >
                    service@monarq.ch
                  </a>{" "}
                </p>
                <p>Or by phone</p>
                <p>
                  <a href="tel:+41%2079 230 69 39" title="tel:+419651010">
                    +41 79 965 10 10
                  </a>
                </p>
              </div>
            </div>

            <div className="s-contact__list">
              <div className="s-contact__subgroup">
                <h2 className="s-contact__subtitle">General</h2>
                <div className="s-contact__text">
                  <p>
                    <a
                      href="mailto:sales@monarq.ch"
                      title="mailto:sales@monarq.ch"
                    >
                      service@monarq.ch
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
