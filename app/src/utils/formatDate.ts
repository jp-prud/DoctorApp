import {DATE_STYLES_FORMAT} from 'src/constants';

export default function formatDate(appointmentTime: string) {
  return new Date(appointmentTime).toLocaleString('pt-BR', DATE_STYLES_FORMAT);
}
