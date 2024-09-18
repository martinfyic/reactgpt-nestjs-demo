import { NavLink } from 'react-router-dom';

interface Props {
	to: string;
	icon: string;
	title: string;
	description: string;
}

export const SidebarMenuItem = ({ description, icon, title, to }: Props) => {
	return (
		<NavLink
			to={to}
			key={title}
			className={({ isActive }) =>
				isActive
					? 'flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors mt-2'
					: 'flex justify-center items-center hover:bg-gray-800 rounded-md p-2 transition-colors mt-2'
			}
		>
			<i className={`${icon} text-xl mr-4 text-indigo-400`}></i>
			<div className='flex flex-col flex-grow'>
				<span className='text-white text-lg font-semibold'>{title}</span>
				<span className='text-gray-400 text-sm'>{description}</span>
			</div>
		</NavLink>
	);
};
