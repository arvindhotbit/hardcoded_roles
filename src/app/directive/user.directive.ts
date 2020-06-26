import { Directive, OnInit, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service';
@Directive({
  selector: '[appUser]'
})
export class UserDirective implements OnInit  {

  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthserviceService,
    private viewContainer: ViewContainerRef
) { }
ngOnInit() {
  const hasAccess = this.authService.isAuthorized();

  if (hasAccess) {
      this.viewContainer.createEmbeddedView(this.templateRef);
  } else {
      this.viewContainer.clear();
  }
}
}
