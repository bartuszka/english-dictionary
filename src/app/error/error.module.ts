import { NgModule } from '@angular/core';

import { ErrorPlaceholderDirective } from './error-placeholder.directive';
import { GeneralErrorTemplateComponent } from './error-components/general-error-template/general-error-template.component';
import { ServerErrorComponent } from './error-components/server-error/server-error.component';
import { CustomErrorComponent } from './error-components/custom-error/custom-error.component';
import { ButtonComponent } from '../components-library/button/button.component';
import { ClientErrorComponent } from './error-components/client-error/client-error.component';
import { WarningConfirmComponent } from './error-components/warning-confirm/warning-confirm.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ErrorPlaceholderDirective
  ],
  declarations: [
    ErrorPlaceholderDirective,
    GeneralErrorTemplateComponent,
    ServerErrorComponent,
    CustomErrorComponent,
    ButtonComponent,
    ClientErrorComponent,
    WarningConfirmComponent,
  ]
})
export class ErrorModule {}
