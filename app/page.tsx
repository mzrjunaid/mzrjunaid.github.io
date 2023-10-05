import { Cover, Resume } from "@/components";

export default function Home() {
  return (
    <section className="flex flex-col gap-8">
      <Cover />
      <Resume />
    </section>
  );
}
