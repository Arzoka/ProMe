import { useEffect, useState, useCallback } from "react";

const useMouse = (element: HTMLElement | null | Window = window) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [mouseDown, setMouseDown] = useState(false);

	const updateMousePosition = useCallback((e: MouseEvent) => setMousePosition({ x: e.offsetX, y: e.offsetY }), []);

	useEffect(() => {
		const abortController = new AbortController();
		const target = element ?? window;

		target.addEventListener("mousemove", updateMousePosition as EventListener, { signal: abortController.signal });
		target.addEventListener("mousedown", () => setMouseDown(true), { signal: abortController.signal });
		target.addEventListener("mouseup", () => setMouseDown(false), { signal: abortController.signal });

		return () => abortController.abort();
	}, [element]);

	return { ...mousePosition, mouseDown };
};

export default useMouse;
