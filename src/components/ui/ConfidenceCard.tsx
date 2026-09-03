import { Brain, ShieldCheck, RotateCcw } from "lucide-react";

interface Props {
  confidence: number;
}

export default function ConfidenceCard({ confidence }: Props) {
  const accepted = confidence >= 80;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

      <div className="flex items-center gap-3">

        <Brain className="text-cyan-400" />

        <div>
          <p className="text-sm text-gray-400">
            AI Confidence
          </p>

          <p className="text-2xl font-bold">
            {confidence}%
          </p>
        </div>

      </div>

      <div className="mt-6 h-3 bg-white/10 rounded-full overflow-hidden">

        <div
          className="h-full bg-cyan-400 rounded-full transition-all duration-700"
          style={{ width: `${confidence}%` }}
        />

      </div>

      <div className="mt-6 flex items-center gap-3">

        {accepted ? (
          <>
            <ShieldCheck className="text-green-400" />

            <div>
              <p className="font-semibold text-green-400">
                ACCEPT
              </p>

              <p className="text-sm text-gray-500">
                High-confidence prediction
              </p>
            </div>
          </>
        ) : (
          <>
            <RotateCcw className="text-orange-400" />

            <div>
              <p className="font-semibold text-orange-400">
                RECHECK
              </p>

              <p className="text-sm text-gray-500">
                Confidence below automatic threshold
              </p>
            </div>
          </>
        )}

      </div>

    </div>
  );
}