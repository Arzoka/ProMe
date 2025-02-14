import styles from './index.module.scss';
import { FC, useEffect, useRef } from 'react';

const Ball: FC<{currentColor: string}> = ({currentColor}) => {
	const ball = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!ball.current) { return; }

		const abortcontroller = new AbortController();
		const ballElement = ball.current;

		document.addEventListener('mousemove', function (event) {
			const { x, y } = event;
			console.log(x, y);

			requestAnimationFrame(() => {
				ballElement.animate([
					{ left: ballElement.style.left, top: ballElement.style.top },
					{ left: x + 'px', top: y + 'px' },
				], {
					duration: 1000 / 3, fill: 'forwards',
				});
			});
		}, { signal: abortcontroller.signal });

		return () => {
			abortcontroller.abort();
		};
	}, []);

	return (
		<div style={
			{
				background: currentColor,
			}
		} ref={ball} className={ styles.ball }></div>
	);
};

export default Ball;
