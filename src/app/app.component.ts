import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  prevEl: HTMLElement;

  rowFirstCellClick(e): void {
    let currentEl: HTMLElement = (e.target as HTMLElement)
      .parentElement as HTMLElement;

    if (this.prevEl && currentEl) {
      if (
        this.prevEl.getAttribute("class") === currentEl.getAttribute("class")
      ) {
        currentEl.style.backgroundColor = "";
        this.prevEl.style.backgroundColor = "";
        this.prevEl = null;
        return;
      }
    }

    if (this.prevEl) {
      this.prevEl.style.backgroundColor = "";
      currentEl.style.backgroundColor = "blue";
      this.prevEl = currentEl;
    } else {
      currentEl.style.backgroundColor = "blue";
      this.prevEl = currentEl;
    }
  }
}
