import { useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { AiFillAppstore } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<div className='flex'>
				<div
					className={`${open ? 'w-72' : 'w-20'} bg-glass-dark h-screen p-5 pt-8 duration-300
				relative`}
				>
					<BsArrowLeftShort
						className={`bg-white text-glass-dark 
					text-3xl rounded-full absolute -right-3 top-9 border
					border-glass-dark cursor-pointer ${!open && 'rotate-180'}`}
						onClick={() => setOpen(!open)}
					/>
					<div className='inline-flex'>
						<AiFillAppstore className='bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2' />
						<h1
							className={`text-white origin-left font-medium text-2xl duration-100 ${!open && 'scale-0'}`}
						>
							eCommerce
						</h1>
					</div>
				</div>
				<div className='p-7'>
					<h1 className='text-2xl font-semibold'>Home Page</h1>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
