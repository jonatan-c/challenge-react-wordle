/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { words } from '../data/words';

export function getRandomWords(words: string[]): string {
	const randomWord = words[Math.floor(Math.random() * words.length)];

	return randomWord.toUpperCase();
}

export function isValidWord(word: string) {
	return words.includes(word.toLowerCase());
}
