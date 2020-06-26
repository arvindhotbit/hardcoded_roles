import { Directive,OnInit, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service';
import { Role } from '../shared/tabular';
@Directive({
  selector: '[appUserRole]'
})
export class UserRoleDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthserviceService,
    private viewContainer: ViewContainerRef
) { }
userRoles: Role[];

@Input() 
set appUserRole(roles: Role[]) {
    if (!roles || !roles.length) {
        throw new Error('Roles value is empty or missed');
    }

    this.userRoles = roles;
}

ngOnInit() {
    let hasAccess = false;

    if (this.authService.isAuthorized() && this.userRoles) {
        hasAccess = this.userRoles.some(r => this.authService.hasRole(r));
    }

    if (hasAccess) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
        this.viewContainer.clear();
    }
}
}
