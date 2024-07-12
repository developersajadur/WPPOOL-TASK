fetch("/wppoolportfulio.json")
  .then(res => res.json())
  .then(data => {
    const portfolioItems = document.getElementById("portfolioItems");
    data.forEach(item => {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="w-full lg:w-60 bg-white h-32 flex justify-center items-center rounded-lg">
          <img class="" src="${item.img}" alt="">
        </div>
      `;
      portfolioItems.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
