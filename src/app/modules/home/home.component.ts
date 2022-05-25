import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef: NgbModalRef;

  constructor(private route: Router, private modalSvc: ModalService, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  go() {
    setTimeout(() => {
      this.modalSvc.openSigninModal();
      this.route.navigate(['helpMeNow']); // navigate to other page
    }, 1000)

  }
  ngAfterViewInit() {
  }
}
