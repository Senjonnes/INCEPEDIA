import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController, ModalController, ActionSheetController } from '@ionic/angular';
import { SharedData } from '../Shared/sharedservices/shared.components';


@Injectable()

export class DisplayServices {
  alert;
  loading;
  modal;
  currentLoader;

  constructor(
    public alertCtrl: AlertController,
    public loaderCtrl: LoadingController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public sharedData: SharedData,
  ) {
    this.currentLoader = null;
  }

  async showLoader(msg) {
    this.currentLoader = true;
    this.loading = await this.loaderCtrl.create({
      message: msg !== null || undefined ? msg : 'Loading',
      spinner: 'dots',
      cssClass: 'loader',
      mode: "ios"
    });
    await this.loading.present();
  }
  
  // Loader without css class...
  async loader(msg?) {
    this.currentLoader = true;
    this.loading = await this.loaderCtrl.create({
      message: (msg === null) || (msg === undefined) ? 'Loading' : msg,
      spinner: 'dots',
      mode: "ios"
    });
    await this.loading.present();
  }
  
  async removeLoader() {
    return await this.loading.dismiss();
  }

  async showSuccessToaster(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: "bottom",
      mode: "ios",
      cssClass: "success-toast-scheme"
    });
    toast.present()
  }

  async showErrorToaster(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: "top",
      mode: "ios",
      cssClass: "error-toast-scheme"
    });
    toast.present()
  }

  /** showing alert on the page */
  async showAlert(msg, header, yes?, subHeader?) {
    this.alert = await this.alertCtrl.create({
      header: header !== null || undefined ? header : 'Notice',
      subHeader: subHeader !== null || undefined ? subHeader : '',
      message: msg,
      cssClass: "scamAlert",
      mode: "ios",
      buttons: [
        {
          text: (yes === null || yes === undefined) ? "OK" : yes,
          cssClass: 'optPrimary',
        }
      ],
    });
    await this.alert.present();
  }

  /** showing alert on the page Mode:Android */
  async showAlertMD(msg, header, yes?, subHeader?) {
    this.alert = await this.alertCtrl.create({
      header: header !== null || undefined ? header : 'Notice',
      subHeader: subHeader !== null || undefined ? subHeader : '',
      message: msg,
      cssClass: "scamAlert",
      mode: "md",
      buttons: [
        {
          text: (yes === null || yes === undefined) ? "OK" : yes,
          cssClass: 'optPrimary',
        }
      ],
    });
    await this.alert.present();
  }

  // confirm alert that has 1 options which returns a boolean
  async confirmAwaitResponse(msg: any, header: any, yes?: any, no?: any, subHeader?: any): Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    const alert = await this.alertCtrl.create({
      header: header !== null || undefined ? header : 'Notice',
      subHeader: subHeader !== null || undefined ? subHeader : '',
      message: msg,
      mode: "ios",
      backdropDismiss: false,
      buttons: [
        {
          text: (yes === null || yes === undefined) ? "Yes" : yes,
          cssClass: 'optPrimary',
          handler: () => resolveFunction(true)
        }
      ]
    });
    await alert.present();
    return promise;
  }

  // confirm alert that has 1 options which returns a boolean
  async confirmAwaitResponseMD(msg: any, header: any, yes?: any, no?: any, subHeader?: any): Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    const alert = await this.alertCtrl.create({
      header: header !== null || undefined ? header : 'Notice',
      subHeader: subHeader !== null || undefined ? subHeader : '',
      message: msg,
      mode: "md",
      backdropDismiss: false,
      buttons: [
        {
          text: (yes === null || yes === undefined) ? "Yes" : yes,
          cssClass: 'optPrimary',
          handler: () => resolveFunction(true)
        }
      ]
    });
    await alert.present();
    return promise;
  }

  // confirm alert that has 2 options which returns a boolean
  async confirm(msg: any, header: any, yes?: any, no?: any, subHeader?: any): Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    const alert = await this.alertCtrl.create({
      header: header !== null || undefined ? header : 'Notice',
      subHeader: subHeader !== null || undefined ? subHeader : '',
      message: msg,
      mode: "ios",
      backdropDismiss: false,
      buttons: [
        {
          text: (no === null || no === undefined) ? "Cancel" : no,
          cssClass: 'optDanger',
          handler: () => resolveFunction(false)
        },
        {
          text: (yes === null || yes === undefined) ? "Yes" : yes,
          cssClass: 'optPrimary',
          handler: () => resolveFunction(true)
        }
      ]
    });
    await alert.present();
    return promise;
  }

  // Alert with User input

  async alertWithInput(header: any, type?: any, placeholder?: any) {
    const alert = await this.alertCtrl.create({
      header: header,
      inputs: [
        {
          name: "input",
          type: type,
          placeholder: placeholder,
        }
      ],
      mode: "ios",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'OK',
          role: 'OK',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    return result
  }

  /** removing alert from the page */
  async dismissAlert() {
    this.alert.dismiss();
  }

  async show(modalPage) {
    this.modal = await this.modalCtrl.create({
      component: modalPage,
      cssClass: 'my-custom-modal-css'
    });
    return await this.modal.present();
  }
  
  async hide() {
    await this.modal.dismiss();
  }

  async showActionSheet(header, buttons) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: header,
      buttons: buttons,
      mode: 'ios',
      cssClass: 'bills-sheet'
    });
    await actionSheet.present();
    let result = await actionSheet.onDidDismiss();
    return result
  }

  async presentModal(component) {
    this.modal = await this.modalCtrl.create({
      component: component,
      swipeToClose: true,
      mode: 'md',
      cssClass: "calenda-modal-css"
    });
    return await this.modal.present();
  }
}
