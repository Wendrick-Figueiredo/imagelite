interface TemplateProps {
    children: React.ReactNode;
    loading?: boolean;
}

export const Template: React.FC<TemplateProps> = ({ children, loading }: TemplateProps) => {
    return (
        <>
            <Header />
            <div className={`${loading ? 'animate-pilse' : '' } container mx-auto mt-8 px-4`}>

                <RenderIf condition={loading}>
                    <Loading />
                </RenderIf>

                {children}
            </div>
            <Footer />
        </>
    )
}

interface RenderIfProps {
    condition?: boolean;
    children: React.ReactNode;
}

export const RenderIf: React.FC<RenderIfProps> = ({ condition = true, children }) => {
    if (condition) {
        return children
    }

    return false;
}

const Loading: React.FC = () => {
    return (
        <button type="button" className="bg-indigo-500 ..." disabled>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

            </svg>
            Procesando...
        </button>
    )
}

const Header: React.FC = () => {
    return (
        <header className="bg-indigo-950 text-white py-3">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-3xl font-bold">ImageLite</h1>
            </div>
        </header>
    )
}

const Footer: React.FC = () => {
    return (
        <footer className="bg-indigo-950 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                Wendrick Samuel Do Nascimento Figueiredo
            </div>
        </footer>
    )
}