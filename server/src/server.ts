// const express = require('express');   "type": "commonjs",
import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient({ log: ['query'] });

const PORT = 3333;

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany();

  return res.status(200).json(games);
});

app.post('/ads', (req, res) => {
  return res.status(201).json([]);
});

app.get('/games/:id/ads', (req, res) => {
  // const gameId = req.params.id;

  return res.status(200).json([
    { id: 1, name: 'Anúncio 1' },
    { id: 2, name: 'Anúncio 2' },
    { id: 3, name: 'Anúncio 3' },
  ]);
});

app.get('/ads/:id/discord', (req, res) => {
  // const adId = req.params.id;

  return res.status(200).json([]);
});

app.listen(PORT, console.log(`Rodando na porta - ${PORT}`)!);
