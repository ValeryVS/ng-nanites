export function NgnDynamicInput(): PropertyDecorator {
  return (target: any, propertyKey: string | symbol) => {
    if (!target.ngnDynamicInputs) {
      target.ngnDynamicInputs = [];
    }
    target.ngnDynamicInputs.push(propertyKey);
  };
}
