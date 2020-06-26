import { Directive, OnInit, TemplateRef, ViewContainerRef, Input  } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service';
import { Role } from '../shared/tabular';
@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit  {

  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthserviceService,
    private viewContainer: ViewContainerRef
) { }
test: Role[];
@Input() 
set appUserRole(roles: Role[]) {
    if (!roles || !roles.length) {
        throw new Error('Roles value is empty or missed');
    }

    this.test = roles;
}

ngOnInit() {
    let hasAccess = false;

    if (this.authService.isAuthorized() && this.test) {
        hasAccess = this.test.some(r => this.authService.hasRole(r));
    }

    if (hasAccess) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
        this.viewContainer.clear();
    }
}
}
