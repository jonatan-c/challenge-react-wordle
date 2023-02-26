/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable no-useless-return */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useWindow } from '../hooks/useWindow';
import { getRandomWords, isValidWord } from '../services/getRandomWord';
import RowCompleted from './RowCompleted';
import RowCurrent from './RowCurrent';
import RowEmpty from './RowEmpty';
import { words } from '../data/words';
import Keyboard from './Keyboard';
import Header from './Header';
import { keys } from '../data/keys';
import { GameStatus } from '../data/gameStatus';
import {
	activeModalInfo,
	activeOpenModalStatistics,
	addCompletedWord,
	addTurnPlay,
	initialInputWord,
	initialTurnPlay,
	intialCompletedWord,
	onInputWordPlay,
	setWordToPlay,
} from '../store/wordleGame';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

const WordleApp = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const { wordOfTheDay, turn, currentWord, completedWords } = useAppSelector(
		(state) => state.wordleGame
	);
	const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);
	const [winModal, setWinModal] = useState<boolean>(false);
	const [timeLeft, setTimeLeft] = useState(300);

	useWindow('keydown', handleKeyDown);

	useEffect(() => {
		dispatch(setWordToPlay(getRandomWords(words)));
	}, []);

	// Event teclado
	function handleKeyDown(e: KeyboardEvent): any {
		const key = e.key.toUpperCase();
		onKeyPressed(key);
	}

	function onKeyPressed(key: string): any {
		if (gameStatus !== GameStatus.Playing) return;

		if (key === 'BACKSPACE' && currentWord.length > 0) {
			onDelete();
			return;
		}

		if (key === 'ENTER' && currentWord.length === 5 && turn <= 6) {
			onEnter();
			return;
		}

		if (currentWord.length >= 5) return;

		if (keys.includes(key)) {
			onInput(key);
			return;
		}
	}

	function onInput(letter: string): any {
		// setCurrentWord(currentWord + letter);
		dispatch(onInputWordPlay(currentWord + letter));
	}
	function onDelete(): any {
		// setCurrentWord(currentWord.slice(0, -1));
		dispatch(onInputWordPlay(currentWord.slice(0, -1)));
	}
	function onEnter(): any {
		if (currentWord === wordOfTheDay) {
			// gano el usuario
			dispatch(addCompletedWord(currentWord));
			setGameStatus(GameStatus.Won);
			const actualPoint = localStorage.getItem('GANADAS');
			const actualPointNumber = parseInt(actualPoint || '0');
			localStorage.setItem('GANADAS', (actualPointNumber + 1).toString());
			restartGame();
			dispatch(activeOpenModalStatistics());
			setWinModal(false);
			setTimeLeft(300);
			return;
		}
		if (turn === 6) {
			// perdio el usuario
			dispatch(addTurnPlay());
			dispatch(addCompletedWord(currentWord));
			setGameStatus(GameStatus.Lost);
			const actualPoint = localStorage.getItem('PERDIDAS');
			const actualPointNumber = parseInt(actualPoint || '0');
			localStorage.setItem('PERDIDAS', (actualPointNumber + 1).toString());
			dispatch(activeOpenModalStatistics());
			setWinModal(true);
			restartGame();
			return;
		}
		// validar si existe la palabra
		if (currentWord.length === 5 && !isValidWord(currentWord)) {
			return;
		}

		dispatch(addCompletedWord(currentWord));
		dispatch(addTurnPlay());
		dispatch(initialInputWord());
	}

	useEffect(() => {
		const timerId = setInterval(() => {
			setTimeLeft((timeLeft) => timeLeft - 1);
		}, 1000);
		if (timeLeft === 0) {
			setTimeLeft(300);
			const actualPoint = localStorage.getItem('PERDIDAS');
			const actualPointNumber = parseInt(actualPoint || '0');
			localStorage.setItem('PERDIDAS', (actualPointNumber + 1).toString());
			restartGame();
			clearInterval(timerId);
		}

		return () => {
			clearInterval(timerId);
		};
	}, [timeLeft]);

	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;

	function restartGame(): any {
		dispatch(initialTurnPlay());
		dispatch(setWordToPlay(getRandomWords(words)));
		dispatch(initialInputWord());
		dispatch(intialCompletedWord());
		setTimeLeft(300);
		setGameStatus(GameStatus.Playing);
	}

	const [isFirsUser, setIsFirstUser] = useState<boolean>(true);

	useEffect(() => {
		const user = localStorage.getItem('user');
		if (!user) {
			dispatch(activeModalInfo());
			localStorage.setItem('user', 'JUGANDO');
		} else {
			setIsFirstUser(false);
		}
	}, []);

	return (
		<>
			<Header
				winModal={winModal}
				setWinModal={setWinModal}
				minutes={minutes}
				seconds={seconds}
			/>
			<div className=" flex flex-col pb-[54px] pt-[87px]">
				<div className="m-auto">
					{completedWords.map((word, index) => (
						<RowCompleted key={index} word={word} />
					))}
					{gameStatus === GameStatus.Playing ? <RowCurrent /> : null}

					{Array.from(Array(6 - turn)).map((_, index) => (
						<RowEmpty key={index} />
					))}
				</div>
			</div>
			<Keyboard keys={keys} onKeyPressed={onKeyPressed} />
		</>
	);
};

export default WordleApp;
