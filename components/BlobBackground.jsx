import React from "react";

export default function BlobBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Blob 1 */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-400 opacity-40 rounded-full filter blur-3xl animate-blob1 mix-blend-lighten" />
      {/* Blob 2 */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600 opacity-30 rounded-full filter blur-3xl animate-blob2 mix-blend-lighten" />
      {/* Blob 3 */}
      <div className="absolute top-[30%] left-[60%] w-[35vw] h-[35vw] bg-purple-300 opacity-40 rounded-full filter blur-2xl animate-blob3 mix-blend-lighten" />
      {/* Blob 4 */}
      <div className="absolute bottom-[10%] left-[30%] w-[30vw] h-[30vw] bg-purple-500 opacity-30 rounded-full filter blur-2xl animate-blob4 mix-blend-lighten" />
      {/* Blob 5 */}
      <div className="absolute top-[60%] right-[20%] w-[25vw] h-[25vw] bg-purple-200 opacity-30 rounded-full filter blur-2xl animate-blob5 mix-blend-lighten" />
    </div>
  );
} 