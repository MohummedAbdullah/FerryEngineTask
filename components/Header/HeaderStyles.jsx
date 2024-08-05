import { styled } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
}))

export const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
})

export const LogoContainer = styled('div')(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	paddingRight: theme.spacing(4), // Add some space to the right for the clip-path effect
}))

export const Logo = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.white,
	display: 'inline-block',
	fontSize: '1.5rem',
	fontWeight: 'bold',
	color: theme.palette.common.white,
}))

export const ClipPathDiv = styled('div')(({ theme }) => ({
	width: '35px',
	height: '38px',
	backgroundColor: '#ffdc01',
	marginLeft: '10px',
	clipPath: 'polygon(0 0, 100% 0, 51% 100%, 0% 100%)',
}))

export const NavLinks = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	'& a': {
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		textDecoration: 'none',
		color: theme.palette.common.white,
		fontSize: '1.1rem',
		'&:first-of-type': {
			marginLeft: 0,
		},
		'&:last-of-type': {
			marginRight: 0,
		},
		'&:hover': {
			color: theme.palette.common.white,
		},
	},
}))

export const MobileMenuButton = styled(IconButton)(({ theme }) => ({
	marginLeft: theme.spacing(1),
	color: theme.palette.common.white,
}))

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
	'& .MuiDrawer-paper': {
		width: 250,
		backgroundColor: '#333',
		color: '#fff',
	},
}))

export const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(2),
	justifyContent: 'space-between',
	backgroundColor: theme.palette.primary.main,
}))

export const DrawerList = styled(List)({
	'& .MuiListItem-button': {
		color: '#fff',
	},
	'& .MuiListItem-button:hover': {
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
	},
})

export const DrawerListItemText = styled(ListItemText)({
	'& .MuiTypography-root': {
		fontSize: '1.1rem',
	},
})
export const IconWrapper = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: red;
    border-radius: 50%;
    bottom: 9px;
    right: 7px;
    border: 2px solid white;
  }
`;

