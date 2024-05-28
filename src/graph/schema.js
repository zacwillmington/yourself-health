import { GraphQLObjectType, GraphQLSchema, GraphQLList } from 'graphql';
import MenuService from "../services/menu.service.js"
import { MenuItemInterface } from "../graph/models/menu.interface.js"
import {Sandwich} from './models/sandwich.object.js';
import {Entree} from './models/entree.object.js';
import { Appetizer } from './models/appetizer.object.js';

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        appetizers: {
            type: new GraphQLList(Appetizer),
            resolve() {
                return MenuService.getAppetizers();
            }
        },
        entrees: {
            type: new GraphQLList(Entree),
            resolve() {
                return MenuService.getEntrees();
            }
        }, 
        hotSandwiches: {
            type: new GraphQLList(Sandwich),
            resolve() {
                return MenuService.getSandwiches({ temp: "HOT" });
            }
        },
        coldSandwiches: {
            type: new GraphQLList(Sandwich),
            resolve() {
                return MenuService.getSandwiches({ temp: "COLD" });
            }
        },
        //TODO: Other queries
    }
});

export const schema = new GraphQLSchema({
    query: RootQueryType
});

