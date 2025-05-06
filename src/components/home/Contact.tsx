const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto px-4 max-w-xl text-center">
        <h2 className="mb-6 font-bold text-3xl">Contact Me</h2>
        <p className="mb-8 text-gray-600">
          Have a project in mind or want to connect? Let&#39;s talk!
        </p>
        <a
          href="mailto:youremail@example.com"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-md text-white"
        >
          Say Hello 👋
        </a>
      </div>
    </section>
  );
};
export default Contact;
