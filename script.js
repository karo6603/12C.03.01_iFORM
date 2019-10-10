"use strict";

let body = document.querySelector("body");
let popup = document.querySelector("#popup");
let ordernow = document.querySelector(".ordernow");
let selected_size = "";

ordernow.addEventListener("click", () => {
  togglePopup();
  openStepOne();
});

function togglePopup() {
  body.classList.toggle("popup_is_shown");
  openStepOne();
}

function selectSize(size) {
  let sizes = popup.querySelectorAll(".size");
  sizes.className = "size";
  size.classList.toggle("size_is_selected");
}

function openStepOne() {
  let template = `
        <div class="popup_wrapper">
            <h1 class="popup_header">ActiveFit fiberjakke</h1>
            <button class="popup_close">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.5" cy="11.5" r="11.5" fill="white"/>
                <line x1="1" y1="-1" x2="15.9706" y2="-1" transform="matrix(0.707107 0.707106 -0.707107 0.707106 5 6)" stroke="#73008F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="1" y1="-1" x2="15.9706" y2="-1" transform="matrix(0.707107 -0.707106 0.707107 0.707106 5.84851 18)" stroke="#73008F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
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
    size.addEventListener("click", function(event) {
      selectSize(size);
    });
  });
}

function openStepTwo() {
  let template = `
        <div class="popup_wrapper">
            <h1 class="popup_header">Vælg antal blade</h1>
            <button class="popup_go_back">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11.5" cy="11.5" r="11.5" fill="white"/>
                    <path d="M5.29289 11.2929C4.90237 11.6834 4.90237 12.3166 5.29289 12.7071L11.6569 19.0711C12.0474 19.4616 12.6805 19.4616 13.0711 19.0711C13.4616 18.6805 13.4616 18.0474 13.0711 17.6569L7.41421 12L13.0711 6.34315C13.4616 5.95262 13.4616 5.31946 13.0711 4.92893C12.6805 4.53841 12.0474 4.53841 11.6569 4.92893L5.29289 11.2929ZM18 11L6 11V13L18 13V11Z" fill="#73008F"/>
                </svg>
            </button>
            <button class="popup_close">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.5" cy="11.5" r="11.5" fill="white"/>
                <line x1="1" y1="-1" x2="15.9706" y2="-1" transform="matrix(0.707107 0.707106 -0.707107 0.707106 5 6)" stroke="#73008F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="1" y1="-1" x2="15.9706" y2="-1" transform="matrix(0.707107 -0.707106 0.707107 0.707106 5.84851 18)" stroke="#73008F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
            <div class="popup_magazines">
                <div class="magazine">
                    <div>
                        <h1>4 nr. for 149 kr.</h1>
                        <h2>spar 761 kr. </h2>
                    </div>
                    <button type="button" class="show_more">Se besparelse</button>
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
                <div class="magazine">
                    <div>
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
                <div class="magazine">
                    <div>
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

  magazines.forEach(function(magazine) {
    magazine.addEventListener("click", function(event) {
      magazine.classList.toggle("show_more_info");
    });
  });
}
