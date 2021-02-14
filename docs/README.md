fluent-iterable - v0.0.7

# fluent-iterable - v0.0.7

## Table of contents

### Interfaces

- [PropertyAccessor](interfaces/propertyaccessor.md)

### Type aliases

- [Expression](README.md#expression)
- [FieldType](README.md#fieldtype)

### Variables

- [jsonPathSymbol](README.md#jsonpathsymbol)

### Functions

- [$](README.md#$)
- [applyFallback](README.md#applyfallback)
- [jsonPath](README.md#jsonpath)

## Type aliases

### Expression

Ƭ **Expression**<Input, Output\>: { [key in keyof Output]: Expression<Input, Output[key]\>} & [*PropertyAccessor*](interfaces/propertyaccessor.md)<Input, Output\> & { `__@jsonPathSymbol@22521`: () => (*string* \| *number* \| *symbol*)[]  }

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

## Functions

### $

▸ **$**<T\>(): [*Expression*](README.md#expression)<T\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Expression*](README.md#expression)<T\>

▸ **$**<T, K1\>(`field1`: K1): [*Expression*](README.md#expression)<T, T[K1]\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* | keyof T |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |

**Returns:** [*Expression*](README.md#expression)<T, T[K1]\>

▸ **$**<T, K1, K2\>(`field1`: K1, `field2`: K2): [*Expression*](README.md#expression)<T, T[K1][K2]\>

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

**Returns:** [*Expression*](README.md#expression)<T, T[K1][K2]\>

▸ **$**<T, K1, K2, K3\>(`field1`: K1, `field2`: K2, `field3`: K3): [*Expression*](README.md#expression)<T, T[K1][K2][K3]\>

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

**Returns:** [*Expression*](README.md#expression)<T, T[K1][K2][K3]\>

▸ **$**<T, K1, K2, K3, K4\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4): [*Expression*](README.md#expression)<T, T[K1][K2][K3][K4]\>

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

**Returns:** [*Expression*](README.md#expression)<T, T[K1][K2][K3][K4]\>

▸ **$**<T, K1, K2, K3, K4, K5\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5): [*Expression*](README.md#expression)<T, T[K1][K2][K3][K4][K5]\>

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

**Returns:** [*Expression*](README.md#expression)<T, T[K1][K2][K3][K4][K5]\>

▸ **$**<T, K1, K2, K3, K4, K5, K6\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6): [*Expression*](README.md#expression)<T, T[K1][K2][K3][K4][K5][K6]\>

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

**Returns:** [*Expression*](README.md#expression)<T, T[K1][K2][K3][K4][K5][K6]\>

▸ **$**<T, K1, K2, K3, K4, K5, K6, K7\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7): [*Expression*](README.md#expression)<T, T[K1][K2][K3][K4][K5][K6][K7]\>

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

**Returns:** [*Expression*](README.md#expression)<T, T[K1][K2][K3][K4][K5][K6][K7]\>

▸ **$**<T, K1, K2, K3, K4, K5, K6, K7, K8\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8): [*Expression*](README.md#expression)<T, T[K1][K2][K3][K4][K5][K6][K7][K8]\>

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

**Returns:** [*Expression*](README.md#expression)<T, T[K1][K2][K3][K4][K5][K6][K7][K8]\>

▸ **$**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9): [*Expression*](README.md#expression)<T, T[K1][K2][K3][K4][K5][K6][K7][K8][K9]\>

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

**Returns:** [*Expression*](README.md#expression)<T, T[K1][K2][K3][K4][K5][K6][K7][K8][K9]\>

▸ **$**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9, `field10`: K10): [*Expression*](README.md#expression)<T, T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10]\>

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

**Returns:** [*Expression*](README.md#expression)<T, T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10]\>

▸ **$**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9, `field10`: K10, `field11`: [*FieldType*](README.md#fieldtype), ...`others`: [*FieldType*](README.md#fieldtype)[]): [*Expression*](README.md#expression)<T, *any*\>

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

**Returns:** [*Expression*](README.md#expression)<T, *any*\>

___

### applyFallback

▸ **applyFallback**<A, B, C\>(`expression`: [*Expression*](README.md#expression)<A, B\>, `fallback`: C): *function*

Returns a accessor function with a fallback value

#### Type parameters:

Name |
------ |
`A` |
`B` |
`C` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`expression` | [*Expression*](README.md#expression)<A, B\> | the base accessor expression   |
`fallback` | C | the fallback value in case of some property in the expression path does not exist   |

**Returns:** *function*

An accessor function with an applied fallback

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
