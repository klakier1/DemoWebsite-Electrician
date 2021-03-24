export default class AddStyleOnScroll {
  constructor(queryElement, style) {
    //get element and store
    this._element = this._getElement(queryElement);
    //store style
    this._style = style;
    //trigger value
    this._animStart =
      this._element.offsetTop - this._element.scrollHeight + window.innerHeight;

    document.addEventListener("scroll", this._callback);
  }

  _getElement = (queryElement) => document.querySelector(queryElement);

  _callback = () => {
    console.log(this._element, "obecny");
    //if scroll pass trigger value
    if (this._animStart <= window.scrollY) {
      //add style
      this._element.style = this._style;
      //after animation executed, delete callback
      document.removeEventListener("scroll", this._callback);
    }
  };
}
