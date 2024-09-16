import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactGPT } from './ReactGPT.tsx';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ReactGPT />
	</StrictMode>
);
