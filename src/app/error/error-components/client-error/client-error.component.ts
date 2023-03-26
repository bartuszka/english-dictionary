import { Component } from '@angular/core';
import { GeneralErrorDirective } from '../general-error/general-error.directive';

@Component({
  selector: 'app-client-error',
  templateUrl: './client-error.component.html',
  styleUrls: ['../../error-styles.scss', './client-error.component.scss']
})
export class ClientErrorComponent extends GeneralErrorDirective {}
