fetch('company.json')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.getElementById('company-table-body');
                data.forEach(company => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td class="px-6 py-4 whitespace-nowrap">${company.company}</td>
                        <td class="px-6 py-4 whitespace-nowrap">${company.ticker}</td>
                        <td class="px-6 py-4 whitespace-nowrap">${company.vertical}</td>
                        <td class="px-6 py-4 whitespace-nowrap">${company.price}</td>
                        <td class="px-6 py-4 whitespace-nowrap">${company.marketCap}</td>
                        <td class="px-6 py-4 whitespace-nowrap">${company.revenueGrowth}</td>
                        <td class="px-6 py-4 whitespace-nowrap">${company.grossMargin}</td>
                        <td class="px-6 py-4 whitespace-nowrap">${company.evRevenue}</td>
                        <td class="px-6 py-4 whitespace-nowrap">${company.ytdPerformance}</td>
                    `;
                    tableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching data:', error));