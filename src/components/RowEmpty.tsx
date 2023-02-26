/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import Box from './Box';

const RowEmpty = () => {
	return (
		<div className="flew row mb-[19px] flex w-[424px] justify-between pl-[13px]">
			{Array.from(Array(5)).map((_, index) => {
				return <Box key={index} letter={''} type="empty" />;
			})}
		</div>
	);
};

export default RowEmpty;
