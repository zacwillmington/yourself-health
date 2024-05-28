import { GraphQLObjectType, GraphQLEnumType, GraphQLString, GraphQLFloat } from 'graphql';
import { MenuItemInterface } from "../models/menu.interface.js"
import { CategoryEnum } from '../enums/category.enum.js';

const Temp = new GraphQLEnumType({
  name: 'Temp',
  values: {
    HOT: { value: 'HOT' },
    COLD: { value: 'COLD' },
  }
});

export const Sandwich = new GraphQLObjectType({
    name: 'Sandwich',
     interfaces: [MenuItemInterface],
    fields: {
        name: { type: GraphQLString, nullable: false },
        description: { type: GraphQLString, nullable: false },
        price: { type: GraphQLFloat, nullable: false },
        temp: { type: Temp, nullable: false },
        category: { type: CategoryEnum, nullnullable: false },
    }
});
