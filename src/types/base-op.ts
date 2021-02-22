export const baseOp = {
  first: Symbol('first'),
  last: Symbol('last'),
};

export type BaseOpType = typeof baseOp.first | typeof baseOp.last;
