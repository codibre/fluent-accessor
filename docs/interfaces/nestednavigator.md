[fluent-iterable - v1.2.0](../README.md) / NestedNavigator

# Interface: NestedNavigator

## Hierarchy

* **NestedNavigator**

## Callable

▸ **NestedNavigator**<T\>(): [*BaseExpression*](baseexpression.md)<T, T\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*BaseExpression*](baseexpression.md)<T, T\>

▸ **NestedNavigator**<T, K1\>(`field1`: K1): [*BaseExpression*](baseexpression.md)<T, *number*\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<T, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |

**Returns:** [*BaseExpression*](baseexpression.md)<T, *number*\>

▸ **NestedNavigator**<T, K1, K2\>(`field1`: K1, `field2`: K2): [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<T, K1\>, *any*\> |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |

**Returns:** [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>\>

▸ **NestedNavigator**<T, K1, K2, K3\>(`field1`: K1, `field2`: K2, `field3`: K3): [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<T, *any*\> | - |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<T, K1\>, *any*\> | - |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, *any*\> | [*K*](../README.md#k)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>\> |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |

**Returns:** [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>\>

▸ **NestedNavigator**<T, K1, K2, K3, K4\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4): [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<T, *any*\> | - |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<T, K1\>, *any*\> | - |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, *any*\> | - |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, *any*\> | [*K*](../README.md#k)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>\> |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |

**Returns:** [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>\>

▸ **NestedNavigator**<T, K1, K2, K3, K4, K5\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5): [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<T, *any*\> | - |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<T, K1\>, *any*\> | - |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, *any*\> | - |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, *any*\> | - |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> | [*K*](../README.md#k)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>\> |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |

**Returns:** [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>\>

▸ **NestedNavigator**<T, K1, K2, K3, K4, K5, K6\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6): [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | - | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<T, *any*\> | - |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<T, K1\>, *any*\> | - |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, *any*\> | - |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, *any*\> | - |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> | - |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> | [*K*](../README.md#k)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>\> |

#### Parameters:

Name | Type |
------ | ------ |
`field1` | K1 |
`field2` | K2 |
`field3` | K3 |
`field4` | K4 |
`field5` | K5 |
`field6` | K6 |

**Returns:** [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>\>

▸ **NestedNavigator**<T, K1, K2, K3, K4, K5, K6, K7\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7): [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |

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

**Returns:** [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>\>

▸ **NestedNavigator**<T, K1, K2, K3, K4, K5, K6, K7, K8\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8): [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |
`K8` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, *any*\> |

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

**Returns:** [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>\>

▸ **NestedNavigator**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9): [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, K9\>\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |
`K8` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, *any*\> |
`K9` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, *any*\> |

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

**Returns:** [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, K9\>\>

▸ **NestedNavigator**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9, `field10`: K10): [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, K9\>, K10\>\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |
`K8` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, *any*\> |
`K9` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, *any*\> |
`K10` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, K9\>, *any*\> |

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

**Returns:** [*BaseExpression*](baseexpression.md)<T, [*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, K9\>, K10\>\>

▸ **NestedNavigator**<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10\>(`field1`: K1, `field2`: K2, `field3`: K3, `field4`: K4, `field5`: K5, `field6`: K6, `field7`: K7, `field8`: K8, `field9`: K9, `field10`: K10, `field11`: [*FieldType*](../README.md#fieldtype)<*unknown*\>, ...`others`: [*FieldType*](../README.md#fieldtype)<*unknown*\>[]): [*BaseExpression*](baseexpression.md)<T, *any*\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`K1` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<T, *any*\> |
`K2` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<T, K1\>, *any*\> |
`K3` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, *any*\> |
`K4` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, *any*\> |
`K5` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, *any*\> |
`K6` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, *any*\> |
`K7` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, *any*\> |
`K8` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, *any*\> |
`K9` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, *any*\> |
`K10` | *string* \| *number* \| *symbol* \| [*PropertyMapper*](../README.md#propertymapper)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<[*V*](../README.md#v)<T, K1\>, K2\>, K3\>, K4\>, K5\>, K6\>, K7\>, K8\>, K9\>, *any*\> |

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
`field11` | [*FieldType*](../README.md#fieldtype)<*unknown*\> |
`...others` | [*FieldType*](../README.md#fieldtype)<*unknown*\>[] |

**Returns:** [*BaseExpression*](baseexpression.md)<T, *any*\>
