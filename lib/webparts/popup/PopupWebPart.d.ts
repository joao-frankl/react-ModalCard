import { Version } from '@microsoft/sp-core-library';
import { type IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IFilePickerResult } from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";
export interface IPopupWebPartProps {
    title: string;
    crdtitle: string;
    subtitle: string;
    crdsubtitle: string;
    image: string;
    description: string;
    crddescription: string;
    footer: string;
    footerimage: string;
    userDisplayName: string;
    showPopup: boolean;
    filePickerResult: IFilePickerResult;
    filePickerResultfooter: IFilePickerResult;
    timer: number;
    toggleInfoHeaderValue: boolean;
}
export default class PopupWebPart extends BaseClientSideWebPart<IPopupWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=PopupWebPart.d.ts.map