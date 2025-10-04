export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded p-2"
          />
          <input
            type="password"
            placeholder="Senha"
            className="border rounded p-2"
          />
          <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
