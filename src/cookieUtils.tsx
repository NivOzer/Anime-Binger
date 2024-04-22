// cookieUtils.js

// Function to set a cookie
export function setCookie(name: string, value: number, seasonNumber?: number) {
  const date = new Date();
  // Set the expiration date to half a year from now
  date.setTime(date.getTime() + 182 * 24 * 60 * 60 * 1000);
  const expires = "; expires=" + date.toUTCString();

  // Construct the cookie value
  let cookieValue: any = value;
  if (seasonNumber !== undefined) {
    cookieValue = { value, seasonNumber };
  }

  // Encode and set the cookie
  document.cookie =
    name +
    "=" +
    encodeURIComponent(JSON.stringify(cookieValue)) +
    expires +
    "; path=/";
}

// Function to get a cookie
export function getCookie(name: String) {
  const cookieString = decodeURIComponent(document.cookie);
  const cookies = cookieString.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return JSON.parse(cookieValue);
    }
  }
  return null;
}
