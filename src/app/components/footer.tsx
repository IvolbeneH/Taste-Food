export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-50 p-4 shadow-xl">
      <h1 className="flex items-center gap-2 text-sm text-zinc-400">
        © {year} Copyright{" "}
        <span className="text-base font-bold text-red-600">Taste Food.</span>
      </h1>
    </footer>
  );
}
