let windows = [
    {
      height: 200,
      wight: 100,
      title: "Figure №1"
    },
    {
      he: 30,
      wit: 10,
      tit: "Figure №2"
    },
    {
      ht: 25,
      wht: 40,
      ti: "Figure №3"
    }
  ];
  
  let tmp;
  
  for (let i = 0; i < windows.length; i++) {
    tmp = windows[i];
    function getSum() {
      let h = 0;
      let w = 0;
      for (key in tmp) {
        if (typeof tmp[key] === "number") {
          if (h === 0) {
            h = tmp[key];
          } else if (h !== 0) {
            w = tmp[key];
          }
        } else {
          name = tmp[key];
        }
      }
      return(
        `name: ${name} <br> height: ${h} <br> wight: ${w} <br> square: ${h * w} <br> <br>`
      );
    }
    document.write(getSum());
  }