const player = videojs("player");

$(function () {
  fetch("/output")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      /** 플레이어 세팅 */
      const channelList = Object.keys(data);
      player.controlBar.addChild("qualitySelector");

      /** 채널 버튼 생성*/
      channelList.forEach((channel) => {
        let channelData = data[channel];

        let thumbnail = document.createElement("div");
        thumbnail.classList.add("thumbnail");

        let img = document.createElement("img");
        img.width = 192;
        img.height = 110;
        img.src = channelData.img || "/static/images/index.png";

        let text = document.createElement("span");
        text.textContent = channel;
        text.classList.add("thumbnail-text");

        thumbnail.addEventListener("click", () => {
          player.src(
            Object.entries(channelData)
              .filter(([label, url]) => label !== "img")
              .map(([label, url]) => ({
                src: url,
                type: "application/x-mpegURL",
                label: label + "P",
                selected: label === "1080",
              }))
          );
        });

        thumbnail.appendChild(img);
        thumbnail.appendChild(text);
        document.getElementById("channel-list").appendChild(thumbnail);
      });

      /** 첫번째 채널 강제 셋팅 */
      const firstChannel = channelList[0];
      const firstChannelData = data[firstChannel];
      player.src(
        Object.entries(firstChannelData)
          .filter(([label, url]) => label !== "img")
          .map(([label, url]) => ({
            src: url,
            type: "application/x-mpegURL",
            label: label + "P",
            selected: label === "1080",
          }))
      );

      /** 주소 복사 URL 갱신 */
      player.on("loadedmetadata", function (e) {
        document.getElementById("url").value = player.currentSrc();
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

function copyText() {
  const urlInput = document.getElementById("url");
  const urlValue = urlInput.value;

  const dummyElement = document.createElement("textarea");
  dummyElement.value = urlValue;
  document.body.appendChild(dummyElement);
  dummyElement.select();
  document.execCommand("copy");
  document.body.removeChild(dummyElement);

  alert("복사되었습니다");
}
