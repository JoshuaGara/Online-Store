document.querySelectorAll(".btnInfoPesanan").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;
    let gambar = parent.querySelector(".card-img-top").src;
    let judul = parent.querySelector(".card-text").innerHTML;
    let deskripsi = parent.querySelector(".card-text-2").innerHTML;

    let tombolModal = document.querySelector(".btnModal");
    tombolModal.click();

    document.querySelector(".modalTitle").innerHTML = judul;
    let image = document.createElement("img");
    image.src = gambar;
    image.classList.add("w-100");
    document.querySelector(".modalImage").innerHTML = "";
    document.querySelector(".modalImage").appendChild(image);
    document.querySelector(".modalDeskripsi").innerHTML = deskripsi;

    const hp = "6285256508123";
    let pesan = `https://api.whatsapp.com/send?phone=${hp}&text=Halo kak, saya ingin memesan produk ini ${gambar}`;

    document.querySelector(".btnBeli").href = pesan;
  });
});
