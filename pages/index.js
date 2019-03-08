import Link from "next/link";
import Header from "../components/header";
import Button from "../components/Button";

function Index() {
  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
        <Button>test</Button>
      </section>
    </main>
  );
}

export default Index;
