import React from 'react';
import { BoxStatus } from '../data/statusBox';
import { useAppDispatch } from '../hooks/redux';
import { desactiveModalInfo } from '../store/wordleGame';
import Box from './Box';

const InstructionsModal = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const themeActual = localStorage.getItem('theme');

	return (
		<>
			<div className="">
				<div
					style={{
						position: 'fixed',
						overflowY: 'hidden',
						overflowX: 'hidden',
						zIndex: 100,
					}}
					className="top-[calc((100vh-1018px)/2)] left-[calc((100vw-546px)/2)]   z-20 flex    h-[1018px] w-[546px] flex-col rounded-[15px] border border-black bg-[#F3F3F3] dark:border-[#939B9F]  dark:bg-black dark:text-[#FFFFFF]"
				>
					<div className="flex flex-col">
						<div className="mt-[54px]   mb-[32px] flex h-[41px] justify-center text-center ">
							<h1 className=" m-auto text-center text-[35px] font-extrabold leading-[41px]  ">
								Como jugar
							</h1>
						</div>

						<div className=" pl-[42px]">
							<div className="mb-[17px] flex h-[147px] w-[478px] flex-col content-center text-[19px]  font-normal leading-[22px] ">
								<div>Adivina la palabra oculta en cinco intentos.</div>
								<div className=" my-6 ">
									Cada intento debe ser una palabra válida de 5 letras.
								</div>

								<div>
									Después de cada intento el color de las letras cambia para
									mostrar qué tan cerca estás de acertar la palabra.
								</div>
							</div>

							<p className="mb-[16px] flex flex-row text-[19px] font-bold leading-[22px]">
								Ejemplos
							</p>
							<div className="flew row mb-[19px] flex w-[424px] justify-between pl-[13px]">
								<Box letter={'G'} type={BoxStatus.correct} />
								<Box letter={'A'} type={BoxStatus.white} />
								<Box letter={'T'} type={BoxStatus.white} />
								<Box letter={'O'} type={BoxStatus.white} />
								<Box letter={'S'} type={BoxStatus.white} />
							</div>
							<div className="mb-[23px] flex  flex-row text-[19px] font-normal leading-[22px]">
								La letra
								<p className="px-1 font-bold">G</p>
								está en la palabra y en la posición correcta.
							</div>
							<div className="flew row mb-[19px] flex w-[424px] justify-between pl-[13px]">
								<Box letter={'V'} type={BoxStatus.white} />
								<Box letter={'O'} type={BoxStatus.white} />
								<Box letter={'C'} type={BoxStatus.present} />
								<Box letter={'A'} type={BoxStatus.white} />
								<Box letter={'L'} type={BoxStatus.white} />
							</div>
							<div className="mb-[23px]  flex flex-row text-[19px] font-normal leading-[22px]">
								La letra
								<p className="px-1 font-bold">C</p>
								está en la palabra pero en la posición incorrecta.
							</div>
							<div className="flew row mb-[20px] flex w-[424px] justify-between pl-[13px]">
								<Box letter={'C'} type={BoxStatus.white} />
								<Box letter={'A'} type={BoxStatus.white} />
								<Box letter={'N'} type={BoxStatus.white} />
								<Box letter={'T'} type={BoxStatus.white} />
								<Box letter={'O'} type={BoxStatus.absent} />
							</div>
							<div className="mb-[36px] flex flex-row text-[19px] font-normal leading-[22px]">
								La letra <p className="px-1 font-bold">O</p> no está en la
								palabra.
							</div>
							<p className="mb-[31px] flex w-[480px] flex-row text-[19px] font-normal leading-[22px]">
								Puede haber letras repetidas. Las pistas son independientes para
								cada letra.
							</p>
						</div>
						<p className="m-auto   flex flex-row text-center text-[19px] font-normal leading-[22px]">
							¡Una palabra nueva cada 5 minutos!
						</p>
						<button
							className="m-auto mt-[54px]  mb-[54px] h-[50px] w-[263px] rounded-[5px] bg-[#6AAA64] text-[28px] font-extrabold leading-[33px] text-[#FFFFFF]"
							onClick={() => {
								dispatch(desactiveModalInfo());
							}}
						>
							!JUGAR¡
						</button>
					</div>
				</div>
			</div>

			<div
				onClick={() => {
					dispatch(desactiveModalInfo());
				}}
				className={`
					${themeActual === 'dark' ? 'backdropDark' : 'backdrop'}
				`}
			></div>
		</>
	);
};

export default InstructionsModal;
