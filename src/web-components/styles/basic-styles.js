import { css } from 'lit-element';

export const basicStyles = css`
:host {
	display: block;
}

:host([hidden]), [hidden] {
  display: none;
}
`;
