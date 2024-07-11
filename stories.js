fetch("/storyIdea.json")
  .then(response => response.json())
  .then(data => {
    const storiesContainers = document.querySelectorAll(".stories");

    data.forEach(idea => {
      const { img, name, description } = idea;

      const div = document.createElement("div");
      div.classList.add("bg-white", "rounded-lg", "p-3", "relative");

      div.innerHTML = `
        <img class="absolute -top-14" src="${img}" alt="">
        <div class="mt-16 flex flex-col gap-3">
          <h6 class="text-lg text-[#2042B6]">${name}</h6>
          <p class="text-[#191618]">${description}</p>
          <button class="bg-[#2042B6] text-white px-4 py-2 w-fit rounded-full">
            Read More
          </button>
        </div>
      `;

      storiesContainers.forEach(container => {
        container.appendChild(div.cloneNode(true));
      });
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
