import Chat from "./components/Chat";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to your ChatGPT 3.5 Turbo Assistant</h1>
      <Chat />
    </main>
  );
}
