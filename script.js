"use strict";

let body = document.querySelector("body");
let popup = document.querySelector("#popup");
let ordernow = document.querySelector(".ordernow");
let selected_size = "";
let magazine_number = "";

ordernow.addEventListener("click", () => {
  togglePopup();
});

function togglePopup() {
  body.classList.toggle("popup_is_shown");
  openStepOne();
}

function selectSize(size) {
  selected_size = size.textContent;
  size.classList.toggle("size_is_selected");
  console.log(selected_size);
}

function openStepOne() {
  let template = `
        <div class="popup_wrapper">
            <div class="popup_header"><h1>ActiveFit fiberjakke</h1>
            <button class="popup_close">
                <img src="assets/close.svg" alt="close_button">
            </button>
            </div>
            <img src="assets/activefit_jakke.png" alt="jacket"> 
            <h2 class="popup_pick_size">Vælg størrelse</h2>
            <div class="popup_sizes">
                <div class="size"><div>S</div></div>
                <div class="size"><div>M</div></div>
                <div class="size"><div>L</div></div>
                <div class="size"><div>XL</div></div>               
            </div>
            <button class="popup_go_further">Videre</button>
        </div>`;
  popup.innerHTML = template;
  popup.querySelector(".popup_close").addEventListener("click", togglePopup);
  popup
    .querySelector(".popup_go_further")
    .addEventListener("click", openStepTwo);

  let sizeselection = popup.querySelectorAll(".size");

  sizeselection.forEach(function(size) {
    size.addEventListener("click", () => {
      selectSize(size);
    });
  });
}

function openStepTwo() {
  let template = `
        <div class="popup_wrapper">
        <div class="popup_header"><h1>Vælg antal blade</h1>
            <button class="popup_close">
                <img src="assets/close.svg" alt="close_button">
            </button>
            </div>
            
            <button class="popup_go_back">
                <img src="assets/go_back.svg" alt="go_back">
            </button>
            
            <div class="popup_magazines">
                <div class="magazine" value="4">
                    <div>
                    <h3></h3>
                        <h1>4 nr. for 149 kr.</h1>
                        <h2>spar 761 kr. </h2>
                    </div>
                    <button type="button" class="show_more"></button>
                    <div class="content">
                    <table>
                            <tr>
                                <td class="description">4 nr. af iFORM (normalpris pr. stk. 77,50 kr.)</td>
                                <td class="value">310 kr.</td>
                            </tr>
                            <tr>
                                <td class="description">ActiveFit fiberjakke</td>
                                <td class="value">600 kr.</td>
                            </tr>
                            <tr>
                                <td class="description">Værdi</td>
                                <td class="value">910 kr.</td>
                            </tr>
                            <tr>
                                <td class="description">Rabat</td>
                                <td class="value">-761 kr.</td>
                            </tr>
                            <tr>
                                <td class="description">Din specialpris</td>
                                <td class="value">149 kr.</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="magazine" value="6">
                    <div>
                    <h3>Mest populære</h3>
                        <h1>6 nr. for 199 kr.</h1>
                        <h2>spar 866 kr.</h2>
                    </div>
                    <button type="button" class="show_more">Se besparelse</button>
                    <div class="content">
                        <table>
                            <tr>
                                <td class="description">6 nr. af iFORM (normalpris pr. stk. 77,50 kr.)</td>
                                <td class="value">465 kr.</td>
                            </tr>
                            <tr>
                                <td class="description">ActiveFit fiberjakke</td>
                                <td class="value">600 kr.</td>
                            </tr>
                            <tr>
                                <td class="description">Værdi</td>
                                <td class="value">1065 kr.</td>
                            </tr>
                            <tr>
                                <td class="description">Rabat</td>
                                <td class="value">-866 kr.</td>
                            </tr>
                            <tr>
                                <td class="description">Din specialpris</td>
                                <td class="value">199 kr.</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="magazine" value="8">
                    <div>
                    <h3></h3>
                        <h1>8 nr. for 299 kr.</h1>
                        <h2>spar 921 kr.<h2>
                    </div>
                    <button type="button" class="show_more">Se besparelse</button>
                    <div class="content">
                    <table>
                    <tr>
                        <td class="description">8 nr. af iFORM (normalpris pr. stk. 77,50 kr.)</td>
                        <td class="value">620 kr.</td>
                    </tr>
                    <tr>
                        <td class="description">ActiveFit fiberjakke</td>
                        <td class="value">600 kr.</td>
                    </tr>
                    <tr>
                        <td class="description">Værdi</td>
                        <td class="value">1220 kr.</td>
                    </tr>
                    <tr>
                        <td class="description">Rabat</td>
                        <td class="value">-921 kr.</td>
                    </tr>
                    <tr>
                        <td class="description">Din specialpris</td>
                        <td class="value">299 kr.</td>
                    </tr>
                </table>
                    </div>
                </div>             
            </div>
            <button class="popup_go_further">Gå til kurv</button
        </div>`;
  popup.innerHTML = template;
  popup.querySelector(".popup_close").addEventListener("click", togglePopup);
  popup.querySelector(".popup_go_back").addEventListener("click", openStepOne);

  let magazines = popup.querySelectorAll(".magazine");

  magazines.forEach(magazine => {
    magazine.addEventListener("click", () => {
      //   magazines.classList.remove("chosen");

      let open = magazine.classList.contains("chosen");

      if (open) {
        magazine.classList.remove("chosen");
      } else {
        magazine.classList.add("chosen");

        magazine_number = magazine.getAttribute("value");

        console.log(magazine_number);
      }

      magazine.classList.toggle("show_more_info");

      magazine.querySelector(".show_more").textContent = `${
        open ? "Se besparelse" : "Luk besparelse"
      }`;
      magazine.querySelector("h3").textContent = `${open ? "" : "Dit valg"}`;
    });
  });
}
