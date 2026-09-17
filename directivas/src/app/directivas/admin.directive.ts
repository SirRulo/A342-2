import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdmin]',
  standalone: true
})
export class AdminDirective {

  rolUsuario = "admin";

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    if (this.rolUsuario === 'admin') {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }

}
