import React from 'react';
import { useParams } from 'react-router-dom';

function AccountDetail() {
	const { userId } = useParams();
	return <div>{userId}</div>;
}

export default AccountDetail;
