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
    this.showSuccess();
  }

  showSuccess() {
    this.toastr.toastrConfig.positionClass = "toast-top-center"
    this.toastr.success('תודה שהתחברת למערכת על מנת לעזור לחפים מפשע', 'שלום');
    setTimeout(() => {
      this.toastr.warning('אנא שמור/י על פרטיות המשתתפים,הפרה של חוקים אלה תביא לסילוק מהאתר', 'אזהרה');
    }, 2000)

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
