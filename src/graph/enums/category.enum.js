import { GraphQLEnumType } from 'graphql';

export const CategoryEnum = new GraphQLEnumType({
  name: 'Category',
  values: {
    APPETIZERS: { value: 'APPETIZERS' },
    ENTREES: { value: 'ENTREES' },
    SANDWICHES: { value: 'SANDWICHES' },
    SOUPS_AND_SALADS: { value: 'SOUPS_AND_SALADS' },
    SOUPS: { value: 'SOUPS' },
    SALADS: { value: 'SALADS' },
    FAJITAS: { value: 'FAJITAS' },
    TACOS: { value: 'TACOS' },
    ENCHILADAS: { value: 'ENCHILADAS' },
    QUICHES: { value: 'QUICHES' },
  }
});


