import { Component } from '@angular/core';

import { GeneralErrorDirective } from '../general-error/general-error.directive';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['../../error-styles.scss', './server-error.component.scss']
})
export class ServerErrorComponent extends GeneralErrorDirective {}
