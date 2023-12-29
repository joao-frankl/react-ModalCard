import * as React from 'react';
import  styles   from './Popupshow.module.scss';
import type { IPopupshowProps } from './IPopupshowProps';
import { escape } from '@microsoft/sp-lodash-subset';

export interface IPopupshowState {
  isModalOpen: boolean;
}

export default class Popupshow extends React.Component<IPopupshowProps, { isModalOpen: boolean }> {
  private timerId: number | undefined;

  constructor(props: IPopupshowProps) {
    super(props);
    this.state = {
      isModalOpen: props.showPopup,
    };
  }

  private openModal = (): void => {
    this.setState({ isModalOpen: true });
  };

  private closeModal = (): void => {
    this.setState({ isModalOpen: false });
  };

  private startAutoCloseTimer = (): void => {
    const { timer } = this.props;
    if (timer > 0) {
      this.timerId = window.setTimeout(() => {
        this.closeModal();
      }, timer * 1000); // Convertendo segundos para milissegundos
    }
  };

  private clearAutoCloseTimer = (): void => {
    if (this.timerId ) {
      window.clearTimeout(this.timerId);
      this.timerId = undefined;
    }
  };

  componentDidUpdate(prevProps: IPopupshowProps): void {
    if (this.props.showPopup !== prevProps.showPopup) {
      this.setState({ isModalOpen: this.props.showPopup });
      if (this.props.showPopup) {
        this.startAutoCloseTimer();
      } else {
        this.clearAutoCloseTimer();
      }
    }
  }

  public render(): React.ReactElement<IPopupshowProps> | undefined {
    const { userDisplayName} = this.props;
    const { isModalOpen } = this.state;

    if (isModalOpen) {
      this.startAutoCloseTimer();
    }

    return (
      <div className={styles.father}>
        {isModalOpen && (
          <div id="openModal" className={styles.modalDialog} onClick={this.closeModal}>
            <div className={styles.closeModalbackground} >
              <div className={styles.conteudo}>
                <div className={styles.conteudobox}>
                  <div className={styles.conteudobox2}>
                    <div className={styles.cgif3}>
                      <a href="#closeModal" title="Close" onClick={this.closeModal} className={styles.closeModal} />                  
                      <h1 id="titulo">{this.props.title}</h1>
                      <hr />
                      <h3 id="subtitulo">{this.props.subtitle}</h3>
                      <div className={styles.descrptionparagrapfh}>
                        <p className={styles.description}>{this.props.description}</p>
                      </div>
                      <hr />
                    </div> 
                    <div className={styles.modalmidiabox}>               
                      <div className={styles.modalmidiabox2}>
                        <div className={styles.modalmidia}>
                            <img alt="" src={this.props.filePickerResult?.fileAbsoluteUrl || ''} className={styles.image}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={styles.cardmodal}>          
            <div onClick={this.openModal} className={styles.openmodal}>
              <div className={styles.cardopenmodalcgif}>
                <div className={styles.userdisnamebox}>  
                  <div className={styles.userdisname}>                   
                    <h4 id="userName">Olá, {escape(userDisplayName)}</h4>
                  </div>
                </div>
                <h1 id="titulo">{this.props.crdtitle}</h1>
                <h2 id="cardopenmodalsubtitulo">{this.props.crdsubtitle}</h2>
                <div className={styles.carddescrptionparagrapfh}>
                  <p className={styles.carddescription}>{this.props.crddescription}</p>
                </div>                
                <div className={styles.cgifcard}>
                  <hr />
                  <div className={styles.imagecardbox}>
                    <div className={styles.imagecardbox2}>
                      <img alt="" src={this.props.filePickerResult?.fileAbsoluteUrl || ''} className={styles.imagecard}/>
                    </div>
                  </div>
                </div> 
                <hr />
                <div className={styles.footer}>
                  <div className={styles.footerdivcontent}>
                    <div className={styles.footercontent}>
                      <p className={styles.carddescription}>{this.props.footer}</p>
                    </div> 
                    <div className={styles.footermidia}>
                      <img alt="" src={this.props.filePickerResultfooter?.fileAbsoluteUrl || ''} className={styles.imagecardfooter}/>
                    </div>
                  </div>                                
                </div>              
              </div>
            </div>          
        </div>
      </div>
    );
  }
}
