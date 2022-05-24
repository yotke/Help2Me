import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef: NgbModalRef
  constructor(private route: Router, private modalSvc: ModalService) { }

  ngOnInit(): void {
  }
  go() {
    this.modalSvc.openSigninModal();
    this.route.navigate(['helpMeNow']); // navigate to other page

  }
  ngAfterViewInit() {
  }
}
