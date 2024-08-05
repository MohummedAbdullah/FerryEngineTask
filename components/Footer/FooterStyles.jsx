import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'

export const FooterContainer = styled(Box)(({ theme }) => ({
	backgroundColor: '#00afd4',
	color: '#fff',
	padding: theme.spacing(4, 2),
	position: 'relative',
}))

export const LogoContainer = styled('div')(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	padding: '20px 0px 15px 0',
	alignItems: 'center',
}))

export const Logo = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.white,
	display: 'inline-block',
	fontSize: '1.5rem',
	fontWeight: 'bold',
	color: theme.palette.common.white,
}))

export const ClipPathDiv = styled('div')(({ theme }) => ({
	width: '30px',
	height: '30px',
	backgroundColor: '#ffdc01',
	marginLeft: '10px',
	clipPath: 'polygon(0 0, 100% 0, 51% 100%, 0% 100%)',
}))

export const FooterColumn = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(1),
}))

export const FooterSection = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(2),
}))

export const SocialMediaIcons = styled(Box)(({ theme }) => ({
	display: 'flex',
	'& > *': {
		color: '#fff',
	},
	'& > :first-of-type': {
		marginRight: theme.spacing(2),
	},
	'& > :last-of-type': {
		marginLeft: theme.spacing(2),
	},
}))