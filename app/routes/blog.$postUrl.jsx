import { useLoaderData } from "@remix-run/react";
import { getPost } from "../models/posts.server";
import { formatearFecha } from '~/utils/helpers'

export function meta({data}){
    if(!data){
        return  [
            {
                title: 'GuitarLA - Post no encontrado',
                description: 'Guitarras, Venta de guitarras. Post no encontrado'
            }
        ]
    }
    const tituloPost = data.data[0].attributes.titulo;
    return [
        {title: `GuitarLa - Post: ${tituloPost}`},
        {description: `Guitarras, Venta de guitarras. Post ${tituloPost}`}
    ]
}


export async function loader({params}){
    const post = await getPost(params.postUrl)

    if(post.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Post no encontrado'
        })
    }

    return post;
}

function Post() {
    const post = useLoaderData();
    const {titulo, contenido, publishedAt, imagen} =  post.data[0].attributes;
  return (  

    <article className="post mt-3">
       <img src={imagen.data.attributes.url} alt={`Imagen del post ${titulo}`} className="imagen" />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
    </article>
  )
}

export default Post
