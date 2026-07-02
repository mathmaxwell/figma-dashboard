import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
	Box,
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Typography,
} from '@mui/material'
import { useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginFn } from './api/register'
import { useAuthStore } from './store/auth'
function RegisterPage() {
	const navigate = useNavigate()
	const { setAuth } = useAuthStore.getState()
	const outlinedLoginId = useId()
	const outlinedPasswordId = useId()
	const [showPassword, setShowPassword] = useState(false)
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
					gap: 2,
					p: 0,
				}}
			>
				<div>
					<Typography sx={{ color: 'white' }} variant='h3'>
						Регистрация
					</Typography>
					<Typography sx={{ color: 'grey' }} variant='h6'>
						Введите ваш логин и пароль, чтобы войти!
					</Typography>
				</div>
				<FormControl variant='filled' fullWidth sx={{ maxWidth: 400 }}>
					<InputLabel htmlFor={`${outlinedLoginId}-input`}>Войти</InputLabel>
					<OutlinedInput
						id={`${outlinedLoginId}-input`}
						value={login}
						onChange={event => {
							setLogin(event.target.value)
						}}
						label='Login'
						sx={{ borderRadius: '4px' }}
					/>
				</FormControl>
				<FormControl variant='filled' fullWidth sx={{ maxWidth: 400 }}>
					<InputLabel htmlFor={`${outlinedPasswordId}-input`}>
						Пароль
					</InputLabel>
					<OutlinedInput
						id={`${outlinedPasswordId}-input`}
						type={showPassword ? 'text' : 'password'}
						value={password}
						onChange={event => {
							setPassword(event.target.value)
						}}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label={
										showPassword ? 'hide the password' : 'display the password'
									}
									onClick={() => {
										setShowPassword(show => !show)
									}}
									onMouseDown={event => {
										event.preventDefault()
									}}
									onMouseUp={event => {
										event.preventDefault()
									}}
									edge='end'
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label='Password'
					/>
				</FormControl>
				<Button
					variant='contained'
					fullWidth
					sx={{ maxWidth: 400 }}
					onClick={async () => {
						const encodedCredentials = btoa(`${login}:${password}`)
						try {
							const response = await loginFn({
								serviceName: 'test',
								clientId: 'test-client',
								userId: '123',
								requestId: 'test-request',
								data: {
									username: login,
									password: password,
									credentials: encodedCredentials,
								},
							})
							const data = response.data.data
							setAuth({
								token: data.token,
								user: {
									id: data.id,
									name: data.name,
									username: data.username,
									role: data.role,
									face: data.face,
									classes: data.classes,
								},
							})
							navigate('/')
						} catch (error) {
							alert('hato')
							console.log('error', error)
						}
					}}
				>
					Войти
				</Button>
			</Box>
		</>
	)
}

export default RegisterPage
