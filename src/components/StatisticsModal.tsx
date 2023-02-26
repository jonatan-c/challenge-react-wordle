/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable import/no-duplicates */
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { desactiveOpenModalStatistics } from '../store/wordleGame';

interface Props {
	winModal: boolean;
	minutes: number;
	seconds: number;
	setWinModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const StatisticsModal = ({
	setWinModal,
	winModal,
	minutes,
	seconds,
}: Props): JSX.Element => {
	const dispatch = useAppDispatch();
	const { wordOfTheDay } = useAppSelector((state) => state.wordleGame);

	const themeActual = localStorage.getItem('theme');
	const wins = JSON.parse(localStorage.getItem('GANADAS') || '0');
	const lost = JSON.parse(localStorage.getItem('PERDIDAS') || '0');
	const total = parseInt(wins) + parseInt(lost);

	return (
		<>
			<div
				style={{
					position: 'fixed',
					overflowY: 'hidden',
					overflowX: 'hidden',
					zIndex: 100,
				}}
				className="modalBackgoundColor top-[calc((100vh-480px)/2)]   left-[calc((100vw-546px)/2)] z-20   flex h-[480px] w-[546px] flex-col rounded-[15px] border border-black dark:border   dark:border-white dark:bg-[#262B3C] dark:text-white"
			>
				<div className="flex flex-col text-[35px] font-extrabold leading-[41px]">
					<h1 className="mx-auto mt-[59px] ">Estadisticas</h1>
					<div className="mt-[44px] ml-[78px] mr-[78px] flex flex-row justify-between">
						<div className="flex flex-col ">
							<div className="mx-auto">{total}</div>
							<div className="text-[21px] font-medium leading-[25px]">
								Jugadas
							</div>
						</div>
						<div className="flex flex-col ">
							<div className="mx-auto">{wins}</div>
							<div className="text-[21px] font-medium leading-[25px]">
								Victorias
							</div>
						</div>
					</div>
					{winModal && seconds > 1 ? (
						<div className="row mx-auto mt-[11px] flex  text-[19px] font-normal   leading-[22px]">
							La palabra era :{' '}
							<p className="pl-2 font-bold uppercase"> {wordOfTheDay}</p>
						</div>
					) : null}
					<div className="text- mx-auto mt-[37px] flex flex-col content-center justify-center text-center text-[19px] font-normal uppercase leading-[22px]">
						<p>Siguiente Palabra</p>
						<p className="mt-4 text-[24px] font-bold leading-[29px]">
							{minutes}:{seconds}
						</p>
					</div>

					<div className="mx-auto mt-4  text-[24px] font-bold leading-[28px]"></div>

					<button
						className="m-auto mt-[20px]  mb-[41px] h-[50px] w-[263px] rounded-[5px] bg-[#6AAA64] text-[28px] font-extrabold leading-[33px] text-[#FFFFFF]"
						onClick={() => {
							dispatch(desactiveOpenModalStatistics());
							setWinModal(false);
						}}
					>
						Aceptar
					</button>
				</div>
			</div>

			<div
				onClick={() => {
					dispatch(desactiveOpenModalStatistics());
					setWinModal(false);
				}}
				className={`
					${themeActual === 'dark' ? 'backdropDark' : 'backdrop'}
				`}
			></div>
		</>
	);
};

export default StatisticsModal;
