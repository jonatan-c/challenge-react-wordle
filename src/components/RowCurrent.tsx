/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import Box from './Box';
import { BoxStatus } from '../data/statusBox';
import { useAppSelector } from '../hooks/redux';

const RowCurrent = () => {
	const { currentWord } = useAppSelector((state) => state.wordleGame);

	const wordArray = currentWord.split('');

	return (
		<div className="flew row mb-[19px] flex w-[424px] justify-between pl-[13px]">
			{wordArray.map((letter, index) => (
				<Box key={index} letter={letter} type="edit" />
			))}

			{Array.from(Array(5 - currentWord.length)).map((_, index) => (
				<Box key={index} letter="" type={BoxStatus.edit} />
			))}
		</div>
	);
};

export default RowCurrent;
