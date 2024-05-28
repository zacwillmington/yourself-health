import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';
import { MenuItemInterface } from "../models/menu.interface.js"
import { CategoryEnum } from '../enums/category.enum.js';

export const Appetizer = new GraphQLObjectType({
    name: 'Appetizer',
    interfaces: [MenuItemInterface],
    fields: {
        name: { type: GraphQLString, nullable: false },
        description: { type: GraphQLString, nullable: false },
        price: { type: GraphQLFloat, nullable: false },
        category: { type: CategoryEnum, nullable: false },
    }
});

