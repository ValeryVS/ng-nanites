import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  Type,
  ViewChild,
} from '@angular/core';

import { NgnDynamicComponentHostDirective } from '../dynamic-component-host.directive';
import { NgnComponentWithDynamicInputs } from '../types/component-with-dynamic-changes';

@Component({
  selector: 'ngn-dynamic-component-wrapper',
  templateUrl: 'dynamic-component-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgnDynamicComponentWrapperComponent implements OnChanges, OnDestroy, OnInit {

  @Input()
  public component: Type<any>;

  @Output()
  public componentInstanceChange = new EventEmitter<any>();

  @ViewChild(NgnDynamicComponentHostDirective)
  private componentHost: NgnDynamicComponentHostDirective;

  private componentInstance?: NgnComponentWithDynamicInputs;

  private lastChanges?: SimpleChanges;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.component) {
      this.loadComponent();
    }
  }

  public ngOnDestroy() {
    this.destroyComponent();
  }

  public ngOnInit() {
    this.loadComponent();
  }

  public saveLastChanges(changes: SimpleChanges) {
    this.lastChanges = changes;
    if (this.componentInstance) {
      this.sendChanges();
    }
  }

  private loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    this.componentHost.viewContainerRef.clear();
    const componentRef = this.componentHost.viewContainerRef.createComponent(componentFactory);
    this.componentInstance = componentRef.instance;
    this.componentInstanceChange.emit(this.componentInstance);
    if (this.lastChanges) {
      this.sendChanges();
    }
  }

  private destroyComponent() {
    this.componentHost.viewContainerRef.clear();
  }

  private sendChanges() {
    // tslint:disable-next-line:no-non-null-assertion
    this.componentInstance!.ngnOnDynamicChanges(this.lastChanges!);
  }

}
