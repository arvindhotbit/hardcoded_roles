import { Directive,OnInit, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service';
import { Role } from '../shared/tabular';
@Directive({
  selector: '[appChecker]'
})
export class CheckerDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthserviceService,
    private viewContainer: ViewContainerRef
) { }
checker: Role[];
@Input() 
set appChecker(roles: Role[]) {
    if (!roles || !roles.length) {
        throw new Error('Roles value is empty or missed');
    }

    this.checker = roles;
}
ngOnInit() {
  let hasAccess = false;

  if (this.authService.isAuthorized() && this.checker) {
      hasAccess = this.checker.some(r => this.authService.hasRole(r));
  }

  if (hasAccess) {
      this.viewContainer.createEmbeddedView(this.templateRef);
  } else {
      this.viewContainer.clear();
  }
}

}
