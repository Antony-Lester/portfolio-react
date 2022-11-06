import React, { useState } from 'react';

import Wrapper from './calculator/Wrapper';
import Screen from './calculator/Screen';
import ButtonBox from './calculator/ButtonBox';
import Button from './calculator/Button';
import Background from './calculator/Background';

import { toLocaleString, removeSpaces, math } from '../utils/calculator';

const btnValues = ['C','+-','%','/',7,8,9,'X',4,5,6,'-',1,2,3,'+',0,'.','=',];


export default function Calculator() { 
    let [calc, setCalc] = useState({
		sign: '', num: 0, res: 0, index: 0,
        record: ['', '', '', '', '']
    });
    
	const numClickHandler = (e) => {
		e.preventDefault();
		const value = e.target.innerHTML;
		if (removeSpaces(calc.num).length < 16) {
			setCalc({...calc, num: calc.num === 0 && value === '0'
						? '0' : removeSpaces(calc.num) % 1 === 0
						? toLocaleString(Number(removeSpaces(calc.num + value)))
						: toLocaleString(calc.num + value),
				res: !calc.sign ? 0 : calc.res,
			});
		}
    };
    
	const commaClickHandler = (e) => {
		e.preventDefault();
		const value = e.target.innerHTML;
		setCalc({...calc,num: !calc.num.toString().includes('.')
				? calc.num + value : calc.num,});
    };
    
	const signClickHandler = (e) => {
		e.preventDefault();
		const value = e.target.innerHTML;
		setCalc({...calc,sign: value, res: !calc.res && calc.num ? calc.num : calc.res,
			num: 0,});
    };
    
	const EqualsClickHandler = () => {
		if (calc.sign && calc.num) {
			const result = calc.num === '0' && calc.sign === '/'
					? "Can't divide with 0" : toLocaleString(
							math( Number(removeSpaces(calc.res)),
								Number(removeSpaces(calc.num)), calc.sign,),
					  );
			const newRecord = [...calc.record];
			newRecord[calc.index === 4 ? 0 : calc.index + 1] = result;
			setCalc({...calc, res: result, sign: '', num: 0,
				index: calc.index === 4 ? 0 : calc.index + 1, record: newRecord,});
		}
    };
    
	const invertClickHandler = () => {
		setCalc({...calc,
			num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
			res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
			sign: '',
		});
    };
    
	const percentClickHandler = () => {
		let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
		let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;
		setCalc({...calc, num: (num /= Math.pow(100, 1)),
			res: (res /= Math.pow(100, 1)), sign: '',
		});
    };
    
	const resetClickHandler = () => {
		setCalc({...calc, sign: '', num: 0, res: 0,
		});
	};

	return (
		<>
			<Background value={calc}></Background>
			<Wrapper>
				<Screen value={calc.num ? calc.num : calc.res} />
				<ButtonBox>
					{btnValues.map((btn, i) => {
						return (
							<Button
								key={i}
								className={btn === '=' ? 'equals' : ''}
								value={btn}
								onClick={
									btn === 'C'
										? resetClickHandler
										: btn === '+-'
										? invertClickHandler
										: btn === '%'
										? percentClickHandler
										: btn === '='
										? EqualsClickHandler
										: btn === '/' ||
										  btn === 'X' ||
										  btn === '-' ||
										  btn === '+'
										? signClickHandler
										: btn === '.'
										? commaClickHandler
										: numClickHandler
								}
							/>
						);
					})}
				</ButtonBox>
			</Wrapper>
		</>
	);
}