const FooterContent = `
  <style>
   
    font-family: "ClobberGroteskW01-Medium";
src: url("//db.onlinewebfonts.com/t/f4e31ff864f4297e98cd95bd1d07fd7b.eot");
src: url("//db.onlinewebfonts.com/t/f4e31ff864f4297e98cd95bd1d07fd7b.eot?#iefix")
    format("embedded-opentype"),
  url("//db.onlinewebfonts.com/t/f4e31ff864f4297e98cd95bd1d07fd7b.woff2")
    format("woff2"),
  url("//db.onlinewebfonts.com/t/f4e31ff864f4297e98cd95bd1d07fd7b.woff")
    format("woff"),
  url("//db.onlinewebfonts.com/t/f4e31ff864f4297e98cd95bd1d07fd7b.ttf")
    format("truetype"),
  url("//db.onlinewebfonts.com/t/f4e31ff864f4297e98cd95bd1d07fd7b.svg#ClobberGroteskW01-Medium")
    format("svg");

font-family: "grifterbold";
src: url("https://beta-supercruisr.neocities.org/assets/css/grifterbold-webfont.woff2")
    format("woff2"),
  url("https://beta-supercruisr.neocities.org/assets/css/grifterbold-webfont.woff")
    format("woff");
font-weight: normal;
font-style: normal;


/* Typography */
.title {
  font-family: ClobberGroteskW01-Medium;
  font-style: normal;
  font-weight: bold;
  font-size: 3em;
}

.lead {
  font-family: ClobberGroteskW01-Medium;
  font-style: normal;
  font-weight: bold;
  font-size: 1.75em;
  line-height: 140%;
}

.paragraph,
.small,
.link,
.error {
  font-family: ClobberGroteskW01-Medium;
  font-style: normal;
  font-weight: normal;
  line-height: 140%;
}

.paragraph {
  font-size: 1em;
}

.small {
  font-size: 0.875em;
}

.link {
  color: var(--link-color);
  text-decoration: none;
  font-weight: bold;
}

.error {
  font-style: italic;
  font-size: 1em;
  color: #df0000;
}

/* Buttons */
.primary-button,
.secondary-button,
.passive-button {
  display: inline-block;
  font-family: ClobberGroteskW01-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
  line-height: 1.25em;
  height: 3.5em;
  border: none;
  border: 1px solid #111;
  box-sizing: border-box;

  padding: 1em 1.25em;
  margin: 1.875em 0;
  text-decoration: none;
  color: #111;
  cursor: pointer;
}

.primary-button:active,
.secondary-button:active,
.passive-button:active {
  transform: translateY(4px);
}

.primary-button {
  background: transparent;
}

.primary-button:hover {
  background: transparent;
}

.secondary-button {
  background: transparent;
}

.secondary-button:hover {
  background: transparent;
}

.passive-button {
  background: transparent;
}

.passive-button:hover {
  background: transparent;
}

.cursor-pointer {
  cursor: pointer;
}

/* body */
body {
  margin: 0;
}

hr {
  margin: 2.25em 0.625em;
  border: 1px solid var(--passive-color);
}



page-footer {
  position: absolute;
  
  width: 100%;
}


.pages-content {
  font-family: Source Sans Pro;
  padding: 4em 12vw;
}

.pages-content-container {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2em;
}

.pages-content-element {
  width: 50%;
  padding: 1em;
  max-width: 30em;
  margin-right: 1em;
}

/* TODO: move this to location.css */
.pages-content-element .lead {
  margin-top: 0;
}

/* TODO: move this to location.css */
.pages-content-container:first-of-type {
  margin-bottom: 2.25em;
}

/* TODO: resolve duplicate conflict. move this to the back-anchor component. */
.back-anchor {
  padding: 1em 0em;
  height: 3rem;
}
.coordinates-input-wrapper {
  margin-bottom: 1rem;
}

.back-anchor {
  padding: 1em;
  font-size: 1em;
}

/* TODO: move .coordinates-input-container to location.css */
.coordinates-input-container {
  width: 50%;
  display: flex;
  margin-bottom: 1em;
}

.coordinates-input-container .input-number-tags {
  padding-left: 0;
}

.add-location-container {
  width: fit-content;
  cursor: pointer;
}

.coordinates-input-container > div {
  padding: 1rem;
  display: flex;
  width: 50%;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: justify;
}

.delete-coordinates-container > svg {
  margin-top: 2.5rem;
}

.remove-location-container {
  display: flex;
  cursor: pointer;
}

.add-location-container {
  display: flex;
}

.add-location-icon {
  margin-right: 0.4rem;
}

.input-container label {
  font-family: Source Sans Pro;
  font-size: 0.875rem;
}

.map-buttons-container {
  display: flex;
  justify-content: space-between;
}

.text-input {
  border: 1px solid var(--passive-color-dark);
  box-sizing: border-box;
  border-radius: 5px;
  height: 3.125rem;
  padding: 1rem 1.25rem;
  font-family: Source Sans Pro;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

input:focus {
  outline: none;
}

#content-preview {
  display: flex;
  flex-direction: column;
}

.download-default-marker {
  display: flex;
  vertical-align: middle;
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
}

.beta {
  font-family: Source Sans Pro;
  margin-top: 5em;
  background-color: #fff700;
  padding: 1em;
}

.repo-url {
  font-size: 1.25em;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding-right: 2em;
}

@keyframes blink {
  50% {
    color: transparent;
  }
}
.loader__dot {
  animation: 1s blink infinite;
}
.loader__dot:nth-child(2) {
  animation-delay: 250ms;
}
.loader__dot:nth-child(3) {
  animation-delay: 500ms;
}

/* Responsive */
@media screen and (max-width: 900px) {
  /* Typography */
  .title {
    font-size: 2.5em;
  }

  .pages-content-container {
    flex-direction: column;
  }
  .pages-content-element {
    width: 100%;
  }
}
 #footer{
      padding: 4em 12vw;  

          }

  </style>

  <div>
    <div id="footer">
    <p class="lead">
      3. Export the project
    </p>

    <p class="paragraph">
        Your project is going to be safely hosted on GitHub - a space for code repositories online.
    </p>
    <p class="paragraph">
    If you would like to save your project locally, you can also download the package containing the generated code and all supporting files.
    </p>

    <div class="buttons">
      <button id="github-publish" disabled class="primary-button publish-disabled">
        Publish on Github
      </button>

      <button id="zip-publish" disabled class="passive-button publish-disabled">
        Download package
      </button>
    </div>
    </div>
  </div>`;

class PageFooter extends HTMLElement {
  shadow = null;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = FooterContent;
  }
}

customElements.define("page-footer", PageFooter);
