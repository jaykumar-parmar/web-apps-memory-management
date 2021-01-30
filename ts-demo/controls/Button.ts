export interface ButtonProperties {
    label: string;
    onClick: () => void;
}

export class Button {

    constructor(properties: ButtonProperties) {
        this._properties = properties;
        this.createView();
    }

    public get HTMLElement(): HTMLElement {
        return this._container;
    }

    public destroy(){
        this._container.onclick = null;
    }

    private createView() {

        this._container = document.createElement("button");
        this._container.innerText = this._properties.label;
        this._container.onclick = this._onClick.bind(this);
    }

    private _onClick() {
        this._properties.onClick();
    };

    private _properties: ButtonProperties;
    private _container: HTMLElement;
}