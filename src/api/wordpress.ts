const BASE_URL = "https://borislink.mystagingwebsite.com/wp-json/wp/v2";

export async function getJournal() {

  const res = await fetch(`${BASE_URL}/posts`);

  return res.json();

}

export async function getPost(id: string) {

  const res = await fetch(`${BASE_URL}/posts/${id}`);

  return res.json();

}