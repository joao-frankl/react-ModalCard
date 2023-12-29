var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { useId, useBoolean } from '@fluentui/react-hooks';
import { Modal, getTheme, mergeStyleSets, FontWeights, } from '@fluentui/react';
import { DefaultButton, IconButton } from '@fluentui/react/lib/Button';
import { Image, ImageFit } from '@fluentui/react/lib/Image';
// These props are defined up here so they can easily be applied to multiple Images.
// Normally specifying them inline would be fine.
var imageProps = {
    maximizeFrame: true,
    imageFit: ImageFit.contain,
    src: 'https://img.freepik.com/fotos-gratis/abstrato-de-lampada-criativa-em-ia-generativa-de-fundo-azul-brilhante_188544-8090.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698624000&semt=sph',
    // Show a border around the image (just for demonstration purposes)
    styles: function (props) { return ({ root: { border: '10px solid ' + props.theme.palette.neutralSecondary } }); },
};
var cancelIcon = { iconName: 'Cancel' };
var theme = getTheme();
var contentStyles = mergeStyleSets({
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'stretch',
    },
    header: [
        theme.fonts.xLargePlus,
        {
            flex: '1 1 auto',
            borderTop: "4px solid ".concat(theme.palette.themePrimary),
            color: theme.palette.neutralPrimary,
            display: 'flex',
            alignItems: 'center',
            fontWeight: FontWeights.semibold,
            padding: '12px 12px 14px 24px',
        },
    ],
    heading: {
        color: theme.palette.neutralPrimary,
        fontWeight: FontWeights.semibold,
        fontSize: 'inherit',
        margin: '0',
    },
    body: {
        width: '700px',
        flex: '4 4 auto',
        padding: '0 24px 24px 24px',
        overflowY: '',
        selectors: {
            p: { margin: '14px 0' },
            'p:first-child': { marginTop: 0 },
            'p:last-child': { marginBottom: 0 },
        },
    },
    imge: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
});
var iconButtonStyles = {
    root: {
        color: theme.palette.neutralPrimary,
        marginLeft: 'auto',
        marginTop: '4px',
        marginRight: '2px',
    },
    rootHovered: {
        color: theme.palette.neutralDark,
    },
};
export var ModalPopup = function () {
    var _a = useBoolean(true), isModalOpen = _a[0], _b = _a[1], showModal = _b.setTrue, hideModal = _b.setFalse;
    // Use useId() to ensure that the IDs are unique on the page.
    // (It's also okay to use plain strings and manually ensure uniqueness.)
    var titleId = useId('title');
    return (React.createElement("div", null,
        React.createElement(DefaultButton, { secondaryText: "Opens the Sample Modal", onClick: showModal, text: "Open Modal" },
            React.createElement(Modal, { titleAriaId: titleId, isOpen: isModalOpen, onDismiss: hideModal, isModeless: true, containerClassName: contentStyles.container },
                React.createElement("div", { className: contentStyles.header },
                    React.createElement("h2", { className: contentStyles.heading, id: titleId }, "Lorem Ipsum"),
                    React.createElement(IconButton, { styles: iconButtonStyles, iconProps: cancelIcon, ariaLabel: "Close popup modal", onClick: hideModal })),
                React.createElement("div", null,
                    React.createElement(Image, __assign({}, imageProps))),
                React.createElement("div", { className: contentStyles.body },
                    React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate."))))));
};
//# sourceMappingURL=Modal.js.map