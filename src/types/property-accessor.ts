export interface PropertyAccessor<Input, Output> {
  <Fallback = never>(input: Input, fallback?: Fallback): Output | Fallback;
}
