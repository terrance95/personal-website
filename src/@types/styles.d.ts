import { SxStyleProp } from 'theme-ui';

declare global {
	export type StyleTypes = {
		[index: string]: SxStyleProp;
	};
}
