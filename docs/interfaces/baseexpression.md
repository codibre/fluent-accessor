[fluent-iterable - v1.1.1](../README.md) / BaseExpression

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

- [\_\_@jsonPathSymbol@22525](baseexpression.md#__@jsonpathsymbol@22525)
- [extend](baseexpression.md#extend)
- [jsonPath](baseexpression.md#jsonpath)

## Methods

### \_\_@jsonPathSymbol@22525

▸ **__@jsonPathSymbol@22525**(): (*string* \| *number* \| *symbol*)[]

**Returns:** (*string* \| *number* \| *symbol*)[]

___

### extend

▸ **extend**(): [*ExtenderExpression*](../README.md#extenderexpression)<Input, Output\>

**Returns:** [*ExtenderExpression*](../README.md#extenderexpression)<Input, Output\>

___

### jsonPath

▸ **jsonPath**(): (*string* \| *number* \| *symbol*)[]

**Returns:** (*string* \| *number* \| *symbol*)[]
