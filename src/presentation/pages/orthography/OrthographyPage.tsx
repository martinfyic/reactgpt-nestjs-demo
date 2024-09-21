import { useState } from 'react';

import {
	GptMessage,
	TextMessageBox,
	TypingLoader,
	UserMessage,
} from '../../components';

interface Message {
	text: string;
	isGpt: boolean;
}

export const OrthographyPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [messages, setMessages] = useState<Message[]>([]);

	const handlePost = async (text: string) => {
		setIsLoading(true);

		setMessages(prev => [...prev, { text: text, isGpt: false }]);

		//TODO UseCase

		setIsLoading(false);

		//TODO: Añadir mensaje GPT en true
	};

	return (
		<div className='chat-container'>
			<div className='chat-messages'>
				<div className='grid grid-cols-12 gap-y-2'>
					{/* Bienvenida */}
					<GptMessage text='Hola, escribe tu texto y te ayudo con la corrección' />

					{messages.map((message, index) =>
						message.isGpt ? (
							<GptMessage
								key={index + new Date().getDate()}
								text='Esto es de OpenIA'
							/>
						) : (
							<UserMessage
								key={index + new Date().getDate()}
								text={message.text}
							/>
						)
					)}

					{isLoading ? (
						<div className='col-start-1 col-end-12 fade-in'>
							<TypingLoader />
						</div>
					) : null}
				</div>
			</div>

			<TextMessageBox
				onSendMessage={message => handlePost(message)}
				placeholder='Escribe aquí lo que deseas'
				disableCorrections
			/>
		</div>
	);
};
