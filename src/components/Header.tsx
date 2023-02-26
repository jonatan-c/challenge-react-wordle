/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect } from 'react';
import informationIcon from '../assets/information-icon.svg';
import informationIconDark from '../assets/information-dark.svg';
import statics from '../assets/statics.svg';
import staticsDark from '../assets/statics-dark.svg';
import light from '../assets/light.svg';
import dark from '../assets/dark.svg';
import InstructionsModal from './InstructionsModal';
import StatisticsModal from './StatisticsModal';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import {
	activeModalInfo,
	activeOpenModalStatistics,
} from '../store/wordleGame';

interface Props {
	winModal: boolean;
	minutes: number;
	seconds: number;
	setWinModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ winModal, minutes, seconds, setWinModal }: Props): any => {
	const dispatch = useAppDispatch();
	const { openModalInfo, openModalStatistics } = useAppSelector(
		(state) => state.wordleGame
	);

	const themeEnLocal = localStorage.getItem('theme');
	const [theme, setTheme] = React.useState(themeEnLocal);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('light');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.add('light');
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [theme]);

	const handleThemeSwitch = (): any => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<>
			<div className="m-auto mb-5 flex h-[84px] w-[638px] flex-row justify-between rounded-[15px] border bg-[#F3F3F3] px-5   dark:bg-[#2e3031] ">
				<img
					src={theme === 'dark' ? informationIconDark : informationIcon}
					alt="info"
					className="my-auto h-[27px] w-[27px] cursor-pointer"
					onClick={() => dispatch(activeModalInfo())}
				/>
				<p className="my-auto ml-[55px] text-[40px]  font-semibold leading-[47px] text-[#202537] dark:text-white ">
					WORDLE
				</p>
				<div className="my-auto flex flex-row">
					<img
						className="cursor-pointer dark:fill-white"
						src={theme === 'dark' ? staticsDark : statics}
						alt="stati"
						onClick={() => dispatch(activeOpenModalStatistics())}
					/>
					<img
						className="cursor-pointer"
						src={theme === 'dark' ? dark : light}
						alt="lith"
						onClick={handleThemeSwitch}
					/>
				</div>
			</div>

			{openModalInfo && <InstructionsModal />}

			{openModalStatistics && (
				<StatisticsModal
					setWinModal={setWinModal}
					winModal={winModal}
					minutes={minutes}
					seconds={seconds}
				/>
			)}
		</>
	);
};

export default Header;
