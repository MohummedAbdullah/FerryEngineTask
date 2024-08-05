'use client';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import Image from 'next/image';

import {
  
  IconWrapper,
  StyledAppBar,
	StyledToolbar,
	LogoContainer,
	Logo,
	ClipPathDiv,
	NavLinks,
	MobileMenuButton,
	StyledDrawer,
	DrawerHeader,
	DrawerList,
	DrawerListItemText
} from './HeaderStyles';

const Header = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isTab = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
    {!isTab && (
      <StyledToolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <HeadphonesIcon />
          </IconButton>
          <p>
            <span style={{ color: 'blue' }}>+30 212 000 3006</span>. Available Hours in France: 07:00 to 22:00
          </p>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            alt="USA Flag"
            width={24}
            height={24}
          />
          <Typography>English</Typography>
          <span>€ Euro</span>
          <span>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
          </span>
          <span>
          <IconWrapper>
            <IconButton color="inherit">
              <AccountCircleIcon sx={{ color: 'white' }} />
            </IconButton>
          </IconWrapper>
          
          </span>
          Login - Manage bookings
        </Box>
      </StyledToolbar>
)}
<StyledAppBar position='static'>
      <Container fixed>
				<StyledToolbar>
					<LogoContainer>
						<Logo variant='h6'>ferryengine</Logo>
						<ClipPathDiv />
					</LogoContainer>
					{isMobile ? (
						<>
							<MobileMenuButton
								edge='start'
								color='inherit'
								aria-label='menu'
								onClick={handleDrawerOpen}
							>
								<MenuIcon />
							</MobileMenuButton>
							<StyledDrawer
								anchor='left'
								open={drawerOpen}
								onClose={handleDrawerClose}
							>
								<DrawerHeader>
									<Logo variant='h6'>Logo</Logo>
									<IconButton onClick={handleDrawerClose} style={{ color: '#fff' }}>
										<CloseIcon />
									</IconButton>
								</DrawerHeader>
								<DrawerList onClick={handleDrawerClose}>
									<ListItem button component='a' href='/destinations'>
										<DrawerListItemText primary='Destinations' />
									</ListItem>
									<ListItem button component='a' href='/companies'>
										<DrawerListItemText primary='Companies' />
									</ListItem>
									<ListItem button component='a' href='/routes'>
										<DrawerListItemText primary='Routes' />
									</ListItem>
									<ListItem button component='a' href='/routes'>
										<DrawerListItemText primary='Routes' />
									</ListItem>
									<ListItem button component='a' href='/reviews'>
										<DrawerListItemText primary='Reviews' />
									</ListItem>

									<ListItem button component='a' href='/about'>
										<DrawerListItemText primary='About Us' />
									</ListItem>
									<ListItem button component='a' href='/support'>
										<DrawerListItemText primary='Support' />
									</ListItem>
								</DrawerList>
							</StyledDrawer>
						</>
					) : (
						<NavLinks>
							<a href='/destinations'>Destinations</a>
							<a href='/companies'>Companies</a>
							<a href='/routes'>Routes</a>
							<a href='/reviews'>Reviews</a>
							<a href='/about'>About Us</a>
							<a href='/support'>Support</a>
						</NavLinks>
					)}
				</StyledToolbar>
			</Container>
            </StyledAppBar>
    </>
  );
};

export default Header;
