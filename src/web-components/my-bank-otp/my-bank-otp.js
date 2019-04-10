import { LitElement, html } from 'lit-element';
import { myBankOtpStyle } from './my-bank-otp-style';
import { ifDefined } from 'lit-html/directives/if-defined';
import "@material/mwc-button"


export class MyBankOtp extends LitElement {

    static get properties() {
        return {
            title: { type: String },
            value: { type: Number },
            maxLength: { type: Number, attribute:'max-length'}
        }
    }

    constructor() {
        super();
        this.value = 0;
        this.title = 'Lit Element';
    }

    render() {
        return html`
    <style>${myBankOtpStyle}</style>
    <h1>Made with ❤️ ️in ${this.title}</h1>
    </div>
    <input
    id="input"
    maxlength="${ifDefined(this.maxLength)}"
    autocomplete="off"
    class="input"
    type="input">
    <mwc-button @click="${() => this._checkAccess()}">Send Code</mwc-button>
    `;
    }

    _checkAccess() {
        this.dispatchEvent(new CustomEvent('send-pin', {
            bubbles: true,
            composed: true,
            detail: {
                accessKey: this.shadowRoot.querySelector('#input').value
            }
        }));
    }
}

// Register the element with the browser
customElements.define('my-bank-otp', MyBankOtp);