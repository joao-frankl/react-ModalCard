import { IFilePickerResult } from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";

export interface IPopupshowProps {
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
  timer:number;
  toggleInfoHeaderValue: boolean;
}


