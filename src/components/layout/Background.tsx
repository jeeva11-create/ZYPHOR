
export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[#070b14]" />

      <div
        className="fixed inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />
    </>
  );
}