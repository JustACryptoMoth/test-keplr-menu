import React from 'react'
import * as FaIcons from 'react-icons/fa'
//a lot of icon designs without designing it or adding to HTML link
//when import custom icons we don't have to reimport by itself
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
	{
		title: 'Home',
		path: '/home',
		icon: <AiIcons.AiFillHome />,
	},
	{
		title: 'Make Poll',
		path: '/polls',
		icon: <AiIcons.AiFillDatabase />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
		subNav: [
			{
				title: 'Simple Poll',
				path: '/polls/simple',
				icon: <IoIcons.IoIosList />,
			},
			{
				title: 'Multi Poll',
				path: '/polls/multi',
				icon: <IoIcons.IoIosListBox />,
			},
		]
	},
	{
		title: 'Top Polls',
		path: '/top',
		icon: <IoIcons.IoIosStar />,
	},
	{
		title: 'More',
		path: '/more',
		icon: <IoIcons.IoIosMore />,
	},
]

export default SidebarData