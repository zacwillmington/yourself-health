import { GraphQLInterfaceType, GraphQLFloat, GraphQLString } from 'graphql';
import { CategoryEnum } from "../enums/category.enum.js";

export const MenuItemInterface = new GraphQLInterfaceType({
    name: 'MenuItem',
    fields: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
        category: { type: CategoryEnum }
    }
});
