import {FlatList, ListRenderItemInfo} from 'react-native';

import {Category} from './Category';

import {useQuery} from '@tanstack/react-query';

import {Container} from './styles';

import {CategoryProps} from 'src/@types';
import SpecialitiesService from '@services/SpecialitiesService';

export function CategoriesFilter() {
  const {
    data: specialitiesList,
    isLoading,
    error,
  } = useQuery<CategoryProps[]>(['specialities'], loadSpecialities);

  async function loadSpecialities() {
    const {data} = await SpecialitiesService.findAll();

    return data;
  }

  function renderCategory({item}: ListRenderItemInfo<CategoryProps>) {
    return <Category {...item} isSelected={false} />;
  }

  return (
    <Container>
      {!isLoading && !error && (
        <FlatList
          data={specialitiesList}
          keyExtractor={({_id}: CategoryProps) => _id}
          renderItem={renderCategory}
          contentContainerStyle={{justifyContent: 'space-between', flexGrow: 1}}
          horizontal
        />
      )}
    </Container>
  );
}
