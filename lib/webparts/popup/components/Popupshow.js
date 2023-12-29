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
import styles from './Popupshow.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
var Popupshow = /** @class */ (function (_super) {
    __extends(Popupshow, _super);
    function Popupshow(props) {
        var _this = _super.call(this, props) || this;
        _this.openModal = function () {
            _this.setState({ isModalOpen: true });
        };
        _this.closeModal = function () {
            _this.setState({ isModalOpen: false });
        };
        _this.startAutoCloseTimer = function () {
            var timer = _this.props.timer;
            if (timer > 0) {
                _this.timerId = window.setTimeout(function () {
                    _this.closeModal();
                }, timer * 1000); // Convertendo segundos para milissegundos
            }
        };
        _this.clearAutoCloseTimer = function () {
            if (_this.timerId) {
                window.clearTimeout(_this.timerId);
                _this.timerId = undefined;
            }
        };
        _this.state = {
            isModalOpen: props.showPopup,
        };
        return _this;
    }
    Popupshow.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.showPopup !== prevProps.showPopup) {
            this.setState({ isModalOpen: this.props.showPopup });
            if (this.props.showPopup) {
                this.startAutoCloseTimer();
            }
            else {
                this.clearAutoCloseTimer();
            }
        }
    };
    Popupshow.prototype.render = function () {
        var _a, _b, _c;
        var userDisplayName = this.props.userDisplayName;
        var isModalOpen = this.state.isModalOpen;
        if (isModalOpen) {
            this.startAutoCloseTimer();
        }
        return (React.createElement("div", { className: styles.father },
            isModalOpen && (React.createElement("div", { id: "openModal", className: styles.modalDialog, onClick: this.closeModal },
                React.createElement("div", { className: styles.closeModalbackground },
                    React.createElement("div", { className: styles.conteudo },
                        React.createElement("div", { className: styles.conteudobox },
                            React.createElement("div", { className: styles.conteudobox2 },
                                React.createElement("div", { className: styles.cgif3 },
                                    React.createElement("a", { href: "#closeModal", title: "Close", onClick: this.closeModal, className: styles.closeModal }),
                                    React.createElement("h1", { id: "titulo" }, this.props.title),
                                    React.createElement("hr", null),
                                    React.createElement("h3", { id: "subtitulo" }, this.props.subtitle),
                                    React.createElement("div", { className: styles.descrptionparagrapfh },
                                        React.createElement("p", { className: styles.description }, this.props.description)),
                                    React.createElement("hr", null)),
                                React.createElement("div", { className: styles.modalmidiabox },
                                    React.createElement("div", { className: styles.modalmidiabox2 },
                                        React.createElement("div", { className: styles.modalmidia },
                                            React.createElement("img", { alt: "", src: ((_a = this.props.filePickerResult) === null || _a === void 0 ? void 0 : _a.fileAbsoluteUrl) || '', className: styles.image })))))))))),
            React.createElement("div", { className: styles.cardmodal },
                React.createElement("div", { onClick: this.openModal, className: styles.openmodal },
                    React.createElement("div", { className: styles.cardopenmodalcgif },
                        React.createElement("div", { className: styles.userdisnamebox },
                            React.createElement("div", { className: styles.userdisname },
                                React.createElement("h4", { id: "userName" },
                                    "Ol\u00E1, ",
                                    escape(userDisplayName)))),
                        React.createElement("h1", { id: "titulo" }, this.props.crdtitle),
                        React.createElement("h2", { id: "cardopenmodalsubtitulo" }, this.props.crdsubtitle),
                        React.createElement("div", { className: styles.carddescrptionparagrapfh },
                            React.createElement("p", { className: styles.carddescription }, this.props.crddescription)),
                        React.createElement("div", { className: styles.cgifcard },
                            React.createElement("hr", null),
                            React.createElement("div", { className: styles.imagecardbox },
                                React.createElement("div", { className: styles.imagecardbox2 },
                                    React.createElement("img", { alt: "", src: ((_b = this.props.filePickerResult) === null || _b === void 0 ? void 0 : _b.fileAbsoluteUrl) || '', className: styles.imagecard })))),
                        React.createElement("hr", null),
                        React.createElement("div", { className: styles.footer },
                            React.createElement("div", { className: styles.footerdivcontent },
                                React.createElement("div", { className: styles.footercontent },
                                    React.createElement("p", { className: styles.carddescription }, this.props.footer)),
                                React.createElement("div", { className: styles.footermidia },
                                    React.createElement("img", { alt: "", src: ((_c = this.props.filePickerResultfooter) === null || _c === void 0 ? void 0 : _c.fileAbsoluteUrl) || '', className: styles.imagecardfooter })))))))));
    };
    return Popupshow;
}(React.Component));
export default Popupshow;
//# sourceMappingURL=Popupshow.js.map