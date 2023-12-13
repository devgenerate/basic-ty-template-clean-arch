import { Header } from "@/components/header";
import { Videos } from "@/components/videos";

function HomePage() {
    return (
        <main>
            <Header />
            <section className="p-5 grid grid-cols-3 gap-4">
                <Videos />
            </section>
        </main>
    );
}

export default HomePage;
