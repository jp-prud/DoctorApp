import {FlatList, ListRenderItemInfo} from 'react-native';

import {Category} from './Category';

import categories from 'src/data/Categories';

import {Container} from './styles';

import {CategoryProps} from 'src/@types';

export function CategoriesFilter() {
  function renderCategory({item}: ListRenderItemInfo<CategoryProps>) {
    return <Category {...item} />;
  }

  return (
    <Container>
      <FlatList
        data={categories}
        keyExtractor={({title}: CategoryProps) => title}
        renderItem={renderCategory}
        contentContainerStyle={{justifyContent: 'space-between', flexGrow: 1}}
        horizontal
      />
    </Container>
  );
}
