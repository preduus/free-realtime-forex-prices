import { Container, PreloaderContent, PreloaderContentInner } from "./styles";


const Preloader: React.FC = () => {
    return <Container>
        <PreloaderContent>
            <PreloaderContentInner />
        </PreloaderContent>
    </Container>
}

export default Preloader;