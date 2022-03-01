import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function CheckLogin() {
  const history = useHistory();

	useEffect(
		() => {
			const token = localStorage.getItem('tokenGerador');

			if (token === null) {
				history.push('/login');
			} else {
        history.push('/dashboard');
			}
		},
		[ history ]
	);
}