import { SimpleChanges } from '@angular/core';

export interface NgnComponentWithDynamicInputs {

  ngnDynamicInputs: string[];

  ngnOnDynamicChanges(changes: SimpleChanges): void;

}
