function renderButtons() {
  const viewerIcon = ImageAssets().ViewerBtnIcon;
  const ownerIcon = ImageAssets().OwnerBtnIcon;
  const modIcon = ImageAssets().ModeratorBtnIcon;
  const buttonsHtml = `
        <div class="renderBtn" style="display: flex; flex-direction: row; justify-content: center;">
          <div id="buttons">
            <!-- Container 1 -->
            <div class="container">
              <!-- Button for Random Chats -->
              <button class="btn" onclick="RandomChats()">
              ${viewerIcon}
              </button>     
              <button id="button1" class="opt" onclick="toggleButtons('button1')">></button>
              <div id="toggleButtons1" class="toggle-buttons">
                <button class="button btnOn" id="render-owner-chat">
                 ${ownerIcon}
                </button>
                <button class="button btnOn" id="render-moderator-chat">
                ${modIcon}  
                </button>
                <button class="button btnOn" id="render-member-chat">
                  <img style="width: 15px; height: 15px" src="https://res.cloudinary.com/dxcmt3zoc/image/upload/v1680602632/Frame_2_hzxp2b.png" />
                </button>
                <button class="button btnOn" id="render-viewer-chat">
                  ${viewerIcon}
                </button>
              </div>
            </div>
         
            <div class="container">
         
              <button class="btn" style="max-width: 40px; max-height: auto" onclick="RandomSuppa()">
                <img style="width: 100%; height: 100%" src="/src/img/Subtract(1).svg" />
              </button>
   
              <button id="button2" class="opt" onclick="toggleButtons('button2')">></button>
        
              <div id="toggleButtons2" class="toggle-buttons">
                <button class="button btnOnSC" onclick="T1Suppa()" style="max-width: 26px; max-height: auto; background-color: rgba(30, 136, 229, 1);">
                  <img style="width: 100%; height: 100%" src="/src/img/Subtract(1).svg" />
                </button>
                <button class="button btnOnSC" onclick="T2Suppa()" style="max-width: 26px; max-height: auto; background-color: rgba(0, 229, 255, 1);">
                  <img style="width: 100%; height: 100%" src="/src/img/Subtract(1).svg" />
                </button>
                <button class="button btnOnSC" onclick="T3Suppa()" style="max-width: 26px; max-height: auto; background-color: rgba(29, 233, 182, 1);">
                  <img style="width: 100%; height: 100%" src="/src/img/Subtract(1).svg" />
                </button>
                <button class="button btnOnSC" onclick="T4Suppa()" style="max-width: 26px; max-height: auto; background-color: rgba(255, 202, 40, 1);">
                  <img style="width: 100%; height: 100%" src="/src/img/Subtract(1).svg" />
                </button>
                <button class="button btnOnSC" onclick="T5Suppa()" style="max-width: 26px; max-height: auto; background-color: rgba(245, 124, 0, 1);">
                  <img style="width: 100%; height: 100%" src="/src/img/Subtract(1).svg" />
                </button>
                <button class="button btnOnSC" onclick="T6Suppa()" style="max-width: 26px; max-height: auto; background-color: rgba(233, 30, 99, 1);">
                  <img style="width: 100%; height: 100%" src="/src/img/Subtract(1).svg" />
                </button>
                <button class="button btnOnSC" onclick="T7Suppa()" style="max-width: 26px; max-height: auto; background-color: rgba(230, 33, 23, 1);">
                  <img style="width: 100%; height: 100%" src="/src/img/Subtract(1).svg" />
                </button>
              </div>
            </div>
            <!-- Container 3 -->
            <div class="container">
              <!-- Button for Random Mem -->
              <button class="btn" onclick="RandomMem()">
                <i class="fa-solid fa-star TextShadow" style="color: #29a13e"></i>
              </button>
              <!-- Toggle Button 3 -->
              <button id="button3" class="opt" onclick="toggleButtons('button3')">></button>
              <!-- Toggle Buttons Container 3 -->
              <div id="toggleButtons3" class="toggle-buttons">
                <button class="button btnOn" onclick="MemberShip()">Member</button>
                <button class="button btnOn" onclick="renderGift()">Gift</button>
              </div>
            </div>
            <!-- Container 4 -->
            <div class="container">
              <!-- Button for Render Sticker -->
              <button class="btn" onclick="RenderSticker()" style="border-radius: 5px;">
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: auto; height: 20px;" class="style-scope yt-icon">
                  <g class="style-scope yt-icon">
                    <path d="M13.67,12.41l2.01-1.74l-2.65-0.23L12,8l-1.03,2.44l-2.65,0.23l2.01,1.74L9.72,15L12,13.63L14.27,15L13.67,12.41z M2,5v14 h15h0.41L22,14.41V14V5H2z M17,14v3.99L16.99,18H3V6h18v7.99L20.99,14H17z" fill="#fff" class="style-scope yt-icon"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      `;
  // Append buttonsHtml to the desired element
  $("#render-chat-buttons").html(buttonsHtml);
}
