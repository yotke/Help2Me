import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './modules/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modalRef: NgbModalRef;
  title = 'HelpMe';
  constructor(private modalService: NgbModal) {

  }

  open() {
    this.modalRef = this.modalService.open(HomeComponent);
  }
}
