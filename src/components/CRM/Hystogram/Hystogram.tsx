import cl from './Hystogram.module.sass';
import { Bar } from 'react-chartjs-2';

export const Hystogram = () => {
	const data = {
		labels: ['0-18', '18-24', '25-31', '32-38', '39-45', '46-52', '53+'],
		datasets: [
			{
				label: 'Age Range',
				backgroundColor: 'rgba(75,192,192,1)',
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 1,
				data: [],
			},
		],
	};

	const options = {

	};


	return (
		<>
			<Bar data={data} options={options} />
		</>
	)
}
