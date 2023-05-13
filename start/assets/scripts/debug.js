// Создает кнопку сброса
let dubugBtn = document.createElement("span");
    dubugBtn.classList.add("fixedBtnOpenClose");
    dubugBtn.classList.add("hoverBtn");
    dubugBtn.classList.add("debug");
let img = document.createElement("img");
    img.src = "./public/img/icons/debug.png";
    img.style.width = "90%";
    img.style.height = "90%";
    dubugBtn.appendChild(img);
    dubugBtn.style.display = "flex";
    dubugBtn.style.justifyContent = "center";
    dubugBtn.style.alignItems = "center";

    // Алгоритм сброса
    dubugBtn.setAttribute("onclick", "reloadData()");
    
    function reloadData() {
      const s = localStorage.getItem("s");

      localStorage.clear(); // Чистит хранилище

      if(s != null) localStorage.setItem("s", s);


      /*================================================*/
      // Получает данные для работы основных полей настроек
      /*================================================*/
      new Promise(function(resolve, reject) {
          getData("selects_data", "https://webnet.kz/app/core/data/getSelects.php");
          console.log("===>>> Данные подгружены selects_data");
          resolve();
        }).then(
          () => {
              getData('locations', "https://webnet.kz/api/getTable?table=locations");
              console.log("===>>> Данные подгружены locations");
              location.reload();
        });
    }


    document.body.appendChild(dubugBtn);


