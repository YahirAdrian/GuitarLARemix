import { useEffect, useState } from 'react'
import Styles from '~/styles/carrito.css'
import { useOutletContext  } from '@remix-run/react'
import { ClientOnly } from 'remix-utils'

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: Styles
        }
    ]
}

export function meta(){
    return [
        {
            title: 'GuitarLA - Carrito de compras'
        },
        {
            description: 'Venta de guitarras, música, blog, carrito de compras'
        }
    ]
}

export default function Carrito() {
    const [total, setTotal] = useState(1);
    const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext()

    useEffect(()=>{
        const calculoTotal = carrito.reduce( (total, producto)=> total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    },[carrito])


    return (
        <ClientOnly fallback={'cargando...'}>
            {()=> (
                <main className="contenedor">
                    <h1 className="heading">Carrito de compras</h1>
                    <div className="contenido">

                        <div className="carrito">
                            <h2>Articulos</h2>

                            {carrito?.length === 0 ? 'Carrito vacio' : (
                                carrito?.map( producto => (
                                    <div key={producto.id} className='producto'>
                                        <div>
                                        <img src={producto.imagen} alt={`Imágen del producto: ${producto.nombre}`} />
                                        </div>

                                        <div>
                                            <p className="nombre">{producto.nombre}</p>
                                            <p className="precio">$ <span>{producto.precio}</span></p>
                                            <p className="cantidad">Cantidad:</p>
                                            <select
                                                value={producto.cantidad}
                                                className='select'
                                                onChange={ e => actualizarCantidad({
                                                    cantidad: Number(e.target.value),
                                                    id: producto.id
                                                })}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <p className="precio">Subtotal: $ <span>{producto.precio * producto.cantidad}</span></p>
                                        </div>

                                        <button
                                            type='button'
                                            className='btn btnEliminar'
                                            onClick={()=> eliminarGuitarra(producto.id)}
                                        >X</button>
                                    </div>
                                ))
                            )}
                        </div>

                        <aside>
                            <div className="resumen">
                                <h3>Resumen del pedido</h3>
                                <p>Total a pagar: $
                                    <span>{total}</span>
                                </p>
                            </div>
                        </aside>

                    </div>

                </main>
            )}
        </ClientOnly>
    )
}
