import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import { Usuario } from '../usuarios/usuario';




@Directive({
  selector: '[appTiempoEspera]'
})
export class TiempoEsperaDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { };

  items: Array<Usuario> = [];

  @Input()

  @Input()
  set appTiempoEsperaOf(array: Usuario[]) {
    this.items = array;
    let i = 0;


    this.viewContainer.clear();
    this.items.forEach(n => {

        setTimeout(() => {
          this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: n })
          console.log(n);
        }, 500*i);
        i++;

    });
  }
}
