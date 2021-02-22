fluent-iterable - v1.2.1

# fluent-iterable - v1.2.1

## Table of contents

### Interfaces

- [BaseExpression](interfaces/baseexpression.md)
- [PropertyAccessor](interfaces/propertyaccessor.md)

### Type aliases

- [BaseOpType](README.md#baseoptype)
- [Expression](README.md#expression)
- [ExtenderExpression](README.md#extenderexpression)
- [FieldType](README.md#fieldtype)
- [ItemType](README.md#itemtype)
- [K](README.md#k)
- [PropertyMapper](README.md#propertymapper)
- [V](README.md#v)
- [V10](README.md#v10)
- [V2](README.md#v2)
- [V3](README.md#v3)
- [V4](README.md#v4)
- [V5](README.md#v5)
- [V6](README.md#v6)
- [V7](README.md#v7)
- [V8](README.md#v8)
- [V9](README.md#v9)

### Variables

- [baseOp](README.md#baseop)
- [jsonPathSymbol](README.md#jsonpathsymbol)
- [mapTo](README.md#mapto)
- [none](README.md#none)

### Functions

- [$](README.md#$)
- [applyFallback](README.md#applyfallback)
- [get](README.md#get)
- [getOrDef](README.md#getordef)
- [jsonPath](README.md#jsonpath)
- [setStrictness](README.md#setstrictness)

## Type aliases

### BaseOpType

Ƭ **BaseOpType**: *typeof* [*first*](README.md#first) \| *typeof* [*last*](README.md#last)

___

### Expression

Ƭ **Expression**<Input, Output\>: [*BaseExpression*](interfaces/baseexpression.md)<Input, Output\> \| [*ExtenderExpression*](README.md#extenderexpression)<Input, Output\>

#### Type parameters:

Name | Default |
------ | ------ |
`Input` | - |
`Output` | Input |

___

### ExtenderExpression

Ƭ **ExtenderExpression**<Input, Output\>: { [key in keyof Output]: ExtenderExpression<Input, Output[key]\>} & [*PropertyAccessor*](interfaces/propertyaccessor.md)<Input, Output\> & { `__@jsonPathSymbol@22628`: () => [*FieldType*](README.md#fieldtype)<*unknown*\>[] ; `__@mapTo@22619`: <T\>(`mapper`: (`a`: Output) => T) => [*ExtenderExpression*](README.md#extenderexpression)<Input, T\>  }

#### Type parameters:

Name | Default |
------ | ------ |
`Input` | - |
`Output` | Input |

___

### FieldType

Ƭ **FieldType**<R\>: *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<*unknown*, R\>

#### Type parameters:

Name | Default |
------ | ------ |
`R` | *unknown* |

___

### ItemType

Ƭ **ItemType**<T\>: T *extends* *Iterable*<*infer* R\> ? R : *never*

#### Type parameters:

Name |
------ |
`T` |

___

### K

Ƭ **K**<T\>: keyof T \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> \| [*BaseOpType*](README.md#baseoptype)

#### Type parameters:

Name |
------ |
`T` |

___

### PropertyMapper

Ƭ **PropertyMapper**<T, R\>: (`a`: T) => R

#### Type parameters:

Name |
------ |
`T` |
`R` |

___

### V

Ƭ **V**<T, K1\>: K1 *extends* [*PropertyMapper*](README.md#propertymapper)<T, *infer* R\> ? R : K1 *extends* keyof T ? T[K1] : K1 *extends* *typeof* [*first*](README.md#first) ? [*ItemType*](README.md#itemtype)<T\> : K1 *extends* *typeof* [*last*](README.md#last) ? [*ItemType*](README.md#itemtype)<T\> : *never*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | [*K*](README.md#k)<T\> |

___

### V10

Ƭ **V10**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>: [*V*](README.md#v)<[*V9*](README.md#v9)<T, K1, K2, K3, K4, K5, K6, K7, K8, K9\>, K10\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | [*K*](README.md#k)<T\> |
`K2` | [*K*](README.md#k)<[*V*](README.md#v)<T, K1\>\> |
`K3` | [*K*](README.md#k)<[*V2*](README.md#v2)<T, K1, K2\>\> |
`K4` | [*K*](README.md#k)<[*V3*](README.md#v3)<T, K1, K2, K3\>\> |
`K5` | [*K*](README.md#k)<[*V4*](README.md#v4)<T, K1, K2, K3, K4\>\> |
`K6` | [*K*](README.md#k)<[*V5*](README.md#v5)<T, K1, K2, K3, K4, K5\>\> |
`K7` | [*K*](README.md#k)<[*V6*](README.md#v6)<T, K1, K2, K3, K4, K5, K6\>\> |
`K8` | [*K*](README.md#k)<[*V7*](README.md#v7)<T, K1, K2, K3, K4, K5, K6, K7\>\> |
`K9` | [*K*](README.md#k)<[*V8*](README.md#v8)<T, K1, K2, K3, K4, K5, K6, K7, K8\>\> |
`K10` | [*K*](README.md#k)<[*V9*](README.md#v9)<T, K1, K2, K3, K4, K5, K6, K7, K8, K9\>\> |

___

### V2

Ƭ **V2**<T, K1, K2\>: [*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | [*K*](README.md#k)<T\> |
`K2` | [*K*](README.md#k)<[*V*](README.md#v)<T, K1\>\> |

___

### V3

Ƭ **V3**<T, K1, K2, K3\>: [*V*](README.md#v)<[*V2*](README.md#v2)<T, K1, K2\>, K3\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | [*K*](README.md#k)<T\> |
`K2` | [*K*](README.md#k)<[*V*](README.md#v)<T, K1\>\> |
`K3` | [*K*](README.md#k)<[*V2*](README.md#v2)<T, K1, K2\>\> |

___

### V4

Ƭ **V4**<T, K1, K2, K3, K4\>: [*V*](README.md#v)<[*V3*](README.md#v3)<T, K1, K2, K3\>, K4\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | [*K*](README.md#k)<T\> |
`K2` | [*K*](README.md#k)<[*V*](README.md#v)<T, K1\>\> |
`K3` | [*K*](README.md#k)<[*V2*](README.md#v2)<T, K1, K2\>\> |
`K4` | [*K*](README.md#k)<[*V3*](README.md#v3)<T, K1, K2, K3\>\> |

___

### V5

Ƭ **V5**<T, K1, K2, K3, K4, K5\>: [*V*](README.md#v)<[*V4*](README.md#v4)<T, K1, K2, K3, K4\>, K5\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | [*K*](README.md#k)<T\> |
`K2` | [*K*](README.md#k)<[*V*](README.md#v)<T, K1\>\> |
`K3` | [*K*](README.md#k)<[*V2*](README.md#v2)<T, K1, K2\>\> |
`K4` | [*K*](README.md#k)<[*V3*](README.md#v3)<T, K1, K2, K3\>\> |
`K5` | [*K*](README.md#k)<[*V4*](README.md#v4)<T, K1, K2, K3, K4\>\> |

___

### V6

Ƭ **V6**<T, K1, K2, K3, K4, K5, K6\>: [*V*](README.md#v)<[*V5*](README.md#v5)<T, K1, K2, K3, K4, K5\>, K6\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | [*K*](README.md#k)<T\> |
`K2` | [*K*](README.md#k)<[*V*](README.md#v)<T, K1\>\> |
`K3` | [*K*](README.md#k)<[*V2*](README.md#v2)<T, K1, K2\>\> |
`K4` | [*K*](README.md#k)<[*V3*](README.md#v3)<T, K1, K2, K3\>\> |
`K5` | [*K*](README.md#k)<[*V4*](README.md#v4)<T, K1, K2, K3, K4\>\> |
`K6` | [*K*](README.md#k)<[*V5*](README.md#v5)<T, K1, K2, K3, K4, K5\>\> |

___

### V7

Ƭ **V7**<T, K1, K2, K3, K4, K5, K6, K7\>: [*V*](README.md#v)<[*V6*](README.md#v6)<T, K1, K2, K3, K4, K5, K6\>, K7\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | [*K*](README.md#k)<T\> |
`K2` | [*K*](README.md#k)<[*V*](README.md#v)<T, K1\>\> |
`K3` | [*K*](README.md#k)<[*V2*](README.md#v2)<T, K1, K2\>\> |
`K4` | [*K*](README.md#k)<[*V3*](README.md#v3)<T, K1, K2, K3\>\> |
`K5` | [*K*](README.md#k)<[*V4*](README.md#v4)<T, K1, K2, K3, K4\>\> |
`K6` | [*K*](README.md#k)<[*V5*](README.md#v5)<T, K1, K2, K3, K4, K5\>\> |
`K7` | [*K*](README.md#k)<[*V6*](README.md#v6)<T, K1, K2, K3, K4, K5, K6\>\> |

___

### V8

Ƭ **V8**<T, K1, K2, K3, K4, K5, K6, K7, K8\>: [*V*](README.md#v)<[*V7*](README.md#v7)<T, K1, K2, K3, K4, K5, K6, K7\>, K8\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | [*K*](README.md#k)<T\> |
`K2` | [*K*](README.md#k)<[*V*](README.md#v)<T, K1\>\> |
`K3` | [*K*](README.md#k)<[*V2*](README.md#v2)<T, K1, K2\>\> |
`K4` | [*K*](README.md#k)<[*V3*](README.md#v3)<T, K1, K2, K3\>\> |
`K5` | [*K*](README.md#k)<[*V4*](README.md#v4)<T, K1, K2, K3, K4\>\> |
`K6` | [*K*](README.md#k)<[*V5*](README.md#v5)<T, K1, K2, K3, K4, K5\>\> |
`K7` | [*K*](README.md#k)<[*V6*](README.md#v6)<T, K1, K2, K3, K4, K5, K6\>\> |
`K8` | [*K*](README.md#k)<[*V7*](README.md#v7)<T, K1, K2, K3, K4, K5, K6, K7\>\> |

___

### V9

Ƭ **V9**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9\>: [*V*](README.md#v)<[*V8*](README.md#v8)<T, K1, K2, K3, K4, K5, K6, K7, K8\>, K9\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | [*K*](README.md#k)<T\> |
`K2` | [*K*](README.md#k)<[*V*](README.md#v)<T, K1\>\> |
`K3` | [*K*](README.md#k)<[*V2*](README.md#v2)<T, K1, K2\>\> |
`K4` | [*K*](README.md#k)<[*V3*](README.md#v3)<T, K1, K2, K3\>\> |
`K5` | [*K*](README.md#k)<[*V4*](README.md#v4)<T, K1, K2, K3, K4\>\> |
`K6` | [*K*](README.md#k)<[*V5*](README.md#v5)<T, K1, K2, K3, K4, K5\>\> |
`K7` | [*K*](README.md#k)<[*V6*](README.md#v6)<T, K1, K2, K3, K4, K5, K6\>\> |
`K8` | [*K*](README.md#k)<[*V7*](README.md#v7)<T, K1, K2, K3, K4, K5, K6, K7\>\> |
`K9` | [*K*](README.md#k)<[*V8*](README.md#v8)<T, K1, K2, K3, K4, K5, K6, K7, K8\>\> |

## Variables

### baseOp

• `Const` **baseOp**: *object*

#### Type declaration:

Name | Type |
------ | ------ |
`first` | *symbol* |
`last` | *symbol* |

___

### jsonPathSymbol

• `Const` **jsonPathSymbol**: *typeof* [*jsonPathSymbol*](README.md#jsonpathsymbol)

___

### mapTo

• `Const` **mapTo**: *typeof* [*mapTo*](README.md#mapto)

___

### none

• `Const` **none**: *typeof* [*none*](README.md#none)

## Functions

### $

▸ **$**<T\>(): [*ExtenderExpression*](README.md#extenderexpression)<T, T\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*ExtenderExpression*](README.md#extenderexpression)<T, T\>

▸ **$**<T, K1\>(`field1`: K1): [*BaseExpression*](interfaces/baseexpression.md)<T, [*V*](README.md#v)<T, K1\>\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, [*V*](README.md#v)<T, K1\>\>

▸ **$**<T, K1, K2\>(`field1`: K1, `field2`: K2): [*BaseExpression*](interfaces/baseexpression.md)<T, [*V2*](README.md#v2)<T, K1, K2\>\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, [*V2*](README.md#v2)<T, K1, K2\>\>

▸ **$**<T, K1, K2, K3\>(`field1`: K1, `field2`: K2, `field3`: K3): [*BaseExpression*](interfaces/baseexpression.md)<T, [*V3*](README.md#v3)<T, K1, K2, K3\>\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> | - |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> | - |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> | [*K*](README.md#k)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>\> |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, [*V3*](README.md#v3)<T, K1, K2, K3\>\>

▸ **$**<T, K1, K2, K3, K4\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4): [*BaseExpression*](interfaces/baseexpression.md)<T, [*V4*](README.md#v4)<T, K1, K2, K3, K4\>\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> | - |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> | - |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> | - |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> | [*K*](README.md#k)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>\> |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, [*V4*](README.md#v4)<T, K1, K2, K3, K4\>\>

▸ **$**<T, K1, K2, K3, K4, K5\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5): [*BaseExpression*](interfaces/baseexpression.md)<T, [*V5*](README.md#v5)<T, K1, K2, K3, K4, K5\>\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> | - |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> | - |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> | - |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> | - |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> | [*K*](README.md#k)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>\> |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, [*V5*](README.md#v5)<T, K1, K2, K3, K4, K5\>\>

▸ **$**<T, K1, K2, K3, K4, K5, K6\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6): [*BaseExpression*](interfaces/baseexpression.md)<T, [*V6*](README.md#v6)<T, K1, K2, K3, K4, K5, K6\>\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> | - |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> | - |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> | - |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> | - |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> | - |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> | [*K*](README.md#k)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>\> |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, [*V6*](README.md#v6)<T, K1, K2, K3, K4, K5, K6\>\>

▸ **$**<T, K1, K2, K3, K4, K5, K6, K7\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7): [*BaseExpression*](interfaces/baseexpression.md)<T, [*V7*](README.md#v7)<T, K1, K2, K3, K4, K5, K6, K7\>\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |
`field7` | K7 |

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, [*V7*](README.md#v7)<T, K1, K2, K3, K4, K5, K6, K7\>\>

▸ **$**<T, K1, K2, K3, K4, K5, K6, K7, K8\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8): [*BaseExpression*](interfaces/baseexpression.md)<T, [*V8*](README.md#v8)<T, K1, K2, K3, K4, K5, K6, K7, K8\>\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |
`K8` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |
`field7` | K7 |
`field8` | K8 |

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, [*V8*](README.md#v8)<T, K1, K2, K3, K4, K5, K6, K7, K8\>\>

▸ **$**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9): [*BaseExpression*](interfaces/baseexpression.md)<T, [*V9*](README.md#v9)<T, K1, K2, K3, K4, K5, K6, K7, K8, K9\>\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |
`K8` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, *any*\> |
`K9` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |
`field7` | K7 |
`field8` | K8 |
`field9` | K9 |

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, [*V9*](README.md#v9)<T, K1, K2, K3, K4, K5, K6, K7, K8, K9\>\>

▸ **$**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9, `field10`: K10): [*BaseExpression*](interfaces/baseexpression.md)<T, [*V10*](README.md#v10)<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |
`K8` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, *any*\> |
`K9` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, *any*\> |
`K10` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, K9\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |
`field7` | K7 |
`field8` | K8 |
`field9` | K9 |
`field10` | K10 |

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, [*V10*](README.md#v10)<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>\>

▸ **$**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9, `field10`: K10, `field11`: [*FieldType*](README.md#fieldtype), ...`others`: [*FieldType*](README.md#fieldtype)[]): [*BaseExpression*](interfaces/baseexpression.md)<T, *any*\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |
`K8` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, *any*\> |
`K9` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, *any*\> |
`K10` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, K9\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |
`field7` | K7 |
`field8` | K8 |
`field9` | K9 |
`field10` | K10 |
`field11` | [*FieldType*](README.md#fieldtype) |
`...others` | [*FieldType*](README.md#fieldtype)[] |

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, *any*\>

___

### applyFallback

▸ **applyFallback**<T, R, F\>(`func`: [*Expression*](README.md#expression)<T, R\>, `fallbackValue`: F): [*Expression*](README.md#expression)<T, R\>

Applies the given fallback for the Expression

#### Type parameters:

Name |
------ |
`T` |
`R` |
`F` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`func` | [*Expression*](README.md#expression)<T, R\> | The expression you to apply the fallback   |
`fallbackValue` | F | the fallback    |

**Returns:** [*Expression*](README.md#expression)<T, R\>

___

### get

▸ **get**<T, K1\>(`source`: T, `field1`: K1): [*V*](README.md#v)<T, K1\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`field1` | K1 |

**Returns:** [*V*](README.md#v)<T, K1\> \| *undefined*

▸ **get**<T, K1, K2\>(`source`: T, `field1`: K1, `field2`: K2): [*V2*](README.md#v2)<T, K1, K2\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`field1` | K1 |
`field2` | K2 |

**Returns:** [*V2*](README.md#v2)<T, K1, K2\> \| *undefined*

▸ **get**<T, K1, K2, K3\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3): [*V3*](README.md#v3)<T, K1, K2, K3\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |

**Returns:** [*V3*](README.md#v3)<T, K1, K2, K3\> \| *undefined*

▸ **get**<T, K1, K2, K3, K4\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4): [*V4*](README.md#v4)<T, K1, K2, K3, K4\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |

**Returns:** [*V4*](README.md#v4)<T, K1, K2, K3, K4\> \| *undefined*

▸ **get**<T, K1, K2, K3, K4, K5\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5): [*V5*](README.md#v5)<T, K1, K2, K3, K4, K5\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |

**Returns:** [*V5*](README.md#v5)<T, K1, K2, K3, K4, K5\> \| *undefined*

▸ **get**<T, K1, K2, K3, K4, K5, K6\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6): [*V6*](README.md#v6)<T, K1, K2, K3, K4, K5, K6\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |

**Returns:** [*V6*](README.md#v6)<T, K1, K2, K3, K4, K5, K6\> \| *undefined*

▸ **get**<T, K1, K2, K3, K4, K5, K6, K7\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7): [*V7*](README.md#v7)<T, K1, K2, K3, K4, K5, K6, K7\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |
`field7` | K7 |

**Returns:** [*V7*](README.md#v7)<T, K1, K2, K3, K4, K5, K6, K7\> \| *undefined*

▸ **get**<T, K1, K2, K3, K4, K5, K6, K7, K8\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8): [*V8*](README.md#v8)<T, K1, K2, K3, K4, K5, K6, K7, K8\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |
`K8` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |
`field7` | K7 |
`field8` | K8 |

**Returns:** [*V8*](README.md#v8)<T, K1, K2, K3, K4, K5, K6, K7, K8\> \| *undefined*

▸ **get**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9): [*V9*](README.md#v9)<T, K1, K2, K3, K4, K5, K6, K7, K8, K9\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |
`K8` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, *any*\> |
`K9` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |
`field7` | K7 |
`field8` | K8 |
`field9` | K9 |

**Returns:** [*V9*](README.md#v9)<T, K1, K2, K3, K4, K5, K6, K7, K8, K9\> \| *undefined*

▸ **get**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9, `field10`: K10): [*V10*](README.md#v10)<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |
`K8` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, *any*\> |
`K9` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, *any*\> |
`K10` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, K9\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |
`field7` | K7 |
`field8` | K8 |
`field9` | K9 |
`field10` | K10 |

**Returns:** [*V10*](README.md#v10)<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\> \| *undefined*

▸ **get**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9, `field10`: K10, `field11`: [*FieldType*](README.md#fieldtype), ...`others`: [*FieldType*](README.md#fieldtype)[]): *any* \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |
`K8` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, *any*\> |
`K9` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, *any*\> |
`K10` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, K9\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |
`field7` | K7 |
`field8` | K8 |
`field9` | K9 |
`field10` | K10 |
`field11` | [*FieldType*](README.md#fieldtype) |
`...others` | [*FieldType*](README.md#fieldtype)[] |

**Returns:** *any* \| *undefined*

___

### getOrDef

▸ **getOrDef**<T, F, K1\>(`source`: T, `fallback`: F, `field1`: K1): [*V*](README.md#v)<T, K1\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`F` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`fallback` | F |
`field1` | K1 |

**Returns:** [*V*](README.md#v)<T, K1\> \| *undefined*

▸ **getOrDef**<T, F, K1, K2\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2): [*V2*](README.md#v2)<T, K1, K2\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`F` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`fallback` | F |
`field1` | K1 |
`field2` | K2 |

**Returns:** [*V2*](README.md#v2)<T, K1, K2\> \| *undefined*

▸ **getOrDef**<T, F, K1, K2, K3\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3): [*V3*](README.md#v3)<T, K1, K2, K3\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`F` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |

**Returns:** [*V3*](README.md#v3)<T, K1, K2, K3\> \| *undefined*

▸ **getOrDef**<T, F, K1, K2, K3, K4\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4): [*V4*](README.md#v4)<T, K1, K2, K3, K4\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`F` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`fallback` | F |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |

**Returns:** [*V4*](README.md#v4)<T, K1, K2, K3, K4\> \| *undefined*

▸ **getOrDef**<T, F, K1, K2, K3, K4, K5\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5): [*V5*](README.md#v5)<T, K1, K2, K3, K4, K5\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`F` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`fallback` | F |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |

**Returns:** [*V5*](README.md#v5)<T, K1, K2, K3, K4, K5\> \| *undefined*

▸ **getOrDef**<T, F, K1, K2, K3, K4, K5, K6\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6): [*V6*](README.md#v6)<T, K1, K2, K3, K4, K5, K6\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`F` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`fallback` | F |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |

**Returns:** [*V6*](README.md#v6)<T, K1, K2, K3, K4, K5, K6\> \| *undefined*

▸ **getOrDef**<T, F, K1, K2, K3, K4, K5, K6, K7\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7): [*V7*](README.md#v7)<T, K1, K2, K3, K4, K5, K6, K7\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`F` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`fallback` | F |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |
`field7` | K7 |

**Returns:** [*V7*](README.md#v7)<T, K1, K2, K3, K4, K5, K6, K7\> \| *undefined*

▸ **getOrDef**<T, F, K1, K2, K3, K4, K5, K6, K7, K8\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8): [*V8*](README.md#v8)<T, K1, K2, K3, K4, K5, K6, K7, K8\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`F` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |
`K8` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`fallback` | F |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |
`field7` | K7 |
`field8` | K8 |

**Returns:** [*V8*](README.md#v8)<T, K1, K2, K3, K4, K5, K6, K7, K8\> \| *undefined*

▸ **getOrDef**<T, F, K1, K2, K3, K4, K5, K6, K7, K8, K9\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9): [*V9*](README.md#v9)<T, K1, K2, K3, K4, K5, K6, K7, K8, K9\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`F` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |
`K8` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, *any*\> |
`K9` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`fallback` | F |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |
`field7` | K7 |
`field8` | K8 |
`field9` | K9 |

**Returns:** [*V9*](README.md#v9)<T, K1, K2, K3, K4, K5, K6, K7, K8, K9\> \| *undefined*

▸ **getOrDef**<T, F, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9, `field10`: K10): [*V10*](README.md#v10)<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\> \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`F` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |
`K8` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, *any*\> |
`K9` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, *any*\> |
`K10` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, K9\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`fallback` | F |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |
`field7` | K7 |
`field8` | K8 |
`field9` | K9 |
`field10` | K10 |

**Returns:** [*V10*](README.md#v10)<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\> \| *undefined*

▸ **getOrDef**<T, F, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9, `field10`: K10, `field11`: [*FieldType*](README.md#fieldtype), ...`others`: [*FieldType*](README.md#fieldtype)[]): *any* \| *undefined*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`F` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |
`K8` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, *any*\> |
`K9` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, *any*\> |
`K10` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](README.md#propertymapper)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<[*V*](README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, K9\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`fallback` | F |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |
`field7` | K7 |
`field8` | K8 |
`field9` | K9 |
`field10` | K10 |
`field11` | [*FieldType*](README.md#fieldtype) |
`...others` | [*FieldType*](README.md#fieldtype)[] |

**Returns:** *any* \| *undefined*

___

### jsonPath

▸ **jsonPath**<T, R\>(`a`: [*Expression*](README.md#expression)<T, R\>): [*FieldType*](README.md#fieldtype)<*unknown*\>[]

Returns an iterable with the json path for the informed expression

#### Type parameters:

Name |
------ |
`T` |
`R` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`a` | [*Expression*](README.md#expression)<T, R\> | the expression to be analyzed   |

**Returns:** [*FieldType*](README.md#fieldtype)<*unknown*\>[]

an iterable with the json path for the informed expression

___

### setStrictness

▸ **setStrictness**<T, R\>(`accessor`: [*PropertyAccessor*](interfaces/propertyaccessor.md)<T, R\>, `strict`: *boolean*): [*PropertyAccessor*](interfaces/propertyaccessor.md)<T, R\>

Defines if an accessor must strict check the fallback or not.
Set to true if you want the accessor to throw an error when the path is not found and fallback is undefined
Se tto false if you want to always returns the fallback, even when it is undefined

#### Type parameters:

Name |
------ |
`T` |
`R` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`accessor` | [*PropertyAccessor*](interfaces/propertyaccessor.md)<T, R\> | The acessor to have the strictness changed   |
`strict` | *boolean* | the new value for strictness: true or false    |

**Returns:** [*PropertyAccessor*](interfaces/propertyaccessor.md)<T, R\>
