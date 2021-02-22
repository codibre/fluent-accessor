fluent-iterable - v1.1.1

# fluent-iterable - v1.1.1

## Table of contents

### Interfaces

- [BaseExpression](interfaces/baseexpression.md)
- [PropertyAccessor](interfaces/propertyaccessor.md)

### Type aliases

- [Expression](README.md#expression)
- [ExtenderExpression](README.md#extenderexpression)
- [FieldType](README.md#fieldtype)

### Variables

- [jsonPathSymbol](README.md#jsonpathsymbol)
- [none](README.md#none)

### Functions

- [$](README.md#$)
- [applyFallback](README.md#applyfallback)
- [get](README.md#get)
- [getOrDef](README.md#getordef)
- [jsonPath](README.md#jsonpath)
- [setStrictness](README.md#setstrictness)

## Type aliases

### Expression

Ƭ **Expression**<Input, Output\>: [*BaseExpression*](interfaces/baseexpression.md)<Input, Output\> \| [*ExtenderExpression*](README.md#extenderexpression)<Input, Output\>

#### Type parameters:

Name | Default |
------ | ------ |
`Input` | - |
`Output` | Input |

___

### ExtenderExpression

Ƭ **ExtenderExpression**<Input, Output\>: { [key in keyof Output]: ExtenderExpression<Input, Output[key]\>} & [*PropertyAccessor*](interfaces/propertyaccessor.md)<Input, Output\> & { `__@jsonPathSymbol@22525`: () => (*string* \| *number* \| *symbol*)[] ; `__@mapTo@22516`: <T\>(`mapper`: (`a`: Output) => T) => [*ExtenderExpression*](README.md#extenderexpression)<Input, T\>  }

#### Type parameters:

Name | Default |
------ | ------ |
`Input` | - |
`Output` | Input |

___

### FieldType

Ƭ **FieldType**: *string* \| *number* \| *symbol*

## Variables

### jsonPathSymbol

• `Const` **jsonPathSymbol**: *typeof* [*jsonPathSymbol*](README.md#jsonpathsymbol)

___

### none

• `Const` **none**: *typeof* [*none*](README.md#none)

## Functions

### $

▸ **$**<T\>(): [*ExtenderExpression*](README.md#extenderexpression)<T\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*ExtenderExpression*](README.md#extenderexpression)<T\>

▸ **$**<T, K1\>(`field1`: K1): [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1]\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1]\>

▸ **$**<T, K1, K2\>(`field1`: K1, `field2`: K2): [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2]\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2]\>

▸ **$**<T, K1, K2, K3\>(`field1`: K1, `field2`: K2, `field3`: K3): [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2][K3]\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2][K3]\>

▸ **$**<T, K1, K2, K3, K4\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4): [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2][K3][K4]\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2][K3][K4]\>

▸ **$**<T, K1, K2, K3, K4, K5\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5): [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2][K3][K4][K5]\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2][K3][K4][K5]\>

▸ **$**<T, K1, K2, K3, K4, K5, K6\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6): [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2][K3][K4][K5][K6]\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2][K3][K4][K5][K6]\>

▸ **$**<T, K1, K2, K3, K4, K5, K6, K7\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7): [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2][K3][K4][K5][K6][K7]\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |
`K7` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6] |

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

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2][K3][K4][K5][K6][K7]\>

▸ **$**<T, K1, K2, K3, K4, K5, K6, K7, K8\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8): [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2][K3][K4][K5][K6][K7][K8]\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |
`K7` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6] |
`K8` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7] |

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

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2][K3][K4][K5][K6][K7][K8]\>

▸ **$**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9): [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2][K3][K4][K5][K6][K7][K8][K9]\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |
`K7` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6] |
`K8` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7] |
`K9` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7][K8] |

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

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2][K3][K4][K5][K6][K7][K8][K9]\>

▸ **$**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9, `field10`: K10): [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10]\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |
`K7` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6] |
`K8` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7] |
`K9` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7][K8] |
`K10` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9] |

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

**Returns:** [*BaseExpression*](interfaces/baseexpression.md)<T, T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10]\>

▸ **$**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9, `field10`: K10, `field11`: [*FieldType*](README.md#fieldtype), ...`others`: [*FieldType*](README.md#fieldtype)[]): [*BaseExpression*](interfaces/baseexpression.md)<T, *any*\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |
`K7` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6] |
`K8` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7] |
`K9` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7][K8] |
`K10` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9] |

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

▸ **get**<T, K1\>(`source`: T, `field1`: K1): T[K1] \| *undefined*

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`field1` | K1 |

**Returns:** T[K1] \| *undefined*

▸ **get**<T, K1, K2\>(`source`: T, `field1`: K1, `field2`: K2): T[K1][K2] \| *undefined*

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`field1` | K1 |
`field2` | K2 |

**Returns:** T[K1][K2] \| *undefined*

▸ **get**<T, K1, K2, K3\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3): T[K1][K2][K3] \| *undefined*

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |

**Returns:** T[K1][K2][K3] \| *undefined*

▸ **get**<T, K1, K2, K3, K4\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4): T[K1][K2][K3][K4] \| *undefined*

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |

**Returns:** T[K1][K2][K3][K4] \| *undefined*

▸ **get**<T, K1, K2, K3, K4, K5\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5): T[K1][K2][K3][K4][K5] \| *undefined*

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |

**Returns:** T[K1][K2][K3][K4][K5] \| *undefined*

