/** Soft, slowly drifting colour blobs behind the page — purely decorative. */
export function BackgroundBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 -top-32 size-[28rem] animate-blob rounded-full bg-[var(--bg-blob-1)] opacity-60 blur-3xl" />
      <div className="absolute -right-40 top-1/3 size-[30rem] animate-blob rounded-full bg-[var(--bg-blob-2)] opacity-50 blur-3xl [animation-delay:-6s]" />
      <div className="absolute -bottom-40 left-1/4 size-[26rem] animate-blob rounded-full bg-[var(--bg-blob-3)] opacity-50 blur-3xl [animation-delay:-12s]" />
    </div>
  );
}
