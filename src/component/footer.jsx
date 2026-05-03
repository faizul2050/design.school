export default function AppFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-2xl font-bold text-orange-500">DESIGN SCHOOL</h3>
          <p className="text-gray-400 text-sm mt-2">Where creativity meets professional skill.</p>
        </div>
        
        {/* Footer links and social information */}
        <div className="flex gap-6 text-sm text-gray-400">
          <p>© 2026 DESIGN SCHOOL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}