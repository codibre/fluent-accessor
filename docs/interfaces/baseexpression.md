[fluent-iterable - v1.2.0](../README.md) / BaseExpression

# Interface: BaseExpression<Input, Output\>

## Type parameters

Name | Default |
------ | ------ |
`Input` | - |
`Output` | Input |

## Hierarchy

* [*PropertyAccessor*](propertyaccessor.md)<Input, Output\>

  ↳ **BaseExpression**

## Callable

▸ **BaseExpression**<Fallback\>(`input`: Input, `fallback?`: Fallback): Output \| Fallback

#### Type parameters:

Name | Default |
------ | ------ |
`Fallback` | *never* |

#### Parameters:

Name | Type |
------ | ------ |
`input` | Input |
`fallback?` | Fallback |

**Returns:** Output \| Fallback

## Table of contents

### Methods

- [\_\_@jsonPathSymbol@22634](baseexpression.md#__@jsonpathsymbol@22634)
- [extend](baseexpression.md#extend)
- [jsonPath](baseexpression.md#jsonpath)

## Methods

### \_\_@jsonPathSymbol@22634

▸ **__@jsonPathSymbol@22634**(): [*FieldType*](../README.md#fieldtype)<*unknown*\>[]

**Returns:** [*FieldType*](../README.md#fieldtype)<*unknown*\>[]

___

### extend

▸ **extend**(): [*ExtenderExpression*](../README.md#extenderexpression)<Input, Output\>

**Returns:** [*ExtenderExpression*](../README.md#extenderexpression)<Input, Output\>

___

### jsonPath

▸ **jsonPath**(): [*FieldType*](../README.md#fieldtype)<*unknown*\>[]

**Returns:** [*FieldType*](../README.md#fieldtype)<*unknown*\>[]
