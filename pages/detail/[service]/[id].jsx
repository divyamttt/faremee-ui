import { useRouter } from "next/router";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function DetailPage() {
  const { service, id } = useRouter().query;
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 capitalize">
          {service} Detail: {id}
        </h2>
        <p className="text-center text-gray-500">
          Detail content will appear here once connected.
        </p>
      </main>
      <Footer />
    </div>
  );
}
