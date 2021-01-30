import { Button } from "./Button";

export class ModalDialog {

    constructor(buttonCount: number) {
        this.createView(buttonCount);
    }

    public get HTMLElement(): HTMLElement {
        return this._container;
    }

    public show() {
        this._container.style.display = "block";
        document.body.appendChild(this._container);
    }

    public hide() {
        this._container.style.display = "none";
        document.body.removeChild(this._container);

        this._b1.destroy();
        this._b2.destroy();

        this._b1 = null;
        this._b2 = null;
    }


    private createView(buttonCount: number) {

        this._container = document.createElement("div");
        this._container.classList.add("modal");

        this._modelContent = document.createElement("div");
        this._modelContent.classList.add("modal-content");

        this._b1 = new Button({ label: "Ok", onClick: () => { this.hide() } });
        this._b2 = new Button({ label: "Cancel", onClick: () => { this.hide() } });

        this._modelContent.appendChild(this._b1.HTMLElement);
        this._modelContent.appendChild(this._b2.HTMLElement);

        this._container.appendChild(this._modelContent);
    }

    private _b1: Button;
    private _b2: Button;
    private _modelContent: HTMLElement;
    private _container: HTMLElement;
}