// pinterest Input Search functionality

var arr = [
    { name: "Night Mountain View", image: "https://images.unsplash.com/photo-1704587422648-43f456047a72?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Day Mountain View", image: "https://images.unsplash.com/photo-1634840884193-2f6cf2538871?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Night Building View", image: "https://images.unsplash.com/photo-1704168370831-b7f450dadeb0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Tech Buildings", image: "https://media.istockphoto.com/id/1445614323/photo/smart-city-with-speed-line-glowing-light-trail-surround-the-city-big-data-connection.webp?b=1&s=170667a&w=0&k=20&c=sSNHovKtW3YO7jrsGJIyrEntR0hVIyCdA84bT-MfGus=" },
    { name: "Coding", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "City View In Evening", image: "https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Night City View", image: "https://images.unsplash.com/photo-1531819177115-428566ccfb50?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Coffee", image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Lamborgini", image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Ferrari", image: "https://images.unsplash.com/photo-1517672651691-24622a91b550?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Audi On Road", image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "GTR", image: "https://images.unsplash.com/photo-1567818735868-e71b99932e29?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "AUDI", image: "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "The Real Beauty", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

function showTheCard() {
    var clutter = "";
    arr.forEach((obj) => {
        clutter += `<div class="box">
        <img class="cursor-pointer" src=${obj.image} alt="">
        <div class="caption">${obj.name}</div>
    </div>`
    });
    document.getElementById("container").innerHTML = clutter;
};

function searchInput() {
    let input = document.querySelector("#searchinput");

    input.addEventListener("focus", () => {
        document.querySelector("#overlay").style.display = "block";
    });

    input.addEventListener("blur", () => {
        document.querySelector("#overlay").style.display = "none";
        document.querySelector("#searchdata").style.display = "none";
    });

    input.addEventListener("input", () => {

        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));

        var clutter = "";
        filteredArray.forEach((obj) => {
            clutter += ` <div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        });
        document.querySelector("#searchdata").style.display = "block";
        document.querySelector("#searchdata").innerHTML = clutter;
    });
};
searchInput();
showTheCard();