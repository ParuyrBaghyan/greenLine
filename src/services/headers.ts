export default function Headers({ headers, accept, origin, ostype }: { headers: Headers, accept: string, origin: string, ostype: string }) {
  headers.set("Accept", accept);
  headers.set("Origin", origin);
  headers.set("Ostype", ostype);

  const token = localStorage.getItem("token");
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const langId = localStorage.getItem("langId");
  if (langId) {
    headers.set("Content-Language", langId);
  }
}
