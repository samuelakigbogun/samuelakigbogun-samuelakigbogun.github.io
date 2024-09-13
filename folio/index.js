let arrowClick = (e) => {
    let percentCalc = e.className
      .replace("up", "")
      .replace("down", "")
      .replace("%", "")
      .replace("-", "");
    percentCalc = (+percentCalc * 0.7) / 20;
    document.querySelectorAll(".scroller").forEach((h) => {
      h.contains(e)
        ? scrollTo(0, h.offsetTop + window.innerHeight * percentCalc + 1)
        : "";
    });
  };
  let val = false;
  window.onscroll = () => {
    document.querySelectorAll(".white").forEach((i) => {
      ///   getComputedStyle(i).zoom.includes("1.00001") ? (val = true) : "";
      //console.log(8);
      i.getBoundingClientRect().top < window.innerHeight * (5 / 100) &&
      i.getBoundingClientRect().bottom > window.innerHeight * (5 / 100)
        ? (val = true)
        : "";
      //  console.log(i.getBoundingClientRect())
      return;
    });
    document.querySelectorAll(".scroller").forEach((i) => {
      ///   getComputedStyle(i).zoom.includes("1.00001") ? (val = true) : "";
      //console.log(8);
      i.getBoundingClientRect().top < 0 && i.getBoundingClientRect().bottom > 0
        ? Math.abs(i.getBoundingClientRect().top) >= 0 &&
          Math.abs(i.getBoundingClientRect().top) < window.innerHeight * 0.7
          ? document.querySelectorAll(".section").forEach((e) => {
              i.contains(e) ? (e.style.transform = "translateX(0%)") : "";
            })
          : Math.abs(i.getBoundingClientRect().top) >= window.innerHeight * 0.7 &&
            Math.abs(i.getBoundingClientRect().top) < window.innerHeight * 1.4
          ? document.querySelectorAll(".section").forEach((e) => {
              i.contains(e) ? (e.style.transform = "translateX(-20%)") : "";
            })
          : Math.abs(i.getBoundingClientRect().top) >= window.innerHeight * 1.4 &&
            Math.abs(i.getBoundingClientRect().top) < window.innerHeight * 2.1
          ? document.querySelectorAll(".section").forEach((e) => {
              i.contains(e) ? (e.style.transform = "translateX(-40%)") : "";
            })
          : Math.abs(i.getBoundingClientRect().top) >= window.innerHeight * 2.1 &&
            Math.abs(i.getBoundingClientRect().top) < window.innerHeight * 2.8
          ? document.querySelectorAll(".section").forEach((e) => {
              i.contains(e) ? (e.style.transform = "translateX(-60%)") : "";
            })
          : Math.abs(i.getBoundingClientRect().top) >= window.innerHeight * 2.8
          ? document.querySelectorAll(".section").forEach((e) => {
              i.contains(e) ? (e.style.transform = "translateX(-80%)") : "";
            })
          : ""
        : "";
  
      //  console.log(Math.abs(i.getBoundingClientRect().top),window.innerHeight) : "";
  
      //  console.log(i.getBoundingClientRect())
      return;
    });
    if (val) {
      nav.style.color = "white";
      menu.style.color = "white";
      img.classList.add("nav_img");
    } else {
      nav.style.color = "";
      menu.style.color = "";
      img.classList.remove("nav_img");
    }
    val = false;
  };
  button.onclick = () => {
     if(img.classList.contains("close_img")){
        nav.classList.remove("white_color");
        menu.classList.remove("white_color");
        img.classList.remove("close_img");
        menu_page.classList.remove("open");
        menu_page.classList.add("close");
     }
     else{
    nav.classList.add("white_color");
    menu.classList.add("white_color");
    img.classList.add("close_img");
    menu_page.classList.add("open")
  }
  };