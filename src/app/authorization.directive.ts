import { Directive, Input, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[appAuthorization]'
})
export class AuthorizationDirective implements OnDestroy {

  sub: Subscription;
  @Input() set appAuthorization(v) {
    this.sub = this.authorizationService._authorize
      .subscribe(e =>
        !e ? this.viewContainerRef.clear() : this.viewContainerRef.createEmbeddedView(this.templateRef));
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private authorizationService: AuthorizationService
  ) { }

  ngOnDestroy() {
    if (this.sub) { this.sub.unsubscribe(); }
  }

}
