export async function getPosts(){
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    return await respuesta.json();
}

export async function getPost(postUrl){
    const url = `${process.env.API_URL}/posts?filters[url]=${postUrl}&populate=imagen`
    const respuesta = await fetch(url)
    return await respuesta.json();
}