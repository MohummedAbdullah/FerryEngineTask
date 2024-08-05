import Divider from '@mui/material/Divider'
import {
	Box,
	Typography,
	IconButton,
	Select,
	MenuItem,
	InputAdornment,
	styled,
	Checkbox,
	FormControlLabel,
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export const FilterContainer = styled(Box)(({ theme }) => ({
	border: '1px solid ${theme.palette.grey[400]}',
	borderRadius: theme.shape.borderRadius,
	padding: theme.spacing(2),
	position: 'relative',
}))

export const FilterHeader = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}))

export const FilterContent = styled(Box)(({ theme }) => ({
	marginTop: theme.spacing(2),
}))

export const CustomSelect = styled(Select)(({ theme }) => ({
	minWidth: '200px',
	'& .MuiSelect-select': {
		display: 'flex',
		alignItems: 'center',
	},
	'& .MuiSelect-icon': {
		display: 'none', // Hide default icon
	},
	'& .MuiOutlinedInput-root': {
		borderBottom: '1px solid ${theme.palette.grey[400]}', // Border below the select input
	},
}))

export const SelectContainer = styled(Box)(({ theme }) => ({
	position: 'relative',
}))

export const SelectIcon = styled(LocationOnIcon)(({ theme }) => ({
	position: 'absolute',
	left: theme.spacing(1),
}))

export const CheckboxContainer = styled(Box)(({ theme }) => ({
	marginTop: theme.spacing(2),
	display: 'flex',
	flexDirection: 'column',
}))