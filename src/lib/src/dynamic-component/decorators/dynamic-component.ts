import { SimpleChanges } from '@angular/core';

import { Constructor } from '../../common/types/constructor';

import { NgnComponentWithDynamicInputs } from '../types/component-with-dynamic-changes';

export function NgnDynamicComponent(): ClassDecorator {
  return <T extends Constructor<NgnComponentWithDynamicInputs>>(target: T) => {
    return class extends target {
      public ngnOnDynamicChanges(changes: SimpleChanges) {
        if (this.ngnDynamicInputs) {
          for (const inputKey of this.ngnDynamicInputs) {
            (this as { [key: string]: any })[inputKey] = changes[inputKey].currentValue;
          }
        }
      }
    };
  };
}