▸ **get**<T, K1, K2, K3, K4, K5, K6\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6): T[K1][K2][K3][K4][K5][K6] \| *undefined*

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |

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

**Returns:** T[K1][K2][K3][K4][K5][K6] \| *undefined*

▸ **get**<T, K1, K2, K3, K4, K5, K6, K7\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7): T[K1][K2][K3][K4][K5][K6][K7] \| *undefined*

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |
`K7` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6] |

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

**Returns:** T[K1][K2][K3][K4][K5][K6][K7] \| *undefined*

▸ **get**<T, K1, K2, K3, K4, K5, K6, K7, K8\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8): T[K1][K2][K3][K4][K5][K6][K7][K8] \| *undefined*

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |
`K7` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6] |
`K8` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7] |

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

**Returns:** T[K1][K2][K3][K4][K5][K6][K7][K8] \| *undefined*

▸ **get**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9): T[K1][K2][K3][K4][K5][K6][K7][K8][K9] \| *undefined*

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |
`K7` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6] |
`K8` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7] |
`K9` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7][K8] |

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

**Returns:** T[K1][K2][K3][K4][K5][K6][K7][K8][K9] \| *undefined*

▸ **get**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9, `field10`: K10): T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10] \| *undefined*

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |
`K7` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6] |
`K8` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7] |
`K9` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7][K8] |
`K10` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9] |

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

**Returns:** T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10] \| *undefined*

▸ **get**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>(`source`: T, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9, `field10`: K10, `field11`: [*FieldType*](README.md#fieldtype), ...`others`: [*FieldType*](README.md#fieldtype)[]): *any* \| *undefined*

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |
`K7` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6] |
`K8` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7] |
`K9` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7][K8] |
`K10` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9] |

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

▸ **getOrDef**<T, F, K1\>(`source`: T, `fallback`: F, `field1`: K1): T[K1] \| F

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`F` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`fallback` | F |
`field1` | K1 |

**Returns:** T[K1] \| F

▸ **getOrDef**<T, F, K1, K2\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2): T[K1][K2] \| F

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`F` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`fallback` | F |
`field1` | K1 |
`field2` | K2 |

**Returns:** T[K1][K2] \| F

▸ **getOrDef**<T, F, K1, K2, K3\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2, `field3`: K3): T[K1][K2][K3] \| F

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`F` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`fallback` | F |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |

**Returns:** T[K1][K2][K3] \| F

▸ **getOrDef**<T, F, K1, K2, K3, K4\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4): T[K1][K2][K3][K4] \| F

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`F` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |

#### Parameters:

Name | Type |
------ | ------ |
`source` | T |
`fallback` | F |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |

**Returns:** T[K1][K2][K3][K4] \| F

▸ **getOrDef**<T, F, K1, K2, K3, K4, K5\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5): T[K1][K2][K3][K4][K5] \| F

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`F` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |

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

**Returns:** T[K1][K2][K3][K4][K5] \| F

▸ **getOrDef**<T, F, K1, K2, K3, K4, K5, K6\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6): T[K1][K2][K3][K4][K5][K6] \| F

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`F` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |

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

**Returns:** T[K1][K2][K3][K4][K5][K6] \| F

▸ **getOrDef**<T, F, K1, K2, K3, K4, K5, K6, K7\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7): T[K1][K2][K3][K4][K5][K6][K7] \| F

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`F` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |
`K7` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6] |

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

**Returns:** T[K1][K2][K3][K4][K5][K6][K7] \| F

▸ **getOrDef**<T, F, K1, K2, K3, K4, K5, K6, K7, K8\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8): T[K1][K2][K3][K4][K5][K6][K7][K8] \| F

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`F` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |
`K7` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6] |
`K8` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7] |

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

**Returns:** T[K1][K2][K3][K4][K5][K6][K7][K8] \| F

▸ **getOrDef**<T, F, K1, K2, K3, K4, K5, K6, K7, K8, K9\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9): T[K1][K2][K3][K4][K5][K6][K7][K8][K9] \| F

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`F` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |
`K7` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6] |
`K8` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7] |
`K9` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7][K8] |

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

**Returns:** T[K1][K2][K3][K4][K5][K6][K7][K8][K9] \| F

▸ **getOrDef**<T, F, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9, `field10`: K10): T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10] \| F

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`F` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |
`K7` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6] |
`K8` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7] |
`K9` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7][K8] |
`K10` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9] |

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

**Returns:** T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10] \| F

▸ **getOrDef**<T, F, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>(`source`: T, `fallback`: F, `field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9, `field10`: K10, `field11`: [*FieldType*](README.md#fieldtype), ...`others`: [*FieldType*](README.md#fieldtype)[]): *any* \| F

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`F` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |
`K2` | *string* \| *number* \| *symbol* | keyof T[K1] |
`K3` | *string* \| *number* \| *symbol* | keyof T[K1][K2] |
`K4` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3] |
`K5` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4] |
`K6` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5] |
`K7` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6] |
`K8` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7] |
`K9` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7][K8] |
`K10` | *string* \| *number* \| *symbol* | keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9] |

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

**Returns:** *any* \| F

___

### jsonPath

▸ **jsonPath**<T, R\>(`a`: [*Expression*](README.md#expression)<T, R\>): (*string* \| *number* \| *symbol*)[]

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

**Returns:** (*string* \| *number* \| *symbol*)[]

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
