var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './Popup.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { ModalPopup } from './Modalpopup';
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Popup.prototype.render = function () {
        var userDisplayName = this.props.userDisplayName;
        return (React.createElement("section", { className: "".concat(styles.popup) },
            React.createElement(ModalPopup, null),
            React.createElement("div", { className: styles.welcome },
                React.createElement("h3", null,
                    "Ol\u00E1, ",
                    escape(userDisplayName)),
                React.createElement("div", null,
                    React.createElement("h1", null, this.props.title)),
                React.createElement("div", null,
                    React.createElement("h2", null, this.props.subtitle)),
                React.createElement("div", null,
                    React.createElement("img", { alt: "", src: this.props.image, className: styles.welcomeImage })),
                React.createElement("div", null,
                    React.createElement("strong", null, this.props.description)),
                React.createElement("div", null,
                    React.createElement("strong", null, this.props.footer)),
                React.createElement("div", null,
                    React.createElement("img", { alt: "", src: this.props.footerimage, className: styles.welcomeImage })))));
    };
    return Popup;
}(React.Component));
export default Popup;
//# sourceMappingURL=Popup.js.map