import * as React from 'react';
import { DefaultButton, FocusTrapZone, Layer, Overlay, Popup } from '@fluentui/react';
import { useBoolean } from '@fluentui/react-hooks';
export var ModalPopup = function () {
    var _a = useBoolean(true), isPopupVisible = _a[0], _b = _a[1], showPopup = _b.setTrue, hidePopup = _b.setFalse;
    return (React.createElement(React.Fragment, null,
        React.createElement(DefaultButton, { onClick: showPopup }),
        isPopupVisible && (React.createElement(Layer, null,
            React.createElement(Popup, { role: "dialog", "aria-modal": "true", onDismiss: hidePopup, enableAriaHiddenSiblings: true },
                React.createElement(Overlay, { onClick: hidePopup }),
                React.createElement(FocusTrapZone, null,
                    React.createElement("div", null,
                        React.createElement(DefaultButton, { onClick: hidePopup }, "Close Popup"))))))));
};
//# sourceMappingURL=Modalpopup.js.map