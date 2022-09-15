import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardProps {
  id: string;
  name: string;
  weekDays: string[];
  useVoiceChannel: boolean;
  yearsPlaying: number;
  hourEnd: string;
  hourStart: string;
}

interface Props {
  data: DuoCardProps;
}

export function DuoCard({ data }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />
      <DuoInfo label="Tempo de jogo" value={`$`} />
      <DuoInfo label="Disponibilidade" value="3 dias . 18h - 20h" />
      <DuoInfo label="Chamada de áudio?" value="Sim" colorValue="green" />
    </View>
  );
}
