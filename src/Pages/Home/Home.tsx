import React from 'react'
import styled from 'styled-components'
import { useAuth } from '../../hooks/auth'

export const Home = () => {
	const { signOut } = useAuth()
	return (
		<>
			<h1>oi</h1>
			<button onClick={signOut}>LogOut</button>
		</>
	)
}

const Container = styled.main``
