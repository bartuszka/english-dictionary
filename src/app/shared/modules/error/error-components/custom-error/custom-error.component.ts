import { Component } from '@angular/core';

import { GeneralErrorDirective } from '../general-error/general-error.directive';

@Component({
  selector: 'app-custom-error',
  templateUrl: './custom-error.component.html',
  styleUrls: ['./custom-error.component.scss']
})
export class CustomErrorComponent extends GeneralErrorDirective {}
