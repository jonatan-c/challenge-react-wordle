/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

interface Props {
	letter?: string;
	type?: string | undefined | any;
}

const Box = ({ letter, type }: Props) => {
	let typeColorByLetter = '';
	const getResult = (type: string) => {
		if (type === 'correct') {
			typeColorByLetter = 'bg-[#6AAA64] text-white';
		} else if (type === 'present') {
			typeColorByLetter = 'bg-[#CEB02C] text-white';
		} else if (type === 'absent') {
			typeColorByLetter = 'bg-[#939B9F] text-white ';
		} else if (type === 'empty') {
			typeColorByLetter =
				'bg-custom-css   border text-white bg-[#d5d8da] dark:bg-[#939B9F] dark:opacity-[30%]';
		} else if (type === 'white') {
			typeColorByLetter =
				'bg-white dark:text-white border text-black border-black text-black dark:bg-black dark:text-white dark:border-white  ';
		} else {
			typeColorByLetter =
				'bg-custom-css text-white bg-[#d5d8da] dark:bg-[#939B9F] dark:opacity-[30%] dark:text-white';
		}
	};

	getResult(type);

	return (
		<div>
			<p
				className={`  flex h-[76px] w-[76px]   
				${typeColorByLetter}  items-center  justify-center  rounded-[5px]    text-center text-[35px] font-extrabold leading-[45px]  
				 `}
			>
				{letter}
			</p>
		</div>
	);
};

export default Box;
