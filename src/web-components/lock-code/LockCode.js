import { html, LitElement } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat.js';
import { lockCodeStyle } from './lock-code-style.js';

export class LockCode extends LitElement {

	static get properties() {
		return {
			label: { type: String },
			code: { type: String },
			key: { type: String },
		};
	}

	static get styles() {
		return lockCodeStyle;
	}

	render() {
		return html`
		<p class="caption-text">${this.label}</p>
		<div class="code">
			<div class="numbers">${this.renderKeys(this.code.split(''))}</div>
			${this.key ? html `<div class="button">${this.renderKeys([this.key])}</div>` : ''}
		</div>
		`;
	}

	constructor() {
		super();
		this.key = '↵';
	}

	renderKeys(keys) {
		return html`${repeat(keys, (key) => html`<span class="key">${key}</span>`)}`;
	}

}
