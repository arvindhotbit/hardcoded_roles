import { Directive,OnInit, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service';
import { Role } from '../shared/tabular';
@Directive({
  selector: '[appMakers]'
})
export class MakersDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthserviceService,
    private viewContainer: ViewContainerRef
) { }
Makers: Role[];
@Input() 
set appChecker(roles: Role[]) {
    if (!roles || !roles.length) {
        throw new Error('Roles value is empty or missed');
    }

    this.Makers = roles;
}
ngOnInit() {
  let hasAccess = false;

  if (this.authService.isAuthorized() && this.Makers) {
      hasAccess = this.Makers.some(r => this.authService.hasRole(r));
  }

  if (hasAccess) {
      this.viewContainer.createEmbeddedView(this.templateRef);
  } else {
      this.viewContainer.clear();
  }
}

}
