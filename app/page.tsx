import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <header className="bg-white shadow-md p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image src="/logo.jpeg" alt="AK Advocates Logo" width={80} height={80} />
            <div>
              <h1 className="text-3xl font-bold text-blue-800">Atim Kiprotich Advocates</h1>
              <p className="text-sm text-gray-600">
                Notaries & Commissioner for Oaths | Employment & Labour Relations | Tax, Legal Audit & Compliance
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-sm">2nd Floor, Door 1 GV Plaza, Woodlands, Hurlingham Nairobi</p>
            <p className="text-sm">P.O. BOX 44666-00100</p>
            <p className="text-sm">Tel: +254 706 378 445</p>
            <p className="text-sm">Email: info@akaadvocates.com</p>
          </div>
        </div>
      </header>

      <section className="py-16 px-6 md:px-20 bg-blue-50">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">About Us</h2>
        <p className="max-w-4xl mx-auto text-center text-lg mb-4">
          Atim Kiprotich Advocates is a progressive law firm in Nairobi, Kenya offering strategic legal services across multiple disciplines.
          Our team brings deep expertise and a client-first approach in every engagement. We are driven by integrity, precision, and results.
        </p>
        <p className="max-w-3xl mx-auto text-center italic text-md">
          Notaries & Commissioner for Oaths, Employment and Labour Relations, Tax, Legal Audit & Compliance, Consultants
        </p>
      </section>

      <section className="px-6 md:px-20 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <Image src="/footer-banner.jfif" alt="Footer Banner" width={1080} height={360} className="rounded shadow-md" />
        </div>
      </section>

      <footer className="bg-white text-center text-sm py-4 border-t">
        &copy; {new Date().getFullYear()} Atim Kiprotich Advocates. All rights reserved.
      </footer>
    </main>
  );
}
