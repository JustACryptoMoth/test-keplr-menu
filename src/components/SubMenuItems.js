import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
	display: flex;
	color: #e1e9fc;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	list-style: none;
	height: 60px;
	text-decoration: none;
	font-size: 18px;

	&:hover {
		background: #252834;
		border-left: 4px solid #632ce4;
		cursor: pointer;
	}
`;

const SidebarLabel = styled.span`
	margin-left: 16px;
`;

const DropdownLink = styled(Link)`
	background: #414757;
	height: 60px;
	padding-left: 3rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #f5f5f5;
	font-size: 18px;

	&:hover {
		background: #632ce4;
		cursor: pointer;
	}
`;

const DropdownSidebarLabel = styled.span`
	margin-left: 16px;
`;


const SubMenuItems = ({ sidebar_item }) => {

	const [subnav_clicked, setSubnav] = useState(false)

	const showSubnav = () => setSubnav(!subnav_clicked)

	return (
		<>
			<SidebarLink to={sidebar_item.path} onClick={sidebar_item.subNav && showSubnav}>
				<div>
					{sidebar_item.icon}
					<SidebarLabel>
						{sidebar_item.title}
					</SidebarLabel>
				</div>
				<div>
					{sidebar_item.subNav && subnav_clicked ? 
							sidebar_item.iconOpened : sidebar_item.subNav ? 
							sidebar_item.iconClosed : null}
				</div>
			</SidebarLink>
			{subnav_clicked && sidebar_item.subNav.map((sub_sidebar_item, index) => {
				return (
					<DropdownLink to={sub_sidebar_item.path}>
						<div>
							{sub_sidebar_item.icon}
							<DropdownSidebarLabel>
								{sub_sidebar_item.title}
							</DropdownSidebarLabel>
						</div>
					</DropdownLink>
				)
			})}
		</>
	);
};

export default SubMenuItems

