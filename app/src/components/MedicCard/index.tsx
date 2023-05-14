import {PlusCircle} from '@components/atomic/Icons/PlusIcon';

import {
  Container,
  Image,
  Details,
  Title,
  Description,
  AddButton,
} from './styles';

import {MedicProps} from 'src/@types';

export type MedicCardProps = MedicProps & {
  handleMakeAnAppointment: (
    medicData: Pick<MedicProps, 'name' | 'specialization'>,
  ) => void;
};

export function MedicCard({
  name,
  description,
  specialization,
  image_url = 'https://reactnative.dev/img/tiny_logo.png',
  handleMakeAnAppointment,
}: MedicCardProps) {
  return (
    <Container>
      <Image
        source={{
          uri: image_url,
        }}
      />

      <Details>
        <Title size="MD" weight={700} color="GRAY_500">
          {name}
        </Title>

        <Description size="SM" color="GRAY_400">
          {description}
        </Description>

        <AddButton
          onPress={() =>
            handleMakeAnAppointment({
              name,
              specialization,
            })
          }>
          <PlusCircle />
        </AddButton>
      </Details>
    </Container>
  );
}
