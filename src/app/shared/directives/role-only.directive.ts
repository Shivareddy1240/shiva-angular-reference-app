import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({ selector: '[appRoleOnly]', standalone: true })
export class RoleOnlyDirective {
  private allowedRole = 'admin';
  constructor(private readonly template: TemplateRef<unknown>, private readonly view: ViewContainerRef) {}
  @Input() set appRoleOnly(role: string) { this.view.clear(); if (role === this.allowedRole) { this.view.createEmbeddedView(this.template); } }
}
