//links
const season1 = [
  "https://mega.nz/folder/rn4xRbYa#B9aY-hnrLUjxSAtoRWs-yA/file/76wHhCyDZ",
  "https://mega.nz/folder/rn4xRbYa#B9aY-hnrLUjxSAtoRWs-yA",
  "https://mega.nz/folder/rn4xRbYa#B9aY-hnrLUjxSAtoRWs-yA/file/W3IgWa6K",
  "https://mega.nz/folder/rn4xRbYa#B9aY-hnrLUjxSAtoRWs-yA/file/SqpTnK6b",
  "https://mega.nz/folder/rn4xRbYa#B9aY-hnrLUjxSAtoRWs-yA/file/TmhnwRDS",
  "https://mega.nz/folder/rn4xRbYa#B9aY-hnrLUjxSAtoRWs-yA/file/jjRCRaAJ",
  "https://mega.nz/folder/rn4xRbYa#B9aY-hnrLUjxSAtoRWs-yA/file/urxhwQDK",
  "https://mega.nz/folder/rn4xRbYa#B9aY-hnrLUjxSAtoRWs-yA/file/66xHCQxI",
  "https://mega.nz/folder/rn4xRbYa#B9aY-hnrLUjxSAtoRWs-yA/file/n3oB1T6b",
  "https://mega.nz/folder/rn4xRbYa#B9aY-hnrLUjxSAtoRWs-yA/file/Sjhi1ApL",
  "https://mega.nz/folder/rn4xRbYa#B9aY-hnrLUjxSAtoRWs-yA/file/jj5xzBSZ",
  "https://mega.nz/folder/rn4xRbYa#B9aY-hnrLUjxSAtoRWs-yA/file/2qoQnQTD",
];

// const season2 =[

// ]

const seasons = [season1];

// Function to play the episode from the input
export function playEpisodeFromInput(
  episodeNumber: number,
  seasonNumber?: number
) {
  // Check if the season and episode numbers are valid
  if (seasonNumber != undefined) {
    if (
      seasonNumber < 1 ||
      seasonNumber > seasons.length ||
      episodeNumber < 1 ||
      episodeNumber > seasons[seasonNumber - 1].length
      // Get the URL of the selected episode
    ) {
      alert("Invalid season or episode number!");
      return;
    }
    // Get the URL of the selected episode
    const episodeUrl = seasons[seasonNumber - 1][episodeNumber - 1];
    // Open the selected episode URL in a new tab
    window.open(episodeUrl);
  }
}
