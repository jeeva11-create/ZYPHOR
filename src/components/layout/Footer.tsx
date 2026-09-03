import {
  Recycle,
  Mail,
  ArrowUp,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">

            <div className="flex items-center gap-3 mb-4">
              <Recycle
                size={30}
                className="text-cyan-400"
              />

              <div>
                <h2 className="text-xl font-bold">
                  Zyphor
                </h2>

                <p className="text-xs text-gray-500">
                  AI Waste Intelligence
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 max-w-md leading-6">
              An AI-powered smart waste segregation and
              quality intelligence system designed to
              improve waste classification, verification,
              segregation, and monitoring.
            </p>

            <div className="flex items-center gap-3 mt-6">

              <a
                href="#"
                className="p-2 rounded-lg border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition"
                aria-label="Project"
              >
                <ExternalLink size={18} />
              </a>

              <a
                href="#"
                className="p-2 rounded-lg border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>

            </div>
          </div>

          {/* System */}
          <div>
            <h3 className="font-semibold mb-4">
              System
            </h3>

            <div className="space-y-3 text-sm text-gray-400">

              <a
                href="#detection"
                className="block hover:text-cyan-400 transition"
              >
                AI Detection
              </a>

              <a
                href="#dashboard"
                className="block hover:text-cyan-400 transition"
              >
                IoT Dashboard
              </a>

              <a
                href="#works"
                className="block hover:text-cyan-400 transition"
              >
                How It Works
              </a>

              <a
                href="#technology"
                className="block hover:text-cyan-400 transition"
              >
                Technology
              </a>

            </div>
          </div>

          {/* Project */}
          <div>
            <h3 className="font-semibold mb-4">
              Project
            </h3>

            <div className="space-y-3 text-sm text-gray-400">

              <a
                href="#problem"
                className="block hover:text-cyan-400 transition"
              >
                Problem
              </a>

              <a
                href="#impact"
                className="block hover:text-cyan-400 transition"
              >
                Impact
              </a>

              <a
                href="#deployment"
                className="block hover:text-cyan-400 transition"
              >
                Deployment
              </a>

              <a
                href="#home"
                className="block hover:text-cyan-400 transition"
              >
                Back to Top
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {currentYear} Zyphor. Smart Waste Intelligence System.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-cyan-400 transition"
          >
            Back to top
            <ArrowUp size={15} />
          </a>

        </div>

      </div>
    </footer>
  );
}