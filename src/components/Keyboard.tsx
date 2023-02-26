/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-unreachable-loop */
import React from 'react';
import deleteIcon from '../assets/delete.svg';
import deleteIconDark from '../assets/delete-dark.svg';
import { useAppSelector } from '../hooks/redux';

interface Props {
	keys: string[];
	onKeyPressed: (key: string) => void;
}

const Keyboard = ({ keys, onKeyPressed }: Props): any => {
	const { completedWords, wordOfTheDay } = useAppSelector(
		(state) => state.wordleGame
	);

	function handleInput(e: any): any {
		onKeyPressed(e.target.textContent);
	}
	function handleEnter(e: any): any {
		onKeyPressed('ENTER');
	}
	function handleDelete(e: any): any {
		onKeyPressed('BACKSPACE');
	}

	function checkLetterArray(letter: any): any {
		if (completedWords.length === 0) {
			return 'bg-[#939B9F]';
		}
		for (let i = 0; i < completedWords.length; i++) {
			if (completedWords[i].includes(letter) && wordOfTheDay.includes(letter)) {
				return 'bg-[#6AAA64]';
			} else {
				return 'bg-[#939B9F]';
			}
		}
	}

	const theme = localStorage.getItem('theme');

	return (
		<div className=" mx-auto   flex h-[238px] w-[638px] flex-col rounded-[15px] bg-[#DADCE0] py-[33px] dark:bg-[#242527] ">
			<div className="ml-[53px]  pb-2">
				{Array.from(Array(10)).map((_, index) => (
					<button
						className={` p- mr-[10px] ${checkLetterArray(
							keys[index]
						)} bg- h-[51px] w-[44.67px]  rounded-[5px] opacity-100  dark:bg-[#565F7E] dark:text-white`}
						key={index}
						onClick={handleInput}
					>
						{keys[index]}
					</button>
				))}
			</div>
			<div className="ml-[68px] pb-2">
				{Array.from(Array(10)).map((_, index) => (
					<button
						className={` mr-[10px] ${checkLetterArray(
							keys[index + 10]
						)} h-[51px] w-[45px] rounded-[5px]  dark:bg-[#565F7E] dark:text-white`}
						key={index + 10}
						onClick={handleInput}
					>
						{keys[index + 10]}
					</button>
				))}
			</div>
			<div className="ml-5">
				<button
					className="mx-1 mr-[10px] h-[51px] w-[72px] rounded-[5px]  bg-[#959da8] dark:bg-[#565F7E] dark:text-white"
					onClick={handleEnter}
				>
					ENTER
				</button>
				{Array.from(Array(7)).map((_, index) => (
					<button
						className={` ${checkLetterArray(
							keys[index + 20]
						)}  mr-[10px] h-[51px] w-[45px] rounded-[5px] dark:bg-[#565F7E] dark:text-white`}
						key={index + 20}
						onClick={handleInput}
					>
						{keys[index + 20]}
					</button>
				))}
				<button
					className="mx-1   h-[51px] w-[72px] rounded-[5px] bg-[#959da8]  text-black  dark:bg-[#565F7E] dark:text-white "
					onClick={handleDelete}
				>
					<img
						src={theme === 'dark' ? deleteIconDark : deleteIcon}
						alt="delete"
						className="mx-auto   fill-black dark:fill-white dark:text-white"
					/>
				</button>
			</div>
		</div>
	);
};

export default Keyboard;
