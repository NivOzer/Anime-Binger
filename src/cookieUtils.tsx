export function setCookie(name: String, value: number) {
  const date = new Date();
  // Set the expiration date to half a year from now
  date.setTime(date.getTime() + 182 * 24 * 60 * 60 * 1000);
  const expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
export function getCookie(name: String) {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return JSON.parse(cookieValue);
    }
  }
  return null;
}
