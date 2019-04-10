import { css } from 'lit-element';
import { basicStyles } from '../styles/basic-styles.js';

export const lockCodeStyle = [
	basicStyles,
	css`
		:host {
		--caption-color: var(--lock-code-caption-color, white);
		--key-number-color: var(--lock-code-key-number-color, white);
		--key-number-background: var(--lock-code-key-number-background, black);
		--key-button-color: var(--lock-code-key-button-color, black);
		--key-button-background: var(--lock-code-key-button-background, gold);
	}

	.caption {
		color: var(--caption-color);
	}

	.code {
		display: flex;
		justify-content: center;
	}

	.key {
		display: inline-block;
		width: 2em;
		height: 2em;
		line-height: 2em;
		border-radius: 50%;
		background: var(--key-number-background);
		color: var(--key-number-color);
		font-weight: 900;
		box-shadow:
			inset 1px 3px 2px rgba(255, 255, 255, 0.3),
			1px 2px 2px 3px rgba(0,0,0,0.3);
		cursor: pointer;
	}
	.key:hover {
		box-shadow:
			inset -1px -3px 3px rgba(255, 255, 255, 0.3),
			0px -1px 1px rgba(0, 0, 0, 0.3);
	}
	.numbers .key {
		margin-right: 0.2em;
	}
	.button .key {
		background: var(--key-button-background);
		color: var(--key-button-color);
	}
	`
];
