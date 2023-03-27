import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { takeUntil } from 'rxjs';

import { ErrorPlaceholderDirective } from './error/error-placeholder.directive';
import { ModalCallback } from './shared/models/modal-callback';
import { Destroyable } from './shared/directives/destroyable';
import { ModalService } from './shared/services/modal.service';
import { NavigationLink } from './shared/models/navigation-link';
import { HeaderButton } from './header/models/header-button';
import { headerButtonsData } from './shared/data/header-buttons-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Destroyable implements OnInit {
  @ViewChild(ErrorPlaceholderDirective, { static: true }) public errorHost: ErrorPlaceholderDirective;

  public currentPageForFilters: NavigationLink;
  public navigationLinks: typeof NavigationLink = NavigationLink;
  public headerButtons: HeaderButton[];

  constructor(
    private modalService: ModalService,
    private router: Router
  ) {
    super();
  }

  public ngOnInit(): void {
    this.headerButtons = headerButtonsData;
    this.setRouteStream();
    this.setModalStream();
  }

  private showModal(modalCallback: ModalCallback): void {
    this.errorHost.viewContainerRef.clear();
    modalCallback(this.errorHost.viewContainerRef);
  }

  private setRouteStream(): void {
    this.router.events
      .pipe(takeUntil(this.destroy$))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.currentPageForFilters = event.url as NavigationLink;
        }
      });
  }

  private setModalStream(): void {
    this.modalService.modal$
      .pipe(takeUntil(this.destroy$))
      .subscribe((modalCallback: ModalCallback) => this.showModal(modalCallback));
  }
}
