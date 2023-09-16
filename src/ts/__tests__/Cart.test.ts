import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';
import { resolvePlugin } from '@babel/core';

test('add all 3', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie('Avengers', 2012, 'USA', 'Avengers Assemble!', ['sci-fi', 'action', 'fantasy', 'adventure'], 137));
  const result = cart.items.length
  expect(result).toBe(3);
});