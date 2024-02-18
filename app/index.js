const cloud = document.getElementById("chat-box");
const msg = document.getElementById("msg");

function sendMessage() {
  const newMsg = msg.value.trim();

  if (newMsg !== "") {
    const avatarUrl = "assets/images/avatar.jpeg";
    const avatarNick = "afterCode2099";
    cloud.innerHTML += `
    <section class="relative text-right mb-14">
          <h2 class="font-bold text-blue-900 dark:text-blue-200">${avatarNick}</h2>
          <article class="flex items-center absolute right-0">
            <img
              src="${avatarUrl}"
              alt="user"
              class="w-16 h-16 mr-2 rounded-full border-4 border-blue-900 text-blue-900 dark:border-blue-200"
            />
            <p class="p-2 rounded-md bg-gray-300 text-black dark:bg-gray-600 dark:text-blue-200">
              ${newMsg}
            </p>
          </article>
        </section>
    `;
  }

  if (newMsg === "") {
    Swal.fire({
      icon: "error",
      title: "Uups...",
      text: "Cheee no hay texto!!",
    });
  }

  msg.value = "";
}

function logout() {
  window.location.href = "pages/extra.html";
}

function darkMode() {
  document.documentElement.classList.toggle("dark");
}
