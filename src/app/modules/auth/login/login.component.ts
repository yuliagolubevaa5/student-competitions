import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ReCaptchaV3Service, ScriptService} from 'ngx-captcha';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthorizationService} from '../../../core/services/auth.service';
import {Utils} from '../../../core/utils';
import {environment} from '../../../../environments/environment';
import {CurrentUserService} from '../../../core/services/current-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;
  loading = false;
  hasErrors = false;
  constructor(
    private fb: FormBuilder,
    private auth: AuthorizationService,
    private currentUser: CurrentUserService,
    private reCaptchaV3Service: ReCaptchaV3Service,
    private scriptService: ScriptService,
    private cdr: ChangeDetectorRef
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.generateForm();
  }

  // tslint:disable-next-line:typedef
  logIn() {
    this.loading = true;
    this.hasErrors = false;
    if (this.loginGroup.valid) {
      this.auth.LogIn(this.loginGroup.value).subscribe(_ => {
        // this.currentUser.setUser(_, true);
      }, err => {
        this.loading = false;
        this.hasErrors = true;
      });
      this.cdr.detectChanges();
    } else {
      Utils.validateAllFormFields(this.loginGroup);
      this.loading = false;
    }
  }


  // tslint:disable-next-line:typedef
  generateForm() {
    this.loginGroup = this.fb.group({
      Password: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,200})+$/)]],
    });
  }

}
