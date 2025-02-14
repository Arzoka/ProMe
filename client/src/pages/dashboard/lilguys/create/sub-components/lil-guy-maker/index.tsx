import styles from './index.module.scss';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import useMouse from '@/hooks/custom/useMouse.ts';

const LilGuyMaker: FC<{brushColor: string}> = ({brushColor}) => {
	const CanvasRef = useRef<HTMLCanvasElement>( null );
	const { x, y, mouseDown } = useMouse( CanvasRef.current );
	const ctx = useMemo( () => CanvasRef.current?.getContext( '2d' ), [mouseDown] );
	const [brushSize, setBrushSize] = useState<number>(5);


	useEffect( () => {
		if ( !ctx || !mouseDown ) {return;}

		ctx.fillStyle = brushColor;
		ctx.fillRect( x, y, brushSize, brushSize );
	}, [x, y, mouseDown] );

	return (
		<main className={ styles.guyMain }>
			<div className={ styles.test }>
				<div></div>
			</div>
			<canvas style={ {
				background: '#ffffff',
			} } width={ 200 } height={ 200 } ref={ CanvasRef } />
		</main> );
};

export default LilGuyMaker;
