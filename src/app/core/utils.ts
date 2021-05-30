import {FormArray, FormGroup} from '@angular/forms';

export class Utils {
  public static validateAllFormFields(formGroup: FormGroup | FormArray) {
    formGroup.markAsTouched({ onlySelf: true });
    if (formGroup instanceof FormGroup) {
      Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormGroup || control instanceof FormArray) {
          this.validateAllFormFields(control);
        } else {
          control.markAsTouched({ onlySelf: true });
        }
      });
    } else {
      if (formGroup.controls) {
        formGroup.controls.forEach((group: FormGroup) => this.validateAllFormFields(group));
      }
    }
  }
}
