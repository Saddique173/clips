import { Injectable } from '@angular/core';

interface IModals {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})

// if we donot want to be a service globally available.
// @Injectable()


export class ModalService {
  //public visible = false; // it is not scaleable to handle multiple modals

  private modals: IModals[] = [];
  constructor() { }

  register(id: string) {
    this.modals.push({ id, visible: false });
  }

  unregister(id: string) {
    this.modals = this.modals.filter((element) => element.id !== id);
  }

  isModalOpen(id: string): boolean {
    return !!this.modals.find((element) => element.id === id)?.visible;
  }

  toggleModal(id: string) {
    //this.visible = !this.visible;
    const modal = this.modals.find((element) => element.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
  
}
