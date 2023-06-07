import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export const Histogram = () => {
	const chartRef = useRef<HTMLCanvasElement>(null);
	const chartInstance = useRef<Chart | null>(null);

	useEffect(() => {
		if (chartRef.current) {
			const ctx = chartRef.current.getContext('2d');

			if (ctx) {
				if (chartInstance.current) {
					chartInstance.current.data.labels = ['0-18', '18-24', '25-31', '32-38', '39-45', '46-52', '53+'];
					chartInstance.current.data.datasets[0].data = [10, 15, 20, 18, 25, 12, 8];
					chartInstance.current.update();
				} else {
					chartInstance.current = new Chart(ctx, {
						type: 'bar',
						data: {
							labels: ['0-18', '18-24', '25-31', '32-38', '39-45', '46-52', '53+'],
							datasets: [
								{
									label: 'Возраст',
									data: [10, 15, 20, 18, 25, 12, 8],
									backgroundColor: 'rgba(75, 192, 192, 0.6)',
								},
							],
						},
						options: {
							scales: {
								y: {
									beginAtZero: true,
									max: 30,
								},
							},
						},
					});
				}
			}
		}
	}, []);

	return <canvas ref={chartRef} />;
};

