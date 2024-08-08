interface ImageCardPros {
    nome?: string;
    tamanho?: string;
    dataUpload?: string;
    src?: string;
}

export const ImageCard: React.FC<ImageCardPros> = ({ nome, dataUpload, src, tamanho }: ImageCardPros) => {
    return (
        <div className="card relative bg-white rounded-md shadow-md transition-
        tranform ease-in duration-300 trabsform hover:shadow-lg hover:-translate-y-2">
            <img src={src} className="h-55 w-full object-cover rouded-t-md" alt="" />
            <div className="card-body p-4">
                <h5 className="text-xl font-semibold mb-2 text-gray-600">{nome}</h5>
                <p className="text-gray-600">{tamanho}</p>
                <p className="text-gray-600">{dataUpload}</p>
            </div>
        </div>
    )
}