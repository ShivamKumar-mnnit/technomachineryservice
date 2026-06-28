import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #071B45 0%, #0D1117 100%)" }}
    >
      <div className="text-center px-4">
        <div className="text-8xl font-black text-[#F7B500] mb-4">404</div>
        <h2 className="text-3xl font-black text-white mb-4">Page Not Found</h2>
        <p className="text-white/50 mb-8 max-w-sm mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#F7B500] text-[#071B45] font-bold px-8 py-3.5 rounded-full hover:bg-yellow-400 transition-all"
          >
            Go Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-8 py-3.5 rounded-full hover:bg-white/20 transition-all"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
