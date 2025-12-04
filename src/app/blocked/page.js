export default function BlockedPage() {
  return (
    <div className="flex items-center justify-center h-screen p-6 bg-white">
      <div className="max-w-md w-full text-center p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Access Restricted</h1>
        <p className="text-gray-600 font-regular text-xl">
          This website is only available for users from <span className="font-bold">Brazil</span>.
        </p>
      </div>
    </div>

  );
}
