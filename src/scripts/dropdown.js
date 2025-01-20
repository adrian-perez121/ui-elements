// A class that takes a button, and its dropdown items in its constructor. 
// The goal of this class is that gives the proper "drop down" functionality to the button

export class DropDown {
  constructor(btn, items) {
    this.btn = btn;
    this.items = items;

    this.btn.addEventListener("click", this.toggleHide);
  }

  toggleHide = () => {
    this.items.classList.toggle("hide");
  };
}
