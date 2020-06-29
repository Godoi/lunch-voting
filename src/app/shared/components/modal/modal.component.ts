import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal, NgbActiveModal  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalComponent {
  @Input() error: boolean;
  @Input() msgError: string;
  public loginForm: FormGroup;
  public flag: boolean = false;

  constructor(private config: NgbModalConfig, private modalService: NgbModal, private activeModal: NgbActiveModal, private fb: FormBuilder) {
    this.config.backdrop = 'static';
    this.createForm();
  }

  public createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]]
    });
  }

  open(content) {
    this.modalService.open(content);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }


  onSubmit() {
    this.activeModal.close(this.loginForm.value);
  }

}
