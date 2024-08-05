'use client'

import React from 'react'
import {
	Container,
	Grid,
	Typography,
	TextField,
	IconButton,
	Box,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import {
	FooterContainer,
	FooterColumn,
	FooterSection,
	SocialMediaIcons,
	LogoContainer,
	Logo,
	ClipPathDiv,
} from './FooterStyles'

const Footer = () => {
	return (
		<FooterContainer>
			<Container fixed>
				<Grid spacing={4} direction='column' sx={{ marginBottom: 7 }}>
					<LogoContainer>
						<Logo variant='h6'>ferryengine</Logo>
						<ClipPathDiv />
					</LogoContainer>
					<Grid container spacing={4} justifyContent='center'>
						<Grid item xs={12} sm={3}>
							<FooterColumn>
								<Typography variant='subtitle1' color='white' fontWeight='bold'>
									Company
								</Typography>
								<Typography variant='body2' color='white'>
									About Us
								</Typography>
								<Typography variant='body2' color='white'>
									Careers
								</Typography>
								<Typography variant='body2' color='white'>
									Press
								</Typography>
							</FooterColumn>
						</Grid>
						<Grid item xs={12} sm={3}>
							<FooterColumn>
								<Typography variant='subtitle1' color='white' fontWeight='bold'>
									Support
								</Typography>
								<Typography variant='body2' color='white'>
									Manage Booking
								</Typography>
								<Typography variant='body2' color='white'>
									Contact
								</Typography>
								<Typography variant='body2' color='white'>
									Legal Notice
								</Typography>
								<Typography variant='body2' color='white'>
									Privacy Policy
								</Typography>
								<Typography variant='body2' color='white'>
									Terms & Conditions
								</Typography>
							</FooterColumn>
						</Grid>
						<Grid item xs={12} sm={3}>
							<FooterColumn>
								<Typography variant='subtitle1' color='white' fontWeight='bold'>
									Become a partner
								</Typography>
								<Typography variant='body2' color='white'>
									Affiliate Programs
								</Typography>
								<Typography variant='body2' color='white'>
									Travel Agencies
								</Typography>
								<Typography variant='body2' color='white'>
									Bloggers
								</Typography>
								<Typography variant='body2' color='white'>
									Get the API
								</Typography>
							</FooterColumn>
						</Grid>
						<Grid item xs={12} sm={3}>
							<FooterSection>
								<Typography variant='subtitle1' color='white' fontWeight='bold'>
									Get update and Special offers
								</Typography>
								<TextField
									variant='outlined'
									placeholder='Type your email'
									fullWidth
									InputProps={{
										style: { backgroundColor: '#fff', color: '#000' },
									}}
								/>
								<SocialMediaIcons>
									<Grid>
										<Box>Get our apps</Box>
										<IconButton
											sx={{ padding: 0 }}
											color='inherit'
											href='https://facebook.com'
										>
											<FacebookIcon />
										</IconButton>
										<IconButton color='inherit' href='https://twitter.com'>
											<TwitterIcon />
										</IconButton>
									</Grid>
									<Grid>
										<Box>Follow us</Box>
										<IconButton
											sx={{ padding: 0 }}
											color='inherit'
											href='https://instagram.com'
										>
											<InstagramIcon />
										</IconButton>
										<IconButton color='inherit' href='https://linkedin.com'>
											<LinkedInIcon />
										</IconButton>
									</Grid>
								</SocialMediaIcons>
							</FooterSection>
						</Grid>
					</Grid>
				</Grid>
				<Box
					borderTop='1px solid'
					sx={{ paddingTop: 2, display: 'flex', justifyContent: 'space-between' }}
				>
					<Typography>© 2023, ferryengine.com, All rights reserved</Typography>
					<Box sx={{ display: 'flex' }}>
						<Typography>Visa</Typography>
						<Typography sx={{ paddingLeft: 2 }}>Paypal</Typography>
					</Box>
				</Box>
			</Container>
		</FooterContainer>
	)
}

export default Footer