import { Fragment, useState } from 'react';
import { BsArrowLeftShort, BsSearch, BsChevronDown } from 'react-icons/bs';
import { AiFillAppstore } from 'react-icons/ai';
import { RiDashboardFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
	const [open, setOpen] = useState(true);
	const [submenuOpen, setSubmenuOpen] = useState(false);
	const Menus = [
		{ title: 'Dashboard' },
		{ title: 'Pages' },
		{ title: 'Media', spacing: true },
		{
			title: 'Projects',
			submenu: true,
			submenuItems: [
				{ title: 'Submenu 1' },
				{ title: 'Submenu 2' },
				{ title: 'Submenu 3' },
			],
		},
		{ title: 'Analytics' },
		{ title: 'Profile', spacing: true },
		{ title: 'Setting' },
		{ title: 'Logout' },
	];

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
					<div
						className={`flex items-center rounded-md bg-glass-light mt-6 ${!open ? 'px-2.5 py-2.5' : 'px-4 py-1'}`}
					>
						<BsSearch
							className={`text-white text-lg block float-left cursor-pointer ${open && 'mr-2'}`}
						/>
						<input
							type={'search'}
							placeholder='Search'
							className={`text-base bg-transparent w-full text-white border-none focus:ring-0 ${!open && 'hidden'}`}
						/>
					</div>

					<ul className='pt-2'>
						{Menus.map((menu, index) => (
							<Fragment key={index}>
								<li
									className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-glass-light rounded-md ${menu.spacing ? 'mt-9' : 'mt-2'}`}
								>
									<span className='text-2xl block float-left'>
										<RiDashboardFill />
									</span>
									<span
										className={`text-base font-medium flex-1 duration-100 ${!open && 'hidden'}`}
									>
										{menu.title}
									</span>
									{menu.submenu && open && (
										<BsChevronDown
											className={`${submenuOpen && 'rotate-180'}`}
											onClick={() => setSubmenuOpen(!submenuOpen)}
										/>
									)}
								</li>
								{menu.submenu && submenuOpen && open && (
									<ul>
										{menu.submenuItems.map((submenuItem, index) => (
											<li
												key={index}
												className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-glass-light rounded-md'
											>
												{submenuItem.title}
											</li>
										))}
									</ul>
								)}
							</Fragment>
						))}
					</ul>
				</div>
				<div className='p-7'>
					<h1 className='text-2xl font-semibold'>Home Page</h1>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
