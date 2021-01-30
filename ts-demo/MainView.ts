import { Button } from "controls/Button";
import { ModalDialog } from "controls/ModalDialog";


export class MainView {

    constructor() {
        this._container = document.getElementById("container");
        this.createView();
    }

    private createView() {
        this._button = new Button({ label: "Show Dialog", onClick: () => { this.showDialog() } });
        this._container.appendChild(this._button.HTMLElement);
    }

    private showDialog() {
        this._modal = new ModalDialog(2);
        this._modal.show();
    }

    private _modal: ModalDialog;
    private _container: HTMLElement;
    private _button: Button;
}