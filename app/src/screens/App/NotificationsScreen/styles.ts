import styled from 'styled-components/native';

import {FlatList} from 'react-native';

import ViewWrapper from '@components/atomic/ViewWrapper';
import { NotificationGroup } from './NotificationsScreen';

export const Container = styled(ViewWrapper)``;

export const NotificationsList = styled.FlatList<NotificationGroup>``;

export const DayListContainer = styled(FlatList)``;

