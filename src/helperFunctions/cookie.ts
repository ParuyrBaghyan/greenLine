export function setCookie(name:any, value:any, days:any) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); 
    const expiresString = "expires=" + expires.toUTCString(); 
    document.cookie = `${name}=${value}; ${expiresString}; path=/`; 
  }
  