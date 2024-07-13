const ctx = document.getElementById('myChart').getContext('2d');
const socialMedia = ['WPPOOL', 'Google', 'Microsoft', 'Twitter']; // Replace with your social media names
const percentages = [
    [20, 30, 25, 25, 15, 10], 
    [15, 35, 20, 30, 25, 20, 18],
    [10, 25, 30, 35, 28, 22, 15, 12] 
];

const colors = [
   'rgba(252, 113, 77, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(153, 102, 255, 1)'
]; // Replace with your desired colors

const datasets = socialMedia.map((platform, index) => ({
    label: platform,
    data: percentages[index],
    backgroundColor: colors[index],
    borderColor: colors[index],
    borderWidth: 1,
    pointStyle: 'square',
    pointRadius: 5,
    pointBorderColor: colors[index],
    pointBackgroundColor: '#fff'
}));

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'], 
        datasets: datasets
    },
    options: {
        scales: {
            y: {
                min: 0,
                max:100,
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom', 
                labels: {
                    usePointStyle: true 
                }
            }
        },
        maintainAspectRatio: false
    }
});
