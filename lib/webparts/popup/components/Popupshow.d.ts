import * as React from 'react';
import type { IPopupshowProps } from './IPopupshowProps';
export interface IPopupshowState {
    isModalOpen: boolean;
}
export default class Popupshow extends React.Component<IPopupshowProps, {
    isModalOpen: boolean;
}> {
    private timerId;
    constructor(props: IPopupshowProps);
    private openModal;
    private closeModal;
    private startAutoCloseTimer;
    private clearAutoCloseTimer;
    componentDidUpdate(prevProps: IPopupshowProps): void;
    render(): React.ReactElement<IPopupshowProps> | undefined;
}
//# sourceMappingURL=Popupshow.d.ts.map