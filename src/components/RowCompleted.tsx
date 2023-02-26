/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { useAppSelector } from '../hooks/redux';
import Box from './Box';

interface Props {
	word: string;
}

const RowCompleted = ({ word }: Props) => {
	const { wordOfTheDay } = useAppSelector((state) => state.wordleGame);

	function checkLetter(letter: string, pos: number): any {
		if (wordOfTheDay.includes(letter)) {
			if (wordOfTheDay[pos] === letter) {
				return 'correct';
			} else {
				return 'present';
			}
		} else {
			return 'absent';
		}
	}

	return (
		<>
			<div className="flew row mb-[19px] flex w-[424px] justify-between pl-[13px]">
				{Array.from(Array(5)).map((_, index) => {
					return (
						<Box
							key={index}
							letter={word[index]}
							type={checkLetter(word[index], index)}
						/>
					);
				})}
			</div>
		</>
	);
};

export default RowCompleted;
