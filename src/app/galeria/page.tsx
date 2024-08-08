import { Template, ImageCard } from '../../components'

export default function GeleriaPage() {
    return (
        <Template>
            <section className="grid grid-cols-3 gap-8">
                <ImageCard nome='Teste' tamanho='10MB' dataUpload='01/01/2024' src='https://img.freepik.com/fotos-gratis/foto-de-grande-angular-de-uma-unica-arvore-crescendo-sob-um-ceu-nublado-durante-um-por-do-sol-cercado-por-grama_181624-22807.jpg'/>
                <ImageCard nome='Teste' tamanho='10MB' dataUpload='01/01/2024' src='https://img.freepik.com/fotos-gratis/foto-de-grande-angular-de-uma-unica-arvore-crescendo-sob-um-ceu-nublado-durante-um-por-do-sol-cercado-por-grama_181624-22807.jpg'/>
                <ImageCard nome='Teste' tamanho='10MB' dataUpload='01/01/2024' src='https://img.freepik.com/fotos-gratis/foto-de-grande-angular-de-uma-unica-arvore-crescendo-sob-um-ceu-nublado-durante-um-por-do-sol-cercado-por-grama_181624-22807.jpg'/>
            </section>
        </Template>
    )
}