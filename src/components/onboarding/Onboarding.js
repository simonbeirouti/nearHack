"use client";

import React, { useState } from 'react';
import useNearWalletStore from '../../store/useNearWalletStore';

const Onboarding = () => {
	const [inputAccountId, setInputAccountId] = useState('');
	const { login, accountId, isLoading, error } = useNearWalletStore();

	const handleLogin = async (e) => {
		e.preventDefault();
		await login(inputAccountId);
	};

	if (accountId) {
		return <div>Welcome, {accountId}!</div>;
	}

	return (
		<div>
			<h2>NEAR Login</h2>
			<form onSubmit={handleLogin}>
				<input
					type="text"
					value={inputAccountId}
					onChange={(e) => setInputAccountId(e.target.value)}
					placeholder="Enter NEAR account ID"
				/>
				<button type="submit" disabled={isLoading}>
					{isLoading ? 'Logging in...' : 'Login'}
				</button>
			</form>
			{error && <p>Error: {error}</p>}
		</div>
	);
};

export default Onboarding;
