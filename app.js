const form = document.getElementById("task-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const roomSelect = document.getElementById("room-select").value;
  const styleSelect = document.getElementById("style-select").value;
  const designerSelect = selectDesigner();
  const prompt = `${roomSelect} designed by ${designerSelect} in ${styleSelect} style ,photo,trending on pinterest, hd, 8k`;
  const negprompt = 'ugly,bad composition, blurry, multiple items,abnormal, unrealistic, double, contorted, disfigured, malformed, amateur, extra, duplicate,blurry image,oversaturated,out of frame, lowres, text, error, cropped, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, out of frame, blurry, bad proportions, bad shadow,text,watermark, censored,text font ui,black and white, black and white filter, colorless,liquid body, liquid tongue, disfigured,uncoordinated ';
  const data = {
    model: "img2img",
    data: {
      prompt: prompt,
      negprompt: negprompt,
      samples: 1,
      steps: 50,
      aspect_ratio: "square",
      init_image_url: "https://i.ibb.co/z4LsGrc/23.png",
      strength: 0.75,
      guidance_scale: 7.5,
      seed: Math.floor(Math.random() * 1000000),
    },
  };
  const headers = {
    "x-api-key": "key",
    "Authorization" : "Bearer ",
    "Content-Type": "application/json",
  };

  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.monsterapi.ai/apis/add-task",
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((result) => {
     //
      const processId = result["process_id"];
      console.log (processId);
      //result.process_id
      document.getElementById("result").innerHTML = "Process ID: " + processId;
      document.getElementById("fetch-status-button").disabled = false;

      // Store the process ID for later use
      const fetchStatusButton = document.getElementById("fetch-status-button");
      const loadingSymbol = document.getElementById("loading-symbol");

      fetchStatusButton.addEventListener("click", (event) => {
        // Make another API call to get the task status
        const statusData = {
          process_id: processId,
        };

        loadingSymbol.style.display = "block";
        setTimeout(function () {
          loadingSymbol.style.display = "none";
        }, 3000);

        fetch(
          "https://cors-anywhere.herokuapp.com/https://api.monsterapi.ai/apis/task-status",
          {
            method: "POST",
            headers: headers,
            body: JSON.stringify(statusData),
          }
        )
          .then((response) => response.json())
          .then((statusResult) => {
            console.log(statusResult);
            console.log(statusResult.response_data.status);
            if (statusResult.response_data.status === "COMPLETED") {
              console.log(statusResult.response_data.result.output[0]);
              loadingSymbol.style.display = "none";
              const imgpath = statusResult.response_data.result.output[0];
              document.getElementById("imagepathres").innerHTML =
                "Image  Path : " + imgpath;
              alert("Task Completed");
              document.getElementById("downloadResultBtn").style.display =
                "block";
              document
                .getElementById("downloadResultBtn")
                .addEventListener("click", function () {
                  window.open(statusResult.response_data.result.output[0]);
                });
            } else {
              alert("Task is still in progress");
              document.getElementById("downloadResultBtn").style.display =
                "none";
            }
          })
          .catch((error) => {
            //console.error(error);
          });
      });
    })
    .catch((error) => {
     // console.error(error);
    });
});
