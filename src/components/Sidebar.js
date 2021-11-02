import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import {SidebarData} from './SidebarData'
import SubMenuItems from './SubMenuItems'
import { IconContext } from 'react-icons/lib';

// stock components is like css and javascript combined
// you can nest things within the backticks
// you can create a custom elements file for this but we will do everything in the file here

const Nav = styled.div`
	background: #15171c;
	height: 80px;
	diplay: flex;
	justify-content: flex-start;
	align-items: center;
`;

const NavIcon = styled(Link)`
	margin-left: 2rem;
	font-size: 2rem;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`

const SidebarNav = styled.nav`
	background: #15171c;
	width: 250px;	
	height: 100vh;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0px;
	left: ${({ show_sidebar }) => (show_sidebar ? '0' : '-100%')};
	transition: 350ms;
	z-index: 10;
`;

const SidebarWrap = styled.div`
	width: 100%;
`;

const Sidebar = () => {

	const [show_sidebar, setShowSidebar] = useState(false)

	const changeSidebarVisibility = () => {
		setShowSidebar(!show_sidebar);
		console.log("Hello");
	}

	return (
		<>
		<IconContext.Provider value={{ color: 'red'}}>
			<Nav>
				<NavIcon to="#">
					<FaIcons.FaBars onClick={changeSidebarVisibility} />
				</NavIcon>
			</Nav>
			<SidebarNav show_sidebar={show_sidebar}>
				<SidebarWrap>
					<NavIcon to='#'>
						<AiIcons.AiOutlineClose onClick={changeSidebarVisibility} 
						/>
					</NavIcon>
					{SidebarData.map((sidebar_item, index) => {
						return <SubMenuItems sidebar_item={sidebar_item} key={index} />;
					})}
				</SidebarWrap>
			</SidebarNav>
		</IconContext.Provider>
		</>
	);
};

export default Sidebar;