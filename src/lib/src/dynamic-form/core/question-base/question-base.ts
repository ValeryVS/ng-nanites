import { Type } from '@angular/core';

export class NgnQuestionBase<T>{
  public component: Type<any>;
  public value?: T;
  public key: string;
  public label: string;
  public required: boolean;
  public pattern?: string;
  public minLength?: number;
  public maxLength?: number;
  public nullable: boolean;
  public order: number;
  public controlType: string;

  constructor(
    options: Partial<NgnQuestionBase<T>> = {},
  ) {
    this.component = this.component;
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.pattern = options.pattern;
    this.minLength = options.minLength;
    this.maxLength = options.maxLength;
    this.nullable = !!options.nullable;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }
}
