'use client';
import React,{useState} from "react";

import {
	FilterContainer,
	FilterHeader,
	FilterContent,
	CustomSelect,
	SelectContainer,
	SelectIcon,
	CheckboxContainer,
} from './FilterStyles'

import { styled,IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, Grid, Typography, Card, CardContent, Rating, Divider, Select, MenuItem, InputAdornment, Checkbox, FormControlLabel } from '@mui/material';

const Filter = ({showFilter, onClose}) => {
	
  return (
    <div>
        <FilterContainer>
		<FilterHeader>
					<Typography variant='h6'>Filter</Typography>
					<IconButton edge='end' color='inherit'>
						<HighlightOffIcon onClick={()=>{
							onClose(false)
						}} />
					</IconButton>
				</FilterHeader>
				{showFilter && (
				<FilterContent>
					<Typography variant='subtitle1'>Operating in</Typography>
					<SelectContainer mt={1}>
						<CustomSelect
							defaultValue=''
							variant='outlined'
							startAdornment={
								<InputAdornment position='start'>
									<SelectIcon />
								</InputAdornment>
							}
							inputProps={{ 'aria-label': 'select country' }}
							sx={{width:'100%'}}
						>
							<MenuItem value=''>Select a country</MenuItem>
							<MenuItem value='usa'>USA</MenuItem>
							<MenuItem value='canada'>Canada</MenuItem>
							<MenuItem value='uk'>UK</MenuItem>
							{/* Add more options as needed */}
						</CustomSelect>
					</SelectContainer>
					<Divider orientation='horizontal' sx={{ marginTop: 2, padding: 0 }} />
					<Typography variant='subtitle1' mt={3} fontWeight='bold'>
						Ferry type
					</Typography>
					<CheckboxContainer>
						<FormControlLabel control={<Checkbox />} label='Normal ferries' />
						<FormControlLabel control={<Checkbox />} label='High speed ferries' />
					</CheckboxContainer>
				</FilterContent>
				)}
				
			</FilterContainer>
    </div>
  )
}

export default Filter