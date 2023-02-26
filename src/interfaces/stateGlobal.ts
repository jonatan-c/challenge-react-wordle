export interface IStateGlobal {
	wordOfTheDay: string;
	turn: number;
	currentWord: string;
	completedWords: string[];

	openModalInfo: boolean;
	openModalStatistics: boolean;
}
