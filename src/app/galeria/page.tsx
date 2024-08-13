'use client'

import { Template, ImageCard } from '../../components'
import { Image } from 'resources/image/image.resource'
import { useImageService } from '../../resources/image/image.service'
import { useState } from 'react'

export default function GeleriaPage() {

    // const image1 = 'https://st4.depositphotos.com/3835425/30122/i/450/depositphotos_301226934-stock-photo-amazing-nature-background-wallpaper.jpg';

    // const image2 = 'https://img.freepik.com/fotos-gratis/foto-de-grande-angular-de-uma-unica-arvore-crescendo-sob-um-ceu-nublado-durante-um-por-do-sol-cercado-por-grama_181624-22807.jpg';
    // const nome1 = 'Arvore'
    // const nome2 = 'Montalha'

    // const [codigoImage, setCodigoImage] = useState<number>(2);
    // const [urlImage, setUrlImage] = useState<string>(image2);
    // const [nomeImage, setNomeImage] = useState<string>(nome2);

    // function mudarImagem() {
    //     if (codigoImage == 1) {
    //         setCodigoImage(2);
    //         setUrlImage(image2)
    //         setNomeImage(nome2)
    //     } else {
    //         setCodigoImage(1);
    //         setUrlImage(image1)
    //         setNomeImage(nome2)
    //     }
    // }

    const useService = useImageService();
    const [images, setImages] = useState<Image[]>([])
    const [query, setQuery] = useState<string>('')
    const [extension, setExtension] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    async function searchImage() {
        setLoading(true)
        const result = await useService.buscar(query, extension);
        setImages(result);
        setLoading(false)
    }

    function renderImageCard(image: Image) {
        return (
            <ImageCard key={image.url}
                nome={image.name}
                src={image.url}
                tamanho={image.size}
                extension={image.extension}
                dataUpload={image.uploadDate} />
        )
    }

    function renderImageCards() {
        return images.map(renderImageCard)
    }

    return (
        <Template loading={loading}>
           
            <section className="flex flex-col items-center justify-center my-5">
                <div className="flex space-x-4">
                    <input type="text" 
                           onChange={event => setQuery(event.target.value)}
                           className="border px-3 py-2 rounded-lg text-gray-900" />
                    <select onChange={event => setExtension(event.target.value)} 
                            className="border px-4 py-2 rounded-lg text-gray-900">
                        <option value="">All formats</option>
                        <option value="PNG">PNG</option>
                        <option value="JPEG">JPEG</option>
                        <option value="GIF">GIF</option>
                    </select>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover: bg-blue-300" onClick={searchImage}>Search</button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover: bg-yellow-300">Add New</button>
                </div>
            </section>

            <section className="grid grid-cols-3 gap-8">
                {
                    renderImageCards()
                }
            </section>
        </Template>
    )
}