export interface PropertyAccessor<Input, Output> {
  <Fallback = never>(input: Input, fallback?: Fallback): Output | Fallback;
}

export interface AsyncPropertyAccessor<Input, Output> {
  <Fallback = never>(input: Input, fallback?: Fallback): Promise<
    Output | Fallback
  >;
}
