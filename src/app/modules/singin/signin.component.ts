import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModalService } from '../../services/modal.service';




@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  // loginStatusFromService: Subscription
  // loginStatus: boolean;
  showPassword: boolean;
  hide: boolean = true;
  disabled: boolean = true;
  SignInForm: FormGroup;
  constructor(private modalSvc: ModalService, private fb: FormBuilder) {
    // this.loginStatusFromService = siginService.loginStatusSubject.subscribe(status => this.loginStatus = status)
  }

  ngOnInit() {
    this.createForm()
  }
  sendUserDataToService( password: string): void {
    
  }
  sendlogOutRequestToService(): void {
  }
  password() {
    this.showPassword = !this.showPassword;
  }
  closeModal() {
    this.modalSvc.closeModal();
  }
  signUpOpenModal() {

  }
  forgottenPasswordOpenModal() {

  }
  phoneSigninOpenModal() {

  }
  createForm() {
    this.SignInForm = this.fb.group({
      // email: new FormControl('israel@test.com', [Validators.required, Validators.email]),
      PASSWORD: new FormControl('Aa123456!', [Validators.required])
    })
  }
}
