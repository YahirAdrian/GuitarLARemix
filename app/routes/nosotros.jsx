import imagenNosotros from '../../public/img/nosotros.jpg'
import stylesNosotros from '~/styles/nosotros.css'

export function meta(){
  return [
    {title: 'GuitarLA- Sobre nosotros'},
    {description: 'Venta de guitarras, blog de música y más'},
    {name: 'viewport', content: 'width=device-width,initial-scale=1'}
  ]
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: stylesNosotros
    },
    {
      rel: 'preload',
      href: imagenNosotros,
      as: 'image'
    }
  ]
}


function nosotros() {

  return (
    <div>
      <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>
        <div className="contenido">
          <img src={imagenNosotros} alt="Imagen de introducción con una guitarra" />
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere eligendi exercitationem! Distinctio ducimus officiis cum, nulla amet id, rerum beatae impedit non voluptatem accusantium tempore quis dolorem eum repellat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere eligendi exercitationem! Distinctio ducimus officiis cum, nulla amet id, rerum beatae impedit non voluptatem accusantium tempore quis dolorem eum repellat.</p>

          </div>
        </div>

      </main>
    </div>
  )
}

export default nosotros
