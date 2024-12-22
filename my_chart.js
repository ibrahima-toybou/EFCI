
const ctx = document.getElementById('myChart');

new Chart(ctx, {
type: 'line',
data: {
labels: ['jan', 'feb', 'mar', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
datasets: [{
label: '# Customers',
data: [120, 190, 30, 50, 20, 30, 50, 80, 90, 70, 120, 230],
borderWidth: 1
}]
},
options: {
scales: {
y: {
beginAtZero: true
}
}
}
});

const ctx1 = document.getElementById('myChart1');

new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['level 1', 'level 2', 'level 3'],
        datasets: [{
            label: '# Customers',
            data: [5, 3, 8],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
