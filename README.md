![image](https://github.com/user-attachments/assets/b2863f63-417e-49a9-aa71-dc3a8bd0edd6)
# YouTube Livechat Dummmy Tester

This is YouTube dummy chat to test your customize YouTube chat CSS for streaming purposes.

Go to : https://rzytblc.netlify.app/

**In This DOCS:**
  - [General Info](#youtube-livechat-dummmy-tester)
  - [Tools That I Use](#tools-that-i-use)
  - [Youtube custom CSS Tips & Tricks](#youtube-chat-custom-css-tips--tricks)
  - [Update Logs](#update-logs)

# Tools That I Use

  - Designing : [Figma](https://www.figma.com)
  - Coding : [VSCode](https://code.visualstudio.com/)
  - Convert PNG -> Base64 : [Base64-image](https://www.base64-image.de/)
  - Convert SVG -> Base64 : [yoksel.github.io/url-encoder](https://yoksel.github.io/url-encoder/)

# Youtube Chat custom CSS Tips & Tricks

Centering event text on header
  > Membership Event : Member Gift, Member Join, Member Achievement
``` css
ytd-sponsorships-live-chat-header-renderer #header-content-primary-column *,
yt-live-chat-membership-item-renderer #header-content-primary-column * {
  text-align: center !important;
}
ytd-sponsorships-live-chat-header-renderer #content,
yt-live-chat-membership-item-renderer #header-content-primary-column {
  margin: auto !important;
}
```
  > Superchat Event
``` css
yt-live-chat-paid-message-renderer #single-line * {
  text-align: center !important;
  margin: auto !important;
}
yt-live-chat-paid-message-renderer #single-line {
  display: flex !important;
  flex-direction: column !important;
}
```

Iimportiingg fonts from loal (Installed Fonts)
``` css
/* Next Bro is example font*/

@font-face {
  font-family: "Next Bro";
  src: url("Next Bro.ttf");
  src: local("Next Bro"), local("Next Bro"),
    url("Next Bro.ttf") format("truetype");
}

:root{
  --FontFams: "Next Bro", sans-serif;
}

```
Remove like button on the superchat 
``` css
#action-buttons{
  display: none !important;
}
```
Special code
``` css
ytd-sponsorships-live-chat-header-renderer #primary-text,
yt-live-chat-membership-item-renderer #header-primary-text,
yt-live-chat-membership-item-renderer #header-subtext {
    font-family: var(--FontFams) !important;
    font-size: 18px !important;
    font-weight: 700 !important;
}

yt-live-chat-membership-item-renderer:not([show-only-header]) #header-subtext {
    display: none !important;
}

```

# Update Logs

  - *1 May 2024* : 
    - **superchat** Removing "show-only-header" and "is-v2-style" attribute, adding like button on superchat.
