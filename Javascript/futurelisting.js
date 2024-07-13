fetch("/JSON/futurelistings.json")
  .then(res => res.json())
  .then(data => {
    const futureListings = document.getElementById("FutureListings");

    data.forEach(listing => {
      const { img } = listing; // Assuming each listing object has an 'img' property

      const div = document.createElement("div");
      div.classList.add("bg-white", "flex", "justify-center", "items-center", "py-4", "rounded-md");
      div.innerHTML = `
        <img src="${img}" alt="Listing Image">
      `;

      futureListings.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
