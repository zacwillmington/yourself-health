import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';
import { MenuItemInterface } from "../models/menu.interface.js"
import { CategoryEnum } from '../enums/category.enum.js';

export const Quiche = new GraphQLObjectType({
    name: 'Quiche',
    interfaces: [MenuItemInterface],
    fields: {
        name: { type: GraphQLString, nullable: false },
        description: { type: GraphQLString, nullable: false },
        price: { type: GraphQLFloat, nullable: false },
        category: { type: CategoryEnum, nullable: false },
    }
});

