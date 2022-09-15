import { useEffect, useState } from 'react';
import { Image, View, FlatList } from 'react-native';

import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import logoImg from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch('http://172.17.56.252:3333/games')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImg} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
