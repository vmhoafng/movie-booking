import useQuery from '@/app/hooks/useQuery';
import CreatePasswordForm from './components/CreatePasswordForm';
import EmailAddress from './components/EmailAddress';

const ForgotPassword = () => {
	const searchParams = useQuery();
	const verify = searchParams.get('verify');

	return (
		<div className="flex flex-col-reverse xl:flex-row justify-center items-center lg:items-start py-5 lg:py-[50px] 2xl:py-[60px] gap-[10px] lg:gap-5 2xl:gap-20">
			<div className="flex flex-col justify-center items-center gap-5">
				{!verify ? (
					<EmailAddress></EmailAddress>
				) : (
					<CreatePasswordForm verify={verify}></CreatePasswordForm>
				)}
			</div>
		</div>
	);
};

export default ForgotPassword;
