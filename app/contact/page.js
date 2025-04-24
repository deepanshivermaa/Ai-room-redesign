export default function ContactPage() {
  return (
    <main className="px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Contact Us</h1>
      <p className="text-gray-700">Feel free to reach out to us via any of the methods below:</p>

      <div className="mt-6 space-y-4">
        <p><strong>Email:</strong> support@designora.com</p>
        <p><strong>Phone:</strong> +1 (234) 567-890</p>
        <p><strong>Instagram:</strong> <a href="https://instagram.com/designora" className="text-blue-600 hover:underline">instagram.com/designora</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/company/designora" className="text-blue-600 hover:underline">linkedin.com/company/designora</a></p>
      </div>
    </main>
  );
}
