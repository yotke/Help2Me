import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from '../modules/singin/signin.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalRef: NgbModalRef
  constructor(private modalService: NgbModal) { }

  openSigninModal() {
    this.modalRef = this.modalService.open(SigninComponent, { scrollable: true });
  }
  closeModal() {
    this.modalRef.close();
  }
}
