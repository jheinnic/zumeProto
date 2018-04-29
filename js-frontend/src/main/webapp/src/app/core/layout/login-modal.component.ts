import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Store} from '@ngrx/store';
import {CoreReducer, CoreIdentityModels, CoreIdentityActions} from '../feature';

@Component({
  moduleId: 'app/core/identity/login-required-modal.component',
  selector: 'ptf-login-modal',
  templateUrl: './_login-modal.view.html',
  styleUrls: ['./_zocial.css']
})
export class LoginModalComponent
{
  @Output() onLogin: EventEmitter<string>;
  @Output() onSignup: EventEmitter<string>;

  constructor(
    private readonly modalRef: MatDialogRef<LoginModalComponent>,
    private readonly store: Store<CoreReducer.State>,
    @Inject(MAT_DIALOG_DATA) private readonly onReturnRedirectUrl?: string
  ) {
  }

  login(useProvider?: CoreIdentityModels.LoginProviderType) {
    const nextAction = new CoreIdentityActions.RequestLoginRedirect({
      onReturnRedirectUrl: this.onReturnRedirectUrl,
      useProvider
    });

    // Now call close, returning control to the caller.
    this.store.dispatch(nextAction);
    this.modalRef.close(nextAction);
  }

  signup() {
    const nextAction = new CoreIdentityActions.RequestSignupRedirect({
      onReturnRedirectUrl: this.onReturnRedirectUrl
    });

    this.store.dispatch(nextAction);
    this.modalRef.close(nextAction);
  }
}

