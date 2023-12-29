import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle,
  PropertyPaneSlider,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import Popup from './components/Popupshow';
import { IPopupshowProps } from './components/IPopupshowProps';

import { 
  PropertyFieldFilePicker,
  IFilePickerResult,
} from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";

import { PropertyPanePropertyEditor } from '@pnp/spfx-property-controls/lib/PropertyPanePropertyEditor';

import { CalloutTriggers } from '@pnp/spfx-property-controls/lib/Callout';
import { PropertyFieldLabelWithCallout } from '@pnp/spfx-property-controls/lib/PropertyFieldLabelWithCallout';



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
  timer:number;
  toggleInfoHeaderValue: boolean;
}



export default class PopupWebPart extends BaseClientSideWebPart<IPopupWebPartProps> {


  public render(): void {
    const element: React.ReactElement<IPopupshowProps> = React.createElement(
      Popup,
      {
        title: this.properties.title,
        crdtitle: this.properties.crdtitle,
        subtitle: this.properties.subtitle,
        crdsubtitle: this.properties.crdsubtitle,
        image: this.properties.image,
        description: this.properties.description,
        crddescription: this.properties.crddescription,
        footer: this.properties.footer,
        footerimage: this.properties.footerimage,
        userDisplayName: this.context.pageContext.user.displayName,
        showPopup: this.properties.showPopup ,
        filePickerResult: this.properties.filePickerResult,
        filePickerResultfooter: this.properties.filePickerResultfooter,
        timer: this.properties.timer,
        toggleInfoHeaderValue: this.properties.toggleInfoHeaderValue,
      }
    );

    ReactDom.render(element, this.domElement);
  }



  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Painel de configuração da popup. Insira as informações em cada campo que necessitar. Se algum campo não for utilizado, ele não vai ocupar espaço na tela da popup e ou card. Clique no card enquanto edita para visualizar como o popup será exibido.'
          },
          groups: [
            {
              groupName: '',
              groupFields: [
                PropertyFieldLabelWithCallout('fakeProp', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'LabelWithCalloutFieldId',
                  calloutContent: 'Use os campos abaixo para definir título, subtítulo e descrição do popup. As informações aqui contidas só aparecerão no Popup.',
                  calloutWidth: 500,
                  text: 'Popup'
                }), 
                PropertyPaneTextField('title', {
                  label: 'Titulo da Popup',
                  multiline: false,
                  maxLength: 50,
                  rows: 1,
                  placeholder: 'Título com limite de 50 caracteres'
                }),
                PropertyPaneTextField('subtitle', {
                  label: 'Subtitulo da Popup',
                  multiline: false,
                  maxLength: 50,
                  rows: 2,
                  placeholder: 'Subtítulo com limite de 50 caracteres'
                }),
                PropertyPaneTextField('description', {
                  label: 'Texto do conteúdo da popup', 
                  multiline: true,
                  maxLength: 450,
                  rows: 6,
                  placeholder: 'Texto com limite de 445 caracteres'
                })
              ]
            },

            {
              groupName: '',
              groupFields: [  
                PropertyFieldLabelWithCallout('fakeProp', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'LabelWithCalloutFieldId',
                  calloutContent: 'Use as caixas de texto abaixo para escrever os textos do card.',
                  calloutWidth: 500,
                  text: 'Card'
                }),              
                PropertyPaneTextField('crdtitle', {
                  label: 'Titulo do card',
                  multiline: false,
                  maxLength: 50,
                  rows: 1,
                  placeholder: 'Texto do título do cartão'
                }),
                PropertyPaneTextField('crdsubtitle', {
                  label: 'Subtitulo do card',
                  multiline: false,
                  maxLength: 50,
                  rows: 2,
                  placeholder: 'Subtítulo com limite de 50 caractere'
                }),
                PropertyPaneTextField('crddescription', {
                  label: 'Texto do card', 
                  multiline: true,
                  maxLength: 445,
                  rows: 6,
                  placeholder: 'Título com limite de 50 caracteres',
                  value: "",
                }),
              ]
            },

            {
              groupName: '',
              groupFields: [
                PropertyFieldLabelWithCallout('fakeProp', {
                  key: 'LabelWithCalloutFieldId',
                  text: 'Images do Card, Popup e Rodapé do card.'
                }),
                PropertyFieldLabelWithCallout('fakeProp', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'LabelWithCalloutFieldId',
                  calloutContent: 'Clique no botão "Carregar" abaixo para selecionar uma imagem ou gif para carregar no Popup. É possível carregar direto do seu Onedrive, link de imagem de algum site e pastas do sharepoint. A imagem será exibida tanto no cartão quanto no popup quando for aberto.',
                  calloutWidth: 445,
                  text: 'Imagem do Card e Popup.'
                }),
                PropertyFieldFilePicker('filePickerResult', {
                  label: "",  
                  key: "filePickerId",
                  buttonLabel: "Carregar", 
                  bingAPIKey: 'Ap5vk-GEnGVwuPOIo7GEvNM-7KPpkz9wG9AZTK0hwdqD0A9DrWx4A-KBJdwMbZWm',
                  allowExternalLinks: true,
                  checkIfFileExists: true,
                  includePageLibraries: true,
                  hideLocalUploadTab: true,
                  hideLinkUploadTab: false,
                  context: this.context,
                  filePickerResult: this.properties.filePickerResult,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties.filePickerResult,
                  accepts: [".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"],
                  onSave: (e: IFilePickerResult) => { console.log(e); this.properties.filePickerResult = e;  },
                  onChanged: (e: IFilePickerResult) => { console.log(e); this.properties.filePickerResult = e; },                                 
                }),
                PropertyFieldLabelWithCallout('fakeProp', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'LabelWithCalloutFieldId',
                  calloutContent: 'Clique no botão "Carregar" abaixo para selecionar uma imagem ou gif para carregar no rodapé do Card. É possível carregar direto do seu Onedrive, link de imagem de algum site e pastas do sharepoint.',
                  calloutWidth: 445,
                  text: 'Imagem do rodapé do card.'
                }),
                PropertyFieldFilePicker('filePickerResultfooter', {
                  label: "",  
                  key: "filePickerResultfooterId",
                  buttonLabel: "Carregar", 
                  bingAPIKey: 'Ap5vk-GEnGVwuPOIo7GEvNM-7KPpkz9wG9AZTK0hwdqD0A9DrWx4A-KBJdwMbZWm',
                  allowExternalLinks: true,
                  checkIfFileExists: true,
                  includePageLibraries: true,
                  hideLocalUploadTab: true,
                  hideLinkUploadTab: false,
                  context: this.context,
                  filePickerResult: this.properties.filePickerResultfooter,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties.filePickerResultfooter,
                  accepts: [".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"],
                  onSave: (e: IFilePickerResult) => { console.log(e); this.properties.filePickerResultfooter = e;  },
                  onChanged: (e: IFilePickerResult) => { console.log(e); this.properties.filePickerResultfooter = e; },                                 
                })
              ]
            },

            {
              groupName: '',
              groupFields: [ 
                PropertyFieldLabelWithCallout('fakeProp', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'LabelWithCalloutFieldId',
                  calloutContent: 'Mova o contador para aumentar ou diminuir o tempo de exibição e fechar automaticamente o popup, ou deixe zerada, assim a popup só vai sumir se a pessoa clicar para fechar. Ative ou desative o carregamente da popup sempre que a página for carregada ou acessada pelo controle de "Mostrar popup".',
                  calloutWidth: 500,
                  text: 'Controles de exibição'
                }),          
                PropertyPaneSlider('timer', {
                  min: 0,
                  max: 20,
                  step: 1,
                  label: 'Contador para fechar popup (segundos)',                 
                }),            
                PropertyPaneToggle('showPopup', {
                  label: 'Mostrar Popup ao carregar a página',
                  checked: this.properties.showPopup,
                  onText: 'Popup ativada'
                }),
                PropertyPanePropertyEditor({
                  webpart: this,
                  key: 'propertyEditor'
                })                
              ]
            }
          ]
        }
      ]
    };
  }
}

