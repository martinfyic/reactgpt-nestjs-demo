import { GptMessage, TypingLoader, UserMessage } from '../../components';

export const OrthographyPage = () => {
	return (
		<div className='chat-container'>
			<div className='chat-messages'>
				<div className='grid grid-cols-12 gap-y-2'>
					{/* Bienvenida */}
					<GptMessage text='Hola, escribe tu texto y te ayudo con la corrección' />

					<UserMessage text='Hola Mundo' />

					<TypingLoader className='fade-in' />
				</div>
			</div>
		</div>
	);
};
