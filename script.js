// Dashboard chart
const ctx = document.getElementById('walletChart')?.getContext('2d');
if (ctx) {
  const walletChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{
        label: 'Wallet Value ($)',
        data: [1200, 1250, 1300, 1360, 1430],
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderColor: 'red',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: false }
      }
    }
  });
}
