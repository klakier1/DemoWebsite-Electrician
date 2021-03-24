export default class AddStyleOnScroll {
  constructor(queryElement, style) {
    //get element and store
    this._element = this._getElement(queryElement);
    //store style
    this._style = style;
    //add callback
    document.addEventListener("scroll", this._callback);
  }

  /**
   * @param {string} queryElement
   * @returns {Element}
   */
  _getElement = (queryElement) => document.querySelector(queryElement);

  _callback = () => {
    //if scroll pass trigger value
    if (this._element.getBoundingClientRect().top - window.innerHeight <= 0) {
      //add style
      this._element.style = this._style;
      //after animation executed, delete callback
      document.removeEventListener("scroll", this._callback);
    }
  };
}
